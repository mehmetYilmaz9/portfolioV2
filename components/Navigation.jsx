import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navigation = () => {
  const homeTitle = "<🤟 />";
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div className="">
    <div className="max-w-6xl  mx-auto px-4 py-2 md:py-4  ">
      <div className="flex md:flex-row justify-between items-center font-roboto">
        <div className="flex flex-col "> 
          <Link href="/">
            <a
              className="font-medium text-3xl tracking-wider transition-colors text-gray-800  dark:text-white">
              {homeTitle}
            </a>
          </Link>
        </div>

      <div className="space-x-8 hidden md:block">
        <Link href="/about">
          <a
            className={`text-base  ${
              router.asPath === "/about"
              ? "text-gray-800 font-bold dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
          >
            About{" "}
            {router.asPath === "/about" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
              </svg>
            )}
          </a>
        </Link>

        <Link href="/projects">
          <a
            className={`text-base  ${
            router.asPath === "/projects"
            ? "text-gray-800 font-bold dark:text-gray-400"
            : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Projects
            {router.asPath === "/projects" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
              </svg>
              )}
            </a>
        </Link>

        
        <Link href="/contact">
          <a
            className={`text-base  ${
            router.asPath === "/contact"
            ? "text-gray-800 font-bold dark:text-gray-400"
            : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
           >
            Contact
            {router.asPath === "/contact" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
              </svg>
              )}
          </a>
        </Link>
      </div>

      <div className="space-x-4 flex flex-row items-center">
      <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-15 h-15 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-7 h-7 text-grey-500 dark:text-grey-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="space-x-8 flex justify-between md:hidden mt-4">
        <Link href="/about">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
              Projects
          </a>
        </Link>
              
        <Link href="/contact">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Contact
          </a>
        </Link>
      </div>             
     </div>
     </motion.div>
    )
}

export default Navigation;
