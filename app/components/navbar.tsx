'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-green-700 shadow-xl fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-yellow-500 text-3xl font-extrabold tracking-widest transform transition-transform duration-500 hover:scale-105"
        >
          Atech Media
        </Link>

        {/* Nav Items - ONLY visible on large screens */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium text-lg">
          {navItems.map(({ name, href }) => (
            <li key={name} className="group relative">
              <Link href={href} className="transition-colors duration-300">
                {name}
              </Link>
              <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </li>
          ))}
        </ul>

        {/* Hamburger menu - ONLY visible on small/medium screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none transition-transform duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu - ONLY visible on small/medium screens */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-white text-lg bg-red-500">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className="block w-full hover:text-white/80 transition"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
