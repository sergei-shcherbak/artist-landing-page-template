import Author from "./author";

import ContainerGallery from "./container-gallery";
import ContainerFirstRaw from "./container-first-row";
import ContainerSecondRaw from "./container-second-row";
import ContainerThirdRaw from "./container-third-row";

export default function Container() {
  return (
    <div className="container px-4 md:px-0 max-w-6xl mx-auto">
      <div className="mx-0 sm:mx-6">
        <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
          <div className="flex flex-wrap justify-between -mx-6">
            <ContainerFirstRaw />
            <ContainerSecondRaw />
            <ContainerThirdRaw />
          </div>
          <div className="justify-center flex w-full h-full rounded overflow-hidden shadow-lg">
          <p className="mb-5 font-mono inline-block text-4xl font-large bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                MORE IMAGES
              </p>
          </div>
          <ContainerGallery />
        </div>
        <Author />
      </div>
    </div>
  )
}
