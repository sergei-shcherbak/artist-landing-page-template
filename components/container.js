import Author from "./author";

import ContainerGallery from "./container-gallery";
import ContainerFirstRaw from "./container-first-row";
import ContainerSecondRaw from "./container-second-row";
import ContainerThirdRaw from "./container-third-row";

export default function Container() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-0">
      <div className="mx-0 sm:mx-6">
        <div className="w-full rounded-t bg-gray-200 text-xl leading-normal text-gray-800 md:text-2xl">
          <div className="-mx-6 flex flex-wrap justify-between">
            <ContainerFirstRaw />
            <ContainerSecondRaw />
            <ContainerThirdRaw />
          </div>

          <ContainerGallery />
        </div>
        <Author />
      </div>
    </div>
  );
}
