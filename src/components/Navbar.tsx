"use client";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm"
          : "h-20 bg-transparent"
      )}
    >
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              SMReconcile.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-200/50 shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "text-zinc-600 hover:text-green-600 hover:bg-zinc-50"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
             <Link
                className={cn(buttonVariants({ size: "sm", variant: "green" }), "rounded-full shadow-lg hover:shadow-green-200 transition-all")}
                href={contactHref}
            >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-zinc-600 hover:text-green-600 transition-colors"
            onClick={() => setShowMobileNav(!showMobileNav)}
            aria-label="Toggle menu"
          >
            {showMobileNav ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Nav Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8",
              showMobileNav
                ? "opacity-100 pointer-events-auto translate-x-0"
                : "opacity-0 pointer-events-none translate-x-full"
            )}
          >
            <div className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setShowMobileNav(false)}
                  className={cn(
                    "text-2xl font-semibold transition-colors w-full text-center py-4 border-b border-zinc-100",
                    pathname === link.href
                      ? "text-green-600"
                      : "text-zinc-600 hover:text-green-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={contactHref}
                onClick={() => setShowMobileNav(false)}
                className={cn(
                  buttonVariants({ size: "lg", variant: "green" }),
                  "w-full rounded-full mt-4"
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
