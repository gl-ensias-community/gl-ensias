import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

const AdminHeader = ({ sticky }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  }, []);

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/resources-management", label: "Resources" },
    { href: "/admin/projects-management", label: "Projects" },
    { href: "/admin/news-management", label: "News" },
    { href: "/admin/calendar-management", label: "Calendar" },
    { href: "/admin/features-management", label: "Features", isDropdown: true, dropdownItems: [
      { href: "/admin/features-management/pfa-distributer", label: "PFA Distributer" },
      { href: "/admin/features-management/ensias-map", label: "ENSIAS Map" }
    ] }
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
            className={`absolute right-4 top-16 bg-white dark:bg-dark rounded-md shadow-lg ${
              menuOpen ? "block" : "hidden"
            } transform transition-transform duration-300 lg:flex lg:relative lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex lg:space-x-2">
              {navItems.map((item) => (
                <li 
                  key={item.href}
                  className={`relative ${item.isDropdown ? 'group' : ''}`}
                  onMouseEnter={item.isDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={item.isDropdown ? handleMouseLeave : undefined}
                >
                  <Link href={item.href} className={`flex py-2 px-6 lg:px-4 text-base ${
                    pathname === item.href
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  
                  {item.isDropdown && (
                    <>
                      {/* Icon: Arrow Down */}
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/* Dropdown Items */}
                      <ul
                        className={`absolute left-0 top-full bg-white dark:bg-dark shadow-md rounded-md mt-1 ${
                          isDropdownOpen ? 'block' : 'hidden'
                        }`}
                      >
                        {item.dropdownItems.map((dropDownItem) => (
                          <li key={dropDownItem.href}>
                            <Link href={dropDownItem.href} className="block py-2 px-6 lg:px-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white">
                              {dropDownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  </Link>
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