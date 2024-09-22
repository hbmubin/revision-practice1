import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 lg:gap-0 gap-6 flex lg:flex-row flex-col items-center border-b-[1px] border-b-black"
    >
      <LeftBanner></LeftBanner>
      <RightBanner></RightBanner>
    </section>
  );
};

export default Banner;
