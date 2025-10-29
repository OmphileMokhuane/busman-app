"use server"
import {getCollection} from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

function isAlphaNumeric(str) {
    const regex = /^[a-zA-Z0-9]*$/
    return regex.test(str)
}

export const register = async function (pervState, formData) {
    const errors = {}
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    if (typeof user.username !== 'string' || typeof user.password !== 'string') {
        user.username = ""
        user.password = ""
    }

    if (user.username.length < 3) errors.username = "Username must be at least 3 characters long"
    if (user.username.length > 30) errors.username = "Username must be at most 30 characters long"
    if (!isAlphaNumeric(user.username)) errors.username = "You can only use a-z, A-Z, 0-9 characters in your username"
    if (user.username.length === 0) errors.username = "Username is required"

    // Check if a user exists
    const userCollection = await getCollection('users')
    const existingUser = await userCollection.findOne({username: user.username})
    if (existingUser) errors.username = "Username is already taken"

    if (user.password.length < 12) errors.password = "Password must be at least 12 characters long"
    if (user.password.length > 30) errors.password = "Password must be at most 30 characters long"
    if (user.password.length === 0) errors.password = "Password is required"

    if (errors.username || errors.password) return {
        errors: errors,
        success: false,
    }

    // Hash the user's password
    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(user.password, salt)

    // Save the user to the database
    const newUser = await userCollection.insertOne(user)
    const userId = newUser.insertedId.toString()

    const ourTokenValue = jwt.sign({
        userId: userId,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, process.env.JWT_SECRET)

    // Log the user in by giving them a cookie
    const cookieStore = await cookies()
    cookieStore.set("BmanApp", ourTokenValue, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60,
        secure: true
    })

    redirect('/')
}

export const login = async function (prevState, formData) {
    const failObject = {
        errors: {
            username: "Invalid username or password",
        },
        success: false,
    }

    const ourUser = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    if (typeof ourUser.username !== 'string' || typeof ourUser.password !== 'string') {
        ourUser.username = ""
        ourUser.password = ""
    }

    ourUser.username = ourUser.username.trim()
    ourUser.password = ourUser.password.trim()

    const userCollection = await getCollection('users')
    const user = await userCollection.findOne({username: ourUser.username})

    if (!user) return failObject

    if (ourUser.password.length === 0) return failObject

    const matchOrNot = bcrypt.compareSync(ourUser.password, user.password)
    if (!matchOrNot) return failObject

    // Create JWT token
    const ourTokenValue = jwt.sign({
        userId: user._id.toString(),
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, process.env.JWT_SECRET)

    // Log the user in by giving them a cookie
    const cookieStore = await cookies()
    cookieStore.set('BmanApp', ourTokenValue, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60,
        secure: true
    })

    redirect('/')
}

export const logout = async function () {
    const cookieStore = await cookies()
    cookieStore.delete("BmanApp")
    redirect('/login')
}

