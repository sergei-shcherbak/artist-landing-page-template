"use client";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from "./NextJsImage";

import * as Constants from "../constants/images.js";

export default function YetLightbox() {
  return (
    <>
      <div style={{ width: "100%", maxWidth: "1280px", aspectRatio: "16 / 9" }}>
        <Lightbox
          render={{ slide: NextJsImage, thumbnails: NextJsImage }}
          plugins={[Inline, Thumbnails]}
          slides={Constants.SLIDES}
          carousel={{
            spacing: 0,
            padding: 0,
            imageFit: "cover"
          }}
        />
      </div>
    </>
  );
}
