import { Link } from "react-scroll";
import logo from "./../../assets/images/images/logo.png";
import navLinksdata from "./../../constant/index";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-bodyColor py-3 font-titleFont h-auto mx-auto flex  justify-between items-center border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className=" items-center gap-10 hidden md:flex">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className="cursor-pointer block md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiMenu size={24}></FiMenu>
        </span>

        {showMenu && (
          <div
            className={`w-[80%] h-screen overflow-scroll fixed top-0 md:hidden left-0 bg-gray-900 p-4 scrollbar-hide`}
          >
            <div className="flex justify-end">
              <span
                onClick={() => setShowMenu(false)}
                className="p-4 cursor-pointer"
              >
                <CgClose size={28}></CgClose>
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
