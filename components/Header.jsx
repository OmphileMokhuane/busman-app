'use server'

import {headers} from "next/headers";
import Link from "next/link";
import {navLinks} from "@/app/constants";
import MobileMenu from "@/components/MobileMenu";

export default async function Header() {
    return (
        <header className='w-full fixed top-0 left-0 p-4 flex items-center justify-center bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800'>
            <nav className='container flex flex-row items-center justify-between'>
                {/* Logo/Brand */}
                <div className='flex-shrink-0'>
                    <Link
                        href='/'
                        className='text-xl font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity'
                    >
                        Business Management
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex gap-8'>
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

                {/* Desktop Action Button */}
                <div className='hidden md:block'>
                    <Link
                        href='/signup'
                        className='px-4 py-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 transition-opacity'
                    >
                        Sign up
                    </Link>
                </div>

                {/* Mobile Menu */}
                <MobileMenu navLinks={navLinks} />
            </nav>
        </header>
    )
}