import Image from "next/image";
import * as Constants from "../constants/images";

export default function ContainerFirstRow() {
  return (
    <>
      {/*1/2 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col px-6 pb-6 md:w-1/2">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src={Constants.images_first_row[0].src}
              alt={Constants.images_first_row[0].name}
              className="h-full w-full rounded-t"
            />
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src={Constants.AVATAR.src}
              alt={Constants.AVATAR.name}
            />
            <p className="text-xs text-gray-600 md:text-sm">
              {Constants.images_first_row[0].comment}
            </p>
          </div>
        </div>
      </div>
      {/*1/2 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col px-6 pb-6 md:w-1/2">
        <div className="flex-1 flex-row overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src={Constants.images_first_row[1].src}
              alt={Constants.images_first_row[1].name}
              className="h-full w-full rounded-t"
            />
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src={Constants.AVATAR.src}
              alt={Constants.AVATAR.name}
            />
            <p className="text-xs text-gray-600 md:text-sm">
              {Constants.images_first_row[1].comment}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
