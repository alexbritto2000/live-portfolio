import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href || (href !== '/' && router.asPath.startsWith(href));

  return (
    <Link href={href} className={`${className} relative group font-semibold text-sm transition-colors`}>
      <span className={isActive ? "text-primary dark:text-primaryDark" : "text-dark/80 dark:text-light/80 hover:text-dark dark:hover:text-light"}>
        {title}
      </span>
      <span
        className={`h-[2px] inline-block bg-primary dark:bg-primaryDark absolute left-0 -bottom-1 transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href || (href !== '/' && router.asPath.startsWith(href));

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2 font-medium text-lg`}
      onClick={handleClick}
    >
      <span className={isActive ? "text-primary dark:text-primaryDark font-bold" : ""}>
        {title}
      </span>
      <span
        className={`h-[2px] inline-block bg-primary dark:bg-primaryDark absolute left-0 -bottom-0.5 transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      ></span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-30 w-full px-16 py-4 font-medium flex items-center justify-between dark:text-light bg-light/85 dark:bg-dark/85 backdrop-blur-md border-b border-dark/10 dark:border-light/10 lg:px-8 sm:px-4 transition-all">
      {/* Mobile Hamburger Button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex p-2"
        onClick={handleClick}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Large Screen Navigation Links */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center space-x-7">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/resume" title="Resume" />
          <CustomLink href="/interview" title="Interview Q&A 💡" />
          <CustomLink href="/javascript" title="JavaScript" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-2">
          <motion.a
            href="https://github.com/alexbritto2000"
            target="_blank"
            rel="noreferrer"
            className="w-5 mx-2 text-dark dark:text-light hover:opacity-80 transition-opacity"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub Profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/alexbritto2000"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-2"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-2 flex items-center justify-center rounded-full p-1.5 transition-colors ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark w-4 h-4"} />
            ) : (
              <MoonIcon className={"fill-dark w-4 h-4"} />
            )}
          </button>
        </nav>
      </div>

      {/* Small Screen Mobile Navigation Drawer */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[75vw] flex flex-col justify-between z-40 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/95 dark:bg-light/95 rounded-2xl backdrop-blur-lg py-12 px-6 shadow-2xl border border-light/20 dark:border-dark/20"
        >
          <nav className="flex items-center flex-col justify-center space-y-2">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            <CustomMobileLink href="/resume" title="Resume" toggle={handleClick} />
            <CustomMobileLink href="/interview" title="Interview Q&A 💡" toggle={handleClick} />
            <CustomMobileLink href="/javascript" title="JavaScript" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-6 gap-4">
            <motion.a
              href="https://github.com/alexbritto2000"
              target="_blank"
              rel="noreferrer"
              className="w-6 bg-light rounded-full dark:bg-dark p-0.5"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alexbritto2000"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center rounded-full p-2 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark w-4 h-4"} />
              ) : (
                <MoonIcon className={"fill-dark w-4 h-4"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
