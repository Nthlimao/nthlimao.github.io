import HeroBannerStyles, {
  HeroBannerTitle,
  HeroBannerTitleRow,
  SparklesIcon,
  TitleMarked,
  UnicornIcon,
} from "./HeroBanner.styles";

const HeroBanner = () => {
  return (
    <HeroBannerStyles className="container container-lg">
      <HeroBannerTitle>
        <HeroBannerTitleRow>software engineer,</HeroBannerTitleRow>
        <HeroBannerTitleRow>
          <UnicornIcon />
          <TitleMarked>front-end</TitleMarked> developer,
        </HeroBannerTitleRow>
        <HeroBannerTitleRow>
          design enthusiast
          <SparklesIcon />
        </HeroBannerTitleRow>
      </HeroBannerTitle>
    </HeroBannerStyles>
  );
};

export default HeroBanner;
