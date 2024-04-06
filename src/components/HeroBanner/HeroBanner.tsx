import Typewriter, {
  TypewriterClass,
  Options as TypewriterOptions,
} from "typewriter-effect";

import HeroBannerStyles, { HeroBannerTitle } from "./HeroBanner.styles";

const HeroBanner = () => {
  const initTypewriter = (typewriter: TypewriterClass) => {
    typewriter
      .pauseFor(1000)
      .typeString("software engineer,")
      .pauseFor(800)
      .typeString("<br>fullstack")
      .pauseFor(400)
      .deleteChars(9)
      .typeString("<b>front-end</b> developer,")
      .pauseFor(800)
      .typeString("<br>design enthusiast.")
      .start();
  };

  const optionsTypewriter: TypewriterOptions = {
    loop: false,
  };

  return (
    <HeroBannerStyles>
      <HeroBannerTitle className="container">
        <Typewriter onInit={initTypewriter} options={optionsTypewriter} />
      </HeroBannerTitle>
    </HeroBannerStyles>
  );
};

export default HeroBanner;
