'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Scrollbutton from '@/components/scrollbutton'
// import Comments from '@/components/Comment'
// import ContactForm from '@/components/email'

const courses = [
  "Introduction to Web Development and AGENTIC AI  ",
  "Programming Fundamentals",
  "Technical Training Programme in web development",
  "Data Structures and Algorithms",
  "Agentic AI and Agentic Learning",   
  "Visionary Leader and Motivation",
]


const projects = [
  {
    id: 1,
    image: '/card3.png?height=220&width=328',
    author: 'Chris Guillebeau'
  },
  {
    id: 2,
    image: '/card7.png?height=220&width=328',
    author: 'Project 2'
  },
  {
    id: 2,
    image: '/blog-post.jpg?height=220&width=328',
    author: 'Project 3'
  }
]

export default function AboutSection() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 relative">
      {/* Top Border */}
      <div className="w-full border-t border-[#D1D1D1]" />

      {/* About Me Section */}
      <section className="mt-16 mb-32">
        <div className="text-center mb-16">
          <span className="text-[#251272] font-semibold text-sm uppercase font-['Nunito_Sans']">
            Description
          </span>
          <h1 className="text-[#B1B1B1] font-bold text-3xl mt-2 font-['Raleway']">
            ABOUT ME
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-[#313131] text-[15px] leading-[170.9%] tracking-[0.04em] font-['Public_Sans'] font-light">
          Hi, I am Nazia Imran—a passionate learner, designer, and developer. I have always envisioned my own universe, filled with creativity and endless possibilities. Turning my imagination into reality has been a journey of hard work, determination, and resilience.
            <br /><br />
         I am not just creating websites or designs; I am building a bridge between imagination and reality. My journey is a testament to the power of persistence and the belief that with enough effort, anything is possible.
          </p>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="grid md:grid-cols-2 gap-6 mx-auto mb-16">
        <div className='mx-auto'>
            <h1 className='text-4xl font-bold text-[#B1B1B1] mb-8 font-["Raleway"]'>Education</h1>
          <h2 className="text-[#B1B1B1] font-bold text-2xl md:text-3xl mb-8 font-['Raleway']">
            GIAIC INSTITUE OF WEB 3.0 <br />AGENTIC AI AND METAVARS TECHNOLOGY
          </h2>
          <ul className="space-y-4 font-['Public_Sans'] font-light text-[15px] tracking-[0.04em] leading-[145.9%]">
            {courses.map((course, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {course}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="relative h-[394px] bg-[#C4C4C4] grow-0 shrink-0">
          <Image
            src="/ab-sec.jpg?height=394&width=432"
            alt="Education visual"
            layout='fill'
            objectFit=""
            className="grow-0 shrink-0"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <div id='projects' className='w-full text-4xl font-bold mb-8 text-[#B1B1B1] font-["Raleway"] flex items-center'> <h1>MY PROJECTS</h1></div>
      <section className="grid md:grid-cols-3 gap-8 mb-32">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative h-[220px] w-full border border-[#C4C4C4] bg-[#DDDDDD]">
              <Image
                src={project.image}
                alt={`Project by ${project.author}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-white font-bold text-sm uppercase tracking-wider font-['Public_Sans']">
              {project.author}
            </h3>
          </motion.div>
        ))}         
      </section>
       
          {/* <div className='container mx-auto'>
          <Comments blogId={''} />
          </div> */}
{/* 
          <ContactForm />
       */}

      {/* Bottom Border */}
      <div className="w-full border-t border-[#D1D1D1]" />

      {/* Scroll to Top Button */}
      <Scrollbutton />
    </div>
  )
}