"use client"

import Link from "next/link";

export default function ClientList() {
    return (
        <div className='space-y-6'>
            {/* Header Section */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                {/* Search Input */}
                <div className='w-full sm:flex-1 sm:max-w-md'>
                    <div className='relative'>
                        <svg
                            className='absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 dark:text-gray-500'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type='text'
                            placeholder='Search clients by name, email, or company...'
                            className='w-full pl-10 pr-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg
                                     bg-white dark:bg-gray-700
                                     text-gray-900 dark:text-white
                                     placeholder-gray-400 dark:placeholder-gray-500
                                     focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-300 focus:border-transparent
                                     transition-colors'
                        />
                    </div>
                </div>

                {/* Add Client Button */}
                <Link href='#'>
                    <button className='w-full sm:w-auto px-6 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                     rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300
                                     transition-all duration-200 flex items-center justify-center gap-2'>
                        <svg
                            className='h-3 w-3'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Client
                    </button>
                </Link>
            </div>
        </div>
    )
}