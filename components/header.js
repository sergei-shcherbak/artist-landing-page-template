import Link from 'next/link'

export default function Header() {

    return (
        <div
        className="w-full m-0 p-0 bg-cover bg-bottom"
        style={{
          backgroundImage: 'url("cover.jpg")',
          height: "60vh",
          maxHeight: 460
        }}
      >
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          {/*Title*/}
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            ✏️ Julia Shcherbak 2D/3D Artist
          </p>
          <p className="text-xl md:text-2xl text-gray-500">Welcome to my portfolio</p>
        </div>
      </div>

    )
}
