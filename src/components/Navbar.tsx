"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {
  Home,
  User,
  Contact2Icon,
} from "lucide-react";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center border-b border-zinc-200 relative">
          <Link href={"/"} className="flex z-40 font-semibold">
            <span>Reconcile logo.</span>
          </Link>

          {/* Mobile Navigation Toggle Button */}
          <button
            className="md:hidden ml-auto mr-4"
            onClick={toggleMobileNav}
            aria-label="Toggle mobile navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMobileNav ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <div
            className={`md:hidden ${
              showMobileNav
                ? "flex flex-col absolute top-14 left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md"
                : "hidden"
            }`}
          >
            <Link
              href={"/"}
              className="flex items-center justify-center p-4 font-semibold text-gray-800 hover:text-green-500 hover:bg-gray-100"
            >
              <Home size={24} className="mr-2" />
              <span className="text-lg">Home</span>
            </Link>
            <Link
              href={"/services"}
              className="flex items-center justify-center p-4 font-semibold text-gray-800 hover:text-green-500 hover:bg-gray-100"
            >
              <Contact2Icon size={24} className="mr-2" />
              <span className="text-lg">Services</span>
            </Link>
            <Link
              href={"/about"}
              className="flex items-center justify-center p-4 font-semibold text-gray-800 hover:text-green-500 hover:bg-gray-100"
            >
              <User size={24} className="mr-2" />
              <span className="text-lg">About</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
            <Link
              href={"/"}
              className="flex z-40 font-semibold items-center transition duration-300 ease-in-out hover:text-green-500"
            >
              <Home
                size={20}
                className="mr-1 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span>Home</span>
            </Link>
            <Link
              href={"/services"}
              className="flex z-40 font-semibold items-center transition duration-300 ease-in-out hover:text-green-500"
            >
              <Contact2Icon
                size={24}
                className="mr-1 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span className="text-lg">Services</span>
            </Link>
            <Link
              href={"/about"}
              className="flex z-40 font-semibold items-center transition duration-300 ease-in-out hover:text-green-500"
            >
              <User
                size={20}
                className="mr-1 transition duration-300 ease-in-out transform hover:scale-110"
              />
              <span>About</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
