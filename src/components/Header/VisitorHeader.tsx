import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const VisitorHeader = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(true);  // Adjusted to true initially
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true); // This ensures it's set on client-side render
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/roles", label: "Roles" },
    { href: "/skills", label: "Skills" },
    { href: "/tools", label: "Tools" },
    { href: "/statistics", label: "Statistics" },
    { href: "/contact", label: "Contact" }
  ];

  if (!isMounted) {
    return <div>Loading...</div>; // Improved handling for initial render
  }

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky ? "dark:bg-gray-800 dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between w-full">
          <div className="w-60 max-w-full">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu for mobile */}
          <div className="lg:hidden ml-auto flex items-center">
            <ThemeToggler />
            <button
              onClick={toggleMenu}
              className="p-2 ml-3 text-3xl rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          <nav
            className={`absolute right-4 top-16 bg-white dark:bg-gray-800 rounded-md shadow-lg ${
              isOpen ? "block" : "hidden"
            } transform transition-transform duration-300 lg:flex lg:space-x-12 lg:relative lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link href={item.href} onClick={() => setIsOpen(false)} className={`flex py-2 px-4 text-base ${
                    pathname === item.href
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

      
          <div className="hidden lg:flex items-center">
          <Link href="/signin" className="mr-7 text-dark hover:opacity-70 dark:text-white">
            Sign In
          </Link>
          <Link href="/signup" className="rounded-sm bg-primary px-8 py-3 text-white transition duration-300 hover:bg-opacity-90">
            Sign Up
          </Link>
          <ThemeToggler />
        </div>
        </div>
      </div>
    </header>
  );
};

export default VisitorHeader;
