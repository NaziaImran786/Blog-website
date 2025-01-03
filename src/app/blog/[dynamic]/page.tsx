// 'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Instagram, Twitter, Linkedin,} from 'lucide-react'
import { Input } from "@/components/ui/input"
import Scrollbutton from '@/components/scrollbutton'
import PostCreator from '@/components/comments'
import { PortableText } from 'next-sanity'

export default async function BlogPost({searchParams}: {searchParams: Promise<{cardImage: string, heading: string, id: number, subHeading: string, description: string, date: string, time: string}>}) {
  
  const { cardImage, id, heading, subHeading, description, date } = await searchParams

  const desc = JSON.parse(description)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Blog Page
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-[200px]"
              />
            </div>
            <Link href="/" className="text-black hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600">
              Articles
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative container mx-auto  px-4 h-[400px] mb-12">
        <Image
          src={cardImage}
          alt="Man working on laptop"
          layout='fill'
          objectFit=''          
        />
      </div>

      {/* Article Content */}
      <main className="container mx-auto  max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl px-4 font-bold text-[#2D3748] mb-6">
            {heading}
          </h1>
          
          <div className="flex items-center space-x-4 text-lg mb-8">
            <span className="font-bold px-4 text-[#2D3748]">{subHeading}</span>
            <span className="text-[#718096] px-4">{date}</span>
          </div>

          <hr className="my-8 border-[#E8E7E7]" />

          <div className="text-[#718096] px-6 space-y-6">
            <PortableText value={desc}/>

          </div>
        </article>
      </main>

      {/* comments */}
       <div className='container mx-auto px-2 lg:px-12 py-12'>
        <PostCreator blog_id={id} />
       </div>

       
     

      {/* Scroll to Top Button */}
      <Scrollbutton />     
    </div>
  )
}

