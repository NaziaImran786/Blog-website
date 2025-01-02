'use client';
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#d8dded]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#2D2D2D]">Nazia Imran</span>
            <span className="text-2xl text-purple-600">Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#2D2D2D] hover:text-purple-600">
              Home
            </Link>
            <Link href="/blog" className="text-[#2D2D2D] hover:text-purple-600">
              Blog
            </Link>
            <Link
              href="/about-section"
              className="text-[#2D2D2D] hover:text-purple-600"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="text-[#2D2D2D] hover:text-purple-600"
            >
              Contact Me
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 w-[200px] bg-white"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Buy Me A Coffee
            </Button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-xl text-[#2D2D2D] hover:text-purple-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-xl text-[#2D2D2D] hover:text-purple-600"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/about-section"
                className="text-xl text-[#2D2D2D] hover:text-purple-600"
                onClick={toggleMenu}
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="text-xl text-[#2D2D2D] hover:text-purple-600"
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 w-full bg-white"
                />
              </div>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={toggleMenu}
              >
                Buy Me A Coffee
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;


// import Link from 'next/link'
// import React from 'react'
// import { Input } from './ui/input'
// import { Button } from './ui/button'

// function Navbar() {
//   return (
//     <div className="w-full bg-[#d8dded]">
//       {/* Navigation */}
//       <nav className="container mx-auto px-4 py-6">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-[#2D2D2D]">Nazia Imran</span>
//             <span className="text-2xl text-purple-600">Blog</span>
//           </Link>
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-[#2D2D2D] hover:text-purple-600">Home</Link>
//             <Link href="/blog" className="text-[#2D2D2D] hover:text-purple-600">Blog</Link>
//             <Link href="/about-section" className="text-[#2D2D2D] hover:text-purple-600">About Me</Link>
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <Input
//                 type="search"
//                 placeholder="Search"
//                 className="pl-10 w-[200px] bg-white"
//               />
//             </div>
//             <Button className="bg-purple-600 hover:bg-purple-700">
//               Buy Me A Coffee
//             </Button>
//           </div>
//         </div>
//       </nav>
//       </div>
//   )
// }

// export default Navbar
