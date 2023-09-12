import { BsInstagram, BsLinkedin, BsFiletypePdf } from "react-icons/bs";
import { SiSketchfab } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

export default function Header() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="absolute -top-96 left-1/2 flex -translate-x-1/2 transform"
        >
          <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl" />
          <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
                Gaming Enthusiast & Concept Artist
              </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block text-4xl font-semibold text-gray-800 md:text-5xl lg:text-6xl">
                  Julia Shcherbak Page
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600">
                  Creative digital artist with 2+ years of experience
                  specializing in making concepts, modeling, and texturing for
                  Game industry. I have specialized on optimization models and
                  textures to run them as smoothe as posible and to take an
                  advantage of it during concept stage.
                </p>
              </div>
              <p className="font-large mt-2 inline-block bg-gradient-to-l from-blue-500 to-violet-500 bg-clip-text text-base text-transparent">
                You can find me here
              </p>
              {/* Buttons */}
              <div className="mt-2 grid w-full gap-3 sm:inline-flex sm:justify-center">
                <a
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-blue-500 px-4 py-3 text-center text-sm font-medium text-white transition
                   hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                  href="https://www.linkedin.com/in/juliashchrbk/"
                >
                  <BsLinkedin size="2rem" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent  
                  bg-fuchsia-500 px-4 py-3 text-center text-sm font-medium text-white transition
                   hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-white"
                  href="https://www.instagram.com/julia_shchrbk_art"
                >
                  <BsInstagram size="2rem" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-sky-500 px-4 py-3 text-center text-sm font-medium text-white transition
                   hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"
                  href="https://sketchfab.com/juliashchrbk"
                >
                  <SiSketchfab size="2rem" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-red-500 px-4 py-3 text-center text-sm font-medium text-white transition
                   hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
                  href="https://sketchfab.com/juliashchrbk"
                >
                  <BsFiletypePdf size="2rem" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-gray-50 px-4 py-3 text-center text-sm font-medium text-red-500 transition
                   hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
                  href="mailto:juliashchrbk@gmail.com"
                >
                  <BiLogoGmail size="2rem" />
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
