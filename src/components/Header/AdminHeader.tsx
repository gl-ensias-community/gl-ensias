import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const AdminHeader = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/resources", label: "Resources" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/calendar", label: "Calendar" },
    { href: "/features", label: "Features", dropdown: true }
  ];

  if (!isMounted) return null;

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between w-full">
          <div className="w-60 max-w-full">
            <Link href="/" passHref>
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>

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
            className={`absolute right-4 top-16 bg-white dark:bg-gray-dark rounded-md shadow-lg ${
              isOpen ? "block" : "hidden"
            } transform transition-transform duration-300 lg:flex lg:space-x-12 lg:relative lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link href={item.href} className={`flex py-2 px-4 text-base ${
                    pathname === item.href
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                  {item.dropdown && pathname.includes('/features') && (
                    <div className="dropdown-content bg-white shadow-lg rounded-md">
                      <Link href="/features/subfeature1" className="py-2 px-4 block text-dark hover:bg-gray-200">Subfeature 1</Link>
                      <Link href="/features/subfeature2" className="py-2 px-4 block text-dark hover:bg-gray-200">Subfeature 2</Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center justify-end pr-16 lg:pr-0">
            <Link href="/logout" className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9">
              Log Out
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;