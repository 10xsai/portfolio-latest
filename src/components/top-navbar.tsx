"use client";
import { Menu } from "lucide-react";
import Logo from "../../public/portfolio_logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 py-2 flex items-center justify-between z-20 transition-all duration-300 ${
        isScrolled ? "bg-blur/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex flex-center w-full justify-between max-w-3xl m-auto">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
          <Link href="/">
            <Logo width="150" height="50" />
          </Link>
        </div>
        <div className="inline-flex justify-center items-center rounded-lg border border-white border-opacity-30 h-10 w-10 sm:hidden">
          <Menu />
        </div>
        <nav className="items-center gap-6 hidden sm:flex">
          <Link
            href="/"
            className="text-muted-foreground hover:text-accent-foreground"
          >
            Home
          </Link>
          <Link
            target="#"
            href="https://blog.10xsai.com/"
            className="text-muted-foreground hover:text-accent-foreground"
          >
            Blog
          </Link>
          {/* <Link
            href="/projects"
            className="text-muted-foreground hover:text-accent-foreground"
            >
            Projects
            </Link> */}
          <Link
            href="/about"
            className="text-muted-foreground hover:text-accent-foreground"
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
};
