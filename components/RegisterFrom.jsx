"use client"

import Link from "next/link";
import { useActionState } from "react";
import {register} from "@/controller/userController";

export default function RegisterForm() {
    const [formState, formAction] = useActionState(register, {})
    return (
        <div className='min-h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4'>
            <form
                action={formAction}
                className='w-full max-w-md space-y-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg'
            >
                {/* Header */}
                <div className='text-center space-y-2'>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                        Create Account
                    </h2>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Sign up to get started
                    </p>
                </div>

                {/* Username */}
                <div className='space-y-2'>
                    <label
                        htmlFor='username'
                        className='block sr-only'
                    >
                        Username
                    </label>
                    <input
                        type='text'
                        autoComplete='username'
                        id='username'
                        name='username'
                        placeholder='Choose a username'
                        className='w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2.5
                                 bg-white dark:bg-gray-700
                                 text-gray-900 dark:text-white
                                 placeholder-gray-400 dark:placeholder-gray-500
                                 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-transparent
                                 transition-colors'
                    />
                    {formState?.errors?.username && (
                        <p className='text-sm text-red-600 dark:text-red-400'>
                            {formState.errors.username}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className='space-y-2'>
                    <label
                        htmlFor='password'
                        className='sr-only'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        autoComplete='new-password'
                        id='password'
                        name='password'
                        placeholder='Create a password (min 12 characters)'
                        className='w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2.5
                                 bg-white dark:bg-gray-700
                                 text-gray-900 dark:text-white
                                 placeholder-gray-400 dark:placeholder-gray-500
                                 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-transparent
                                 transition-colors'
                    />
                    {formState?.errors?.password && (
                        <p className='text-sm text-orange-400 dark:text-red-400'>
                            {formState.errors.password}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className='w-full px-4 py-2.5 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900
                             rounded-md hover:bg-gray-800 dark:hover:bg-gray-100
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300
                             transition-all duration-200'
                >
                    Create Account
                </button>

                {/* Divider */}
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300 dark:border-gray-600'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'>
                            Or
                        </span>
                    </div>
                </div>

                {/* Sign In Link */}
                <div className='text-center'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            href='/login'
                            className='font-medium text-gray-900 dark:text-white hover:underline transition-all'
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}