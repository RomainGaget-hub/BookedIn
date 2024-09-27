"use client";

import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    BookedIn
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="/bookings" className="text-gray-700 hover:text-blue-600">Bookings</a>
                    <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                </nav>

                {/* Profile Dropdown (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <button
                            className="flex items-center focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <img
                                className="w-8 h-8 rounded-full border-2 border-blue-600"
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                            />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                                <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200">
                    <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                    <a href="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bookings</a>
                    <a href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
                    <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
                    <div className="border-t border-gray-200 mt-2">
                        <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
