import Link from 'next/link'
import { BsInstagram, BsLinkedin, BsArrowDown } from 'react-icons/bs';
import { SiSketchfab } from 'react-icons/si';


export default function Header() {

  return (

    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                Gaming Enthusiast & Concept Artist
              </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Julia Shcherbak Page
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Creative digital artist with 2+ years of experience specializing
                  in making concepts, modeling, and texturing for Game industry.
                  I have specialized on optimization models and textures
                  to run them as smoothe as posible and to take an advantage of it during concept stage.
                </p>
              </div>
              <p className="mt-2 inline-block text-base font-large bg-clip-text bg-gradient-to-l from-blue-500 to-violet-500 text-transparent">
                You can find me here 
              </p>
              {/* Buttons */}
              <div className="mt-2 grid gap-3 w-full sm:inline-flex sm:justify-center">
              
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-500 hover:bg-blue-800 
                  border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2
                   focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="https://www.linkedin.com/in/juliashchrbk/"
                >
                  <BsLinkedin size="2rem" />
                </a>
                <a
                  
                   className="inline-flex justify-center items-center gap-x-3 text-center bg-fuchsia-500 hover:bg-fuchsia-700  
                  border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2
                   focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="https://www.instagram.com/julia_shchrbk_art"
                >
                  <BsInstagram size="2rem" />
                </a>
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-sky-500 hover:bg-blue-800 
                  border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2
                   focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="https://sketchfab.com/juliashchrbk"
                >
                  <SiSketchfab size="2rem" />
                </a>
              </div>
              {/* End Buttons */}
              
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>



  )
}
