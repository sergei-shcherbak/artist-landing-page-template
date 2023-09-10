import * as Constants from "../constants/images";

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
          href="#"
          className="rounded-full border border-gray-500 bg-transparent px-4 py-2 text-xs font-bold text-gray-500 hover:border-green-500 hover:text-green-500"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
