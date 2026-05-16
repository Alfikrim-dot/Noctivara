"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#0B0F14]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-[80px]">

          {/* LOGO */}
          <a href="/" className="group">

            <h1
              className="
                text-2xl font-semibold tracking-tight
                text-white
                transition-all duration-300
                group-hover:text-[#C6A15B]
              "
            >
              Noctivara
            </h1>

            <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-500 mt-1">
              Digital Library
            </p>

          </a>

        </div>

      </div>
    </nav>
  );
}