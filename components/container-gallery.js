import { TEXT } from "../constants/comments";
import YetLightbox from "./YetLightbox";

export default function ContainerGallery() {
  return (
    <>
      <div className="flex h-full w-full justify-center overflow-hidden rounded shadow-lg">
        <p className="font-large mb-5 inline-block bg-gradient-to-l font-mono text-4xl font-bold text-sky-500/60">
          {TEXT.GALLERY_PHRASE}
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
