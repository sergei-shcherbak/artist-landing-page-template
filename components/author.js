import * as Constants from '../constants/images'

export default function Author() {
  return (
    <div className="flex w-full items-center font-sans p-8 md:p-24">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={Constants.AVATAR.src} alt={Constants.AVATAR.name}
      />
      <div className="flex-1">
        <p className="text-base font-bold text-base md:text-xl leading-none">
          Julia Shcherbak
        </p>
        <p className="text-gray-600 text-xs md:text-base">
          Digital Artist 2D/3D
        </p>
      </div>
      <div className="justify-end">
        <a
          href="#"
          className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}
