import * as Constants from '../constants/images'

export default function ContainerSecondRow() {
    return (
        <>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-none bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                        href="#"
                        className="flex flex-wrap no-underline hover:no-underline"
                    >
                        <img
                            src={Constants.images_second_row[0].src} alt={Constants.images_second_row[0].name}
                            className="h-64 w-full rounded-t"
                        />
                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full mr-4 avatar"
                            data-tippy-content="Author Name"
                            src={Constants.AVATAR.src} alt={Constants.AVATAR.name}
                        />
                        <p className="text-gray-600 text-xs md:text-sm">{Constants.images_second_row[0].comment}</p>
                    </div>
                </div>
            </div>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-none bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                        href="#"
                        className="flex flex-wrap no-underline hover:no-underline"
                    >
                        <img
                            src={Constants.images_second_row[1].src} alt={Constants.images_second_row[1].name}
                            className="h-64 w-full rounded-t"
                        />

                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full mr-4 avatar"
                            data-tippy-content="Author Name"
                            src={Constants.AVATAR.src} alt={Constants.AVATAR.name}
                        />
                        <p className="text-gray-600 text-xs md:text-sm">{Constants.images_second_row[1].comment}</p>
                    </div>
                </div>
            </div>
            {/*1/3 col */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-none bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                        href="#"
                        className="flex flex-wrap no-underline hover:no-underline"
                    >
                        <img
                            src={Constants.images_second_row[2].src} alt={Constants.images_second_row[2].name}
                            className="h-64 w-full rounded-t"
                        />

                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full mr-4 avatar"
                            data-tippy-content="Author Name"
                            src={Constants.AVATAR.src} alt={Constants.AVATAR.name}
                        />
                        <p className="text-gray-600 text-xs md:text-sm">{Constants.images_second_row[2].comment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}