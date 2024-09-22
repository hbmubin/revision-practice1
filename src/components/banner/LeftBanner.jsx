import { FaFacebookF, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "MERN STACK Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 ">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">HB Mubin</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorColor="red"
            cursorStyle="|"
            cursorBlinking="false"
          ></Cursor>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex md:flex-row md:gap-0 gap-6 flex-col justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF></FaFacebookF>
            </span>
            <span className="bannerIcon">
              <FaTwitter></FaTwitter>
            </span>
            <span className="bannerIcon">
              <FaLinkedin></FaLinkedin>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact></FaReact>
            </span>
            <span className="bannerIcon">
              <SiNextdotjs></SiNextdotjs>
            </span>
            <span className="bannerIcon">
              <SiTailwindcss></SiTailwindcss>
            </span>
            <span className="bannerIcon">
              <SiFigma></SiFigma>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
