import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function getUserFromCookie() {
    // Await cookies first
    const cookieStore = await cookies()
    const collectedCookie = cookieStore.get("BmanApp")?.value

    if (collectedCookie) {
        try {
            console.log("Verifying token...")
            return jwt.verify(collectedCookie,
                process.env.JWT_SECRET)
        } catch (error) {
            console.log("Invalid token", error.message)
            return null
        }
    }

    return null
}