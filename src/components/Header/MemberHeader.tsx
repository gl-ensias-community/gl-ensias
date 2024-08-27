import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const MemberHeader = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsFeaturesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 200);
  }, []);

  const navItems = [
    { href: "/resources", label: "Resources" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/calendar", label: "Calendar" },
    { href: "/features", label: "Features", isDropdown: true }
  ];

  if (!isMounted) return null;

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky ? "dark:bg-gray-800 dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"
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
            className={`absolute right-4 top-16 bg-white dark:bg-gray-800 rounded-md shadow-lg ${
              isOpen ? "block" : "hidden"
            } transform transition-transform duration-300 lg:flex lg:space-x-12 lg:relative lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`relative ${item.isDropdown ? 'group' : ''}`}
                  onMouseEnter={item.isDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={item.isDropdown ? handleMouseLeave : undefined}
                >
                  <Link href={item.href} className={`flex py-2 px-4 text-base ${
                    pathname === item.href
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                  {item.isDropdown && (
                    <ul
                      className={`absolute left-0 top-full bg-white dark:bg-gray-800 shadow-md rounded-md mt-1 ${
                        isFeaturesOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <li>
                        <Link href="/pfa-distributer" className="block py-2 px-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white">
                          PFA Distributer
                        </Link>
                      </li>
                      <li>
                        <Link href="/ensias-map" className="block py-2 px-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white">
                          ENSIAS Map
                        </Link>
                      </li>
                    </ul>
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

export default MemberHeader;