import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profilePic from '../../public/profile.jpeg';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

export default function Navbar() {
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add('dark');
    } else {
      setMode("light");
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [mode]);

  return (
    <header className="w-full px-4 lg:px-32 py-8 font-medium flex flex-col md:flex-row items-center justify-between dark:text-light relative gap-4 md:gap-0">
      
      <nav className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 lg:space-x-8 text-xs md:text-sm lg:text-lg">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/certifications" title="Certifications" />
        <CustomLink href="/chit-chat" title="Chit-Chat" />
      </nav>

      {/* Center Logo */}
      <div className="hidden md:flex md:absolute md:left-[50%] md:top-2 md:translate-x-[-50%] items-center justify-center">
        <Link href="/" className="w-16 h-16 bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-all duration-300 overflow-hidden">
          <Image src={profilePic} alt="AP" className="w-full h-full object-cover" />
        </Link>
      </div>

      <nav className="flex items-center justify-center flex-wrap space-x-6">
        <a href="https://www.instagram.com/johnalokpatel?utm_source=qr&igsi=MTh2cHFnMTd1dXNhYg==" target={"_blank"} rel="noreferrer" className="w-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#E1306C] hover:-translate-y-1 transition-all duration-200"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.155a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
        </a>
        <a href="https://github.com/Johnapatel" target={"_blank"} rel="noreferrer" className="w-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="hover:-translate-y-1 transition-all duration-200 dark:text-light"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/johnalokpatel" target={"_blank"} rel="noreferrer" className="w-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#0e76a8] hover:-translate-y-1 transition-all duration-200"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1 border-2 border-solid border-transparent hover:border-dark dark:hover:border-light w-8 h-8">
          {mode === "dark" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-light"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-dark"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          )}
        </button>
      </nav>
    </header>
  );
}
