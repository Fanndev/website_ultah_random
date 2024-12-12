"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Selamat Datang di Situs Kami
        </p>

        <AnimatedTitle
          title="Mari <b>rayakan</b> bersama teman-teman dalam sebuah <br /> petualangan ulang tahun yang luar biasa"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="pt-10 leading-5 pb-3">
            Selamat datang di perjalanan spesial ini — kami sedang merayakan
            ulang tahun dengan semangat dan kebersamaan!
          </p>
          <p className="text-gray-500 leading-5">
            "Rayakan momen indah ini bersama teman dan keluarga dalam pesta yang
            tak terlupakan!"
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/src/assets/alfian.jpeg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
