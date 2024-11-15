import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const VisitorHeader = ({ sticky }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);  
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true); // This ensures it's set on client-side render
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
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

  if (!isMounted) return null;

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between w-full">
          <div className="max-w-full">
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
              className="p-2 ml-3 text-3xl rounded-md text-gray-800 dark:text-gray-200"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  menuOpen ? " top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  menuOpen ? "opacity-0 " : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  menuOpen ? " top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>
          </div>

          <nav
            className={`absolute right-0 top-16 py-4 px-16 bg-white dark:bg-dark rounded-md shadow-lg ${
              menuOpen ? "block" : "hidden"
            } transform transition-transform duration-300 lg:flex lg:relative lg:top-0 lg:px-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex lg:space-x-2">
              {/* Sign In and Sign Up links for small screens */}
              {/* <li className="relative">
                <Link href="/signin" onClick={() => setMenuOpen(false)} className={`lg:hidden mx-4 mb-2 rounded-sm border flex py-2 px-4 text-base ${
                  pathname === "/signin"
                    ? "text-primary dark:text-white"
                    : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                }`}>
                  Sign In
                </Link>
              </li>
              <li className="relative">
                <Link href="/signup" onClick={() => setMenuOpen(false)} className={`lg:hidden mx-4 mb-4 rounded-sm bg-primary flex py-2 px-4 text-base ${
                  pathname === "/signup"
                    ? "text-primary dark:text-white"
                    : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                }`}>
                  Sign Up
                </Link>
              </li> */}
              {/* Divider */}
              {/* <li className="lg:hidden">
                <hr className="h-0.5 w-full bg-dark dark:bg-white/10 my-2" />
              </li> */}
              {/*  Nav Items */}
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link href={item.href} onClick={() => setMenuOpen(false)} className={`flex justify-center py-2 px-4 text-base ${
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

      
          <div className="hidden lg:flex items-center px-2">
            {/* <Link href="/signin" className="mr-7 text-dark hover:opacity-70 dark:text-white">
              Sign In
            </Link>
            <Link href="/signup" className="rounded-sm bg-primary px-8 py-3 text-white transition duration-300 hover:bg-opacity-90">
              Sign Up
            </Link> */}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default VisitorHeader;
