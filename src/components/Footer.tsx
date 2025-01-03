import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="bg-[#d8dded] py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <span className="text-2xl font-bold text-[#2D2D2D]">Nazia Imran</span>
            <span className="text-sm text-purple-600">Blog</span>
          </Link>
          <p className="text-sm text-gray-600 mb-4">
            Design by Nazia Imran
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#2D2D2D] mb-4">CATEGORY</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-600 hover:text-purple-600">CSS</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-purple-600">Javascript</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-purple-600">Tailwind</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-purple-600">React JS</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-purple-600">More Category</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#2D2D2D] mb-4">ABOUT ME</h3>
          <ul className="space-y-2">
            <li><Link href="/about-section" className="text-gray-600 hover:text-purple-600">About Me</Link></li>
            <li><Link href="/about-section" className="text-gray-600 hover:text-purple-600">Projects</Link></li>
            <li><Link href="/about-section" className="text-gray-600 hover:text-purple-600">Achievement</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#2D2D2D] mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">+92-XXX-XXX-XX</li>
            <li className="text-gray-600">demo@gmail.com</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold text-[#2D2D2D] mb-2">FOLLOW US</h3>
            <ul className="space-y-2">                  
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">GitHub</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600">Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
        © 2025 Nazia Imran
        <span className="ml-2">
          All Copy Rights Reserved
        </span>        
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer
