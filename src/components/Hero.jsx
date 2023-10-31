import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ic_tiktok, ic_tiktokwhite } from "../assets";
const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto bg-black" id="hi">
      <div className="bg-animation-cursor z-0">
        {Array.from({ length: 500 }).map((_, index) => {
          return <span key={index}></span>;
        })}
        <div
          className=" absolute inset-0 z-10"
          style={{ pointerEvents: "none" }}
        >
          <div style={{ position: "relative" }}>
            <div
              className={`${styles.paddingX}absolute inset-0 top-[10px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
              <div className="flex flex-col justify-center items-center mt-[10%]">
                <div className="w-5 h-5 rounded-full bg-white" />
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
              </div>
              <div className="mt-[5%]">
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hai, Saya Azmi Kurniawan, S.Kom
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  Saya Lahir di Pasaman, 29 July 1997, Lulusan S1 Ilmu Komputer
                  di Universitas Putra Indonesia YPTK Padang pada 24 Mei 2023
                  Jurusan Sistem Informasi. Saya Menyukai Pekerjaan Di Bidang
                  Ilmu Komputer. Saya mampu bekerja secara Tim maupun Individu.
                  Saya siap membawa Ilmu yang saya peroleh untuk perusahaan.
                </p>
                <div className="flex justify-start">
                  <div 
                  style={{ pointerEvents: "auto" }}
                    id="tiktokcontainer"
                    className="flex justify-center items-center">
                  <a
                    href="https://www.tiktok.com/@bg_mi07?_t=8gw1XRtgV0B&_r=1"
                    target="_blank"
                    
                  >
                    <img
                      src={ic_tiktokwhite}
                      className="w-[45px] h-[39px] show"
                      alt=""
                    />
                    <img
                      src={ic_tiktok}
                      className="w-[45px] h-[39px] hidden"
                      alt=""
                    />
                  </a>
                  </div>
                  <a
                    href="https://instagram.com/_manungkuik?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                    style={{ pointerEvents: "auto" }}
                  >
                    <i className="fa fa-instagram" id="instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/azmi-kurniawan-568134288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    style={{ pointerEvents: "auto" }}
                  >
                    <i className="fa fa-linkedin" id="twitter"></i>
                  </a>
                  <a
                    href="https://x.com/azmikurniawan29?t=rSP-qYucQp91UMmTMozdpw&s=09"
                    target="_blank"
                    style={{ pointerEvents: "auto" }}
                  >
                    <i className="fa fa-twitter" id="twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/azmi.gonzalo?mibextid=ZbWKwL"
                    target="_blank"
                    style={{ pointerEvents: "auto" }}
                  >
                    <i className="fa fa-facebook-square" id="facebook"></i>
                  </a>
                  <a
                    href="https://github.com/azmikurniawan07"
                    target="_blank"
                    style={{ pointerEvents: "auto" }}
                  >
                    <i className="fa fa-github-square github" id="github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="relative w-full h-screen mx-auto bg-black">
    //   <div className="bg-animation-cursor z-0">
    //     {Array.from({ length: 500 }).map((_, index) => {
    //       return <span key={index}></span>;
    //     })}
    //     <div className="bg-white absoulute inset-0 z-10">Hellow World</div>
    //   </div>
    // </div>
  );
};

export default Hero;
