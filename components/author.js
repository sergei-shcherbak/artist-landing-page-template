import { BiLogoGmail } from "react-icons/bi";
import * as Constants from "../constants/images";
import { TEXT, LINKS } from "../constants/comments";

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
          {TEXT.FULL_NAME}
        </p>
        <p className="text-xs text-gray-600 md:text-base">
          {TEXT.POSITION}
        </p>
      </div>
      <div className="justify-end">
        <a
          className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent 
                  bg-gray-50 px-4 py-3 text-center text-sm font-medium text-red-500 transition
                   hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
          href={LINKS.EMAIL}
        >
          <p className="text-xs text-gray-600 md:text-base">Contanct me </p>
          <BiLogoGmail size="1rem" />
        </a>
      </div>
    </div>
  );
}
