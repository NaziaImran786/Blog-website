"use client";

import Image from "next/image";
import Link from "next/link";
import {ArrowUpCircle} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function BlogLandings() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Navigation and Hero sections remain unchanged */}     

      {/* More Articles Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link
          href={"/blog"}
          className="text-purple-600 hover:text-purple-700"
        >
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-50"
          >
            More Article
          </Button>
        </Link>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#F8F9FC] py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8">
            <Image
              src="/letter-box.jpeg?height=200&width=200"
              alt="Newsletter"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
            Contact Us For The Lastest Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to my newsletter and never miss my upcoming articles
          </p>
          <div className="flex gap-2 justify-center">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="max-w-xs bg-white"
            />
            <Link href={"/contact"}>
            <Button className="bg-purple-600 hover:bg-purple-700">
            Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Scroll to Top Button */}
       <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 text-purple-600 hover:text-purple-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="h-12 w-12" />
      </button>
    </div>
  );
}
