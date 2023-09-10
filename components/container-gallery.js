"use client";
import YetLightbox from "./YetLightbox";

export default function ContainerGallery() {
  return (
    <>
      <div className="flex h-full w-full justify-center overflow-hidden rounded shadow-lg">
        <p className="font-large mb-5 inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text font-mono text-4xl text-transparent">
          MORE IMAGES
        </p>
      </div>
      {/*Lead Card*/}
      <div className="flex h-full w-full overflow-hidden rounded bg-white shadow-lg">
        <YetLightbox />
      </div>
      {/*/Lead Card*/}
    </>
  );
}
