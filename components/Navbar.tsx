"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About Me", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Certifications", page: "certifications" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const accentColorClass = "text-teal-500 hover:text-teal-400";
  const baseTextColorClass = "text-neutral-500 dark:text-neutral-300";

  return (
    <header className="w-full fixed top-0 z-50 shadow bg-neutral-100 dark:bg-gray-900 border-b border-neutral-300 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 md:py-5">
        {/* Logo */}
        <Link to="home">
          <h2 className={`text-2xl font-extrabold ${accentColorClass} cursor-pointer`}>
            Bhakti Jadhav
          </h2>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className={`p-2 rounded-md outline-none ${baseTextColorClass}`}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`flex-1 justify-end mt-4 md:mt-0 md:flex md:items-center ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 items-end md:items-center">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className={`text-sm ${baseTextColorClass} ${accentColorClass} font-medium hover:underline cursor-pointer`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme toggle */}
            {mounted &&
              (currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className={`bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl ${baseTextColorClass}`}
                >
                  <RiSunLine size={25} className={accentColorClass} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className={`bg-neutral-100 dark:bg-neutral-800 p-2 rounded-xl ${baseTextColorClass}`}
                >
                  <RiMoonFill size={25} className={accentColorClass} />
                </button>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
