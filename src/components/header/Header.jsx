import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    {
      label: "Collections",
      link: "#"
    },
    {
      label: "Men",
      link: "#"
    },
    {
      label: "About",
      link: "#"
    },
    {
      label: "Contact",
      link: "#"
    }
  ];

  return (
    <main className="bg-black h-[100px]  leading-5 lg:leading-[100px] text-white">
      <nav className="container h-full flex justify-between px-16 items-center">
        <div className="flex items-center gap-8 ">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link to={"/"} className="text-4xl ">
             <img src="./asset/logo-top.svg" alt="" className="w-full h-[100px]"/>
            </Link>
          </section>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-4  gap-2 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" to={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>

        <section>
          <ul className="text-lg font-normal uppercase hidden lg:flex leading-[100px]">
            <li className="px-4    hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351]">
              <Link to="#" className="" >Home</Link>
            </li>
           
            <li className="px-4  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351] " >
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  PROPERTIES
                  {/* Heroicon name: chevron-down */}
                  <svg className="-mr-1  mt-10  ml-1 w-5 text-[#C5B351] h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.758l4.879-4.879a1 1 0 111.414 1.414L10 12.586z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" role="menu">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="px-4  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351]">
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  BUYING
                  {/* Heroicon name: chevron-down */}
                  <svg className="-mr-1  mt-10  ml-1 w-5 text-[#C5B351] h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.758l4.879-4.879a1 1 0 111.414 1.414L10 12.586z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" role="menu">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="px-4  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351]">
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  SELLING
                  {/* Heroicon name: chevron-down */}
                  <svg className="-mr-1  mt-10  ml-1 w-5 text-[#C5B351] h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.758l4.879-4.879a1 1 0 111.414 1.414L10 12.586z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" role="menu">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="px-4  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351]">
              <Link to="#" >Blog</Link>
            </li>
            <li className="px-4  hover:bg-[rgba(255,255,255,0.1)] hover:text-[#C5B351]">
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  ABOUT
           
                  <svg className="-mr-1  mt-10  ml-1 w-5 text-[#C5B351] h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.758l4.879-4.879a1 1 0 111.414 1.414L10 12.586z" clipRule="evenodd" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" role="menu">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </section>
      </nav>

    </main>
  );
}
