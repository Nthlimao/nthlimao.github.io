import Typewriter, {
  TypewriterClass,
  Options as TypewriterOptions,
} from "typewriter-effect";

const HeroBanner = () => {
  const initTypewriter = (typewriter: TypewriterClass) => {
    typewriter
      .pauseFor(1000)
      .typeString("software engineer,")
      .pauseFor(800)
      .typeString("<br>front-end")
      .pauseFor(400)
      .deleteChars(9)
      .typeString(
        `<b class="font-normal text-[#78FCDE]">fullstack</b> developer,`
      )
      .pauseFor(800)
      .typeString("<br>design enthusiast.")
      .start();
  };

  const optionsTypewriter: TypewriterOptions = {
    loop: false,
  };

  return (
    <div className="relative flex items-end p-0 w-full h-screen bg-[url('/assets/images/desktop.jpg')] bg-cover bg-left">
      <div className="absolute inset-0 bg-[rgba(6,6,10,0.85)] z-0"></div>
      <div className="pt-5 pb-5 w-full flex justify-center z-10 pb-20">
        <h1 className="container inline-block font-[Henrietta] text-[42px] leading-[38px] font-normal pb-20 z-[1] text-neutral-100 sm:text-[64px] sm:leading-[56px] md:text-[68px] md:leading-[60px] lg:text-[84px] lg:leading-[69px]">
          <Typewriter onInit={initTypewriter} options={optionsTypewriter} />
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
