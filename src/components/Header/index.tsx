"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import Image from "next/image";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex h-23 w-full items-center ${
        sticky
          ? "dark:shadow-sticky-dark shadow-sticky bg-blue fixed z-9999 backdrop-blur-xs transition"
          : "bg-blue absolute"
      }`}
    >
      <div className="container">
        <div className="relative -mx-8 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link href="/" className={`header-logo block`}>
              <Image
                src="/logo/Australia-Wide-Nursing-Agency--Logo-336w-removebg-preview.png"
                alt="logo"
                width={200}
                height={30}
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] text-black focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? "top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`d relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? "top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar border-body-color/50 bg-blue absolute right-0 z-30 w-[250px] rounded border-[.5px] px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      <div
                        onClick={() => handleSubmenu(index)}
                        onMouseEnter={() => setOpenIndex(index)}
                        onMouseLeave={() => setOpenIndex(-1)}
                        className="cursor-pointer"
                      >
                        <Link
                          href={menuItem.path || "#"}
                          className={`flex items-center justify-between py-2 text-base text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary"
                              : "hover:text-primary"
                          }`}
                        >
                          {menuItem.title}
                          {menuItem.submenu && (
                            <span className="pl-2">
                              <svg width="20" height="20" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          )}
                        </Link>

                        {/* Submenu */}
                        {menuItem.submenu && (
                          <div
                            className={`submenu bg-blue absolute left-0 z-50 mt-1 w-[250px] rounded-sm p-2.5 text-white shadow-lg transition-all duration-300 ${
                              openIndex === index ? "block" : "hidden"
                            } lg:group-hover:block`}
                          >
                            {menuItem.submenu.map((submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={subIndex}
                                className="hover: hover:text-primary block px-3 py-2 text-sm"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
