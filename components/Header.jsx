'use server'

import {headers} from "next/headers";
import Link from "next/link";
import {navLinks} from "@/app/constants";

export default async function Header() {
    return (
        <header className='p-2 flex items-center justify-center'>
            <nav className='container flex flex-row items-center justify-between'>
                {/* Logo/Brand */}
                <div>
                    <Link
                        href='/'
                        className='text-xl text-gray-900 dark:text-white hover:opacity-80 transition-opacity'
                    >
                        Business Management
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className='flex gap-8'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className='text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Optional: Action Button */}
                <div className=''>
                    <Link
                        href='/signup'
                        className='btn text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                    >
                        Sign-up
                    </Link>
                </div>
            </nav>
        </header>
    )
}