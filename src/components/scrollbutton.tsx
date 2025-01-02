'use client'
import { ArrowUpCircle } from 'lucide-react'
import React from 'react'

function Scrollbutton() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

  return (
    <div>
       {/* Scroll to Top Button */}
       <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 text-purple-600 hover:text-purple-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="h-12 w-12" />
      </button>
    </div>
  )
}

export default Scrollbutton
