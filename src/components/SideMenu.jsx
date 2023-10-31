import React from "react";
import { react, ic_hi, ic_about, ic_resume} from "../assets";
import { sidemenu } from "../constans";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="fixed inset-0" style={{ pointerEvents: "none" }}>
      <div className="flex justify-right items-center">
        <div
          className="container-allside-menu bg-black bg-opacity-50 p-5 absolute inset-y-0 right-0 top-[30%] h-[30%] w-[80px] rounded-[10px] mr-[-10px] z-5"
          style={{ pointerEvents: "auto" }}
        >
          <div className="bg-black bg-opacity-50 flex p-2 mt-2 container-side-menu rounded-[10px]">
            <a href={"#hi"} className="flex items-center">
              <img src={ic_hi} alt="hi" className="w-10" />
              <span className="ml-2">Hi</span>
            </a>
          </div>
          <div className="bg-black bg-opacity-50 flex p-2 mt-2 container-side-menu rounded-[10px]">
            <a href={"#about"} className="flex items-center">
              <img src={ic_about} alt="About" className="w-10" />
              <span className="ml-2">About</span>
            </a>
          </div>
          <div className="bg-black bg-opacity-50 flex p-2 mt-2 container-side-menu rounded-[10px]">
            <Link className="flex items-center" to="/resume" target="_blank" rel="noopener noreferrer">
              <img src={ic_resume} alt="About" className="w-10" />
              <span className="ml-2">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
