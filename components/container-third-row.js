import * as Constants from "../constants/images";

export default function ContainerThirdRow() {
  const BIG_IMAGE = Constants.IMAGES_THIRD_ROW[0]
  const SMALL_COLUMN_IMAGES = [Constants.IMAGES_THIRD_ROW[1], Constants.IMAGES_THIRD_ROW[2]]
  return (
    <>
      {/*2/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-2/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src={BIG_IMAGE.src}
              alt={BIG_IMAGE.name}
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
              {BIG_IMAGE.comment}
            </p>
          </div>
        </div>
      </div>
      {/*1/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
        <div className="mb-4">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src={SMALL_COLUMN_IMAGES[0].src}
                alt={SMALL_COLUMN_IMAGES[0].name}
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
                {SMALL_COLUMN_IMAGES[0].comment}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src={SMALL_COLUMN_IMAGES[1].src}
                alt={SMALL_COLUMN_IMAGES[1].name}
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
                {SMALL_COLUMN_IMAGES[1].comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
