import bannerImg from "./../../assets/images/images/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center relative">
      <img
        className="lg:w-[500px] w-[300px]  z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-full lg:h-[500px] h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
