'use client'

import {useState} from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react"; // or use your preferred icon library

export default function MobileMenu({navLinks}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className='md:hidden'>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className='p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                aria-label='Toggle menu'
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className='fixed inset-0 bg-black/50 z-40'
                        onClick={closeMenu}
                    />

                    {/* Menu Panel */}
                    <div className='fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 z-50 p-6'>
                        <ul className='flex flex-col gap-6'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className='text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className='pt-4 border-t border-gray-200 dark:border-gray-800'>
                                <Link
                                    href='/signup'
                                    onClick={closeMenu}
                                    className='block w-full px-4 py-2 text-center text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 transition-opacity'
                                >
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}