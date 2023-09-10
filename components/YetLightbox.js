import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

import * as Constants from "../constants/images";

export default function YetLightbox() {
  return (
    <div style={{ width: "100%", maxWidth: "1280px", aspectRatio: "16 / 9" }}>
      <Lightbox
        plugins={[Inline]}
        slides={Constants.SLIDES}
        carousel={{
          spacing: 0,
          padding: 0,
          imageFit: "cover",
        }}
      />
    </div>
  );
}
