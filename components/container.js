
import Author from "./author";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Container() {
    return (
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          {/*Nav*/}
          <nav className="mt-0 w-full">
            <div className="container mx-auto flex items-center">
              
              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="inline-block text-fuchsia-700 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  data-tippy-content="@twitter_handle"
                  href="https://www.instagram.com/julia_shchrbk_art"
                >
                  <BsInstagram size="2rem" />
                </a>
                <a
                  className="inline-block text-fuchsia-700 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  data-tippy-content="#facebook_id"
                  href="https://www.linkedin.com/in/juliashchrbk/"
                >
                  <BsLinkedin size="2rem" />
                </a>
              </div>
            </div>
          </nav>
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            {/*Lead Card*/}
            <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
              <a
                href="post.html"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full md:w-2/3 rounded-t">
                  <img
                    src="https://source.unsplash.com/collection/494263/800x600"
                    className="h-full w-full shadow"
                  />
                </div>
                <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      👋 Welcome fellow Tailwind CSS and Ghost fan
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      This starter template is an attempt to replicate the default
                      Ghost theme "Casper" using Tailwind CSS and vanilla
                      Javascript.
                    </p>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/*/Lead Card*/}
            {/*Posts Container*/}
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {/*1/3 col */}
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/225/800x600"
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*1/3 col */}
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/3106804/800x600"
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                      dolor sit amet, consectetur adipiscing elit. Aliquam at ip
                      Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*1/3 col */}
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/539527/800x600"
                      className="h-64 w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full  font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*1/2 col */}
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/3657445/800x600"
                      className="h-full w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*1/2 col */}
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/764827/800x600"
                      className="h-full w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*2/3 col */}
              <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/325867/800x600"
                      className="h-full w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
              {/*1/3 col */}
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <a
                    href="#"
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    <img
                      src="https://source.unsplash.com/collection/1118905/800x600"
                      className="h-full w-full rounded-t pb-6"
                    />
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      GETTING STARTED
                    </p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Post Content*/}
          </div>
          {/*Subscribe*/}
          <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
              Subscribe to Ghostwind CSS
            </h2>
            <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
              Get the latest posts delivered right to your inbox
            </h3>
            <div className="w-full text-center pt-4">
              <form action="#">
                <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /Subscribe*/}
          <Author />
        </div>
      </div>
    )
  }
  