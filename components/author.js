import * as Constants from "../constants/images";
import { BiLogoGmail } from "react-icons/bi";

export default function Author() {
  return (
    <div className="flex w-full items-center p-8 font-sans md:p-24">
      <img
        className="mr-4 h-10 w-10 rounded-full"
        src={Constants.AVATAR.src}
        alt={Constants.AVATAR.name}
      />
      <div className="flex-1">
        <p className="text-base text-base font-bold leading-none md:text-xl">
          Julia Shcherbak
        </p>
        <p className="text-xs text-gray-600 md:text-base">
          Digital Artist 2D/3D
        </p>
      </div>
      <div className="justify-end">
        <a
          className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-gray-50 px-4 py-3 text-center text-sm font-medium text-red-500 transition
                   hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
          href="mailto:juliashchrbk@gmail.com"
        >
          <p className="text-xs text-gray-600 md:text-base">Send email </p>
          <BiLogoGmail size="1rem" />
        </a>
      </div>
    </div>
  );
}
