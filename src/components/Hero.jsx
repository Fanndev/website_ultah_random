"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VscDebugStart } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const loadingRef = useRef(null);
  const heroRef = useRef(null);
  const leftImagesRef = useRef(null);
  const rightImagesRef = useRef(null);
  const centerTextRef = useRef(null);

  const totalImages = 4;

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === totalImages) {
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setLoading(false),
      });
    }
  }, [loadedImages]);

  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 3000); // Set a maximum waiting time for loading

    return () => clearTimeout(minLoadingTime);
  }, [loading]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(leftImagesRef.current, { x: "-20%", ease: "none" }, 0)
      .to(rightImagesRef.current, { x: "20%", ease: "none" }, 0)
      .from(
        centerTextRef.current,
        { opacity: 0, y: 50, ease: "power2.out" },
        0.3
      );
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-screen overflow-hidden">
      {loading && (
        <div
          ref={loadingRef}
          className="absolute inset-0 z-50 flex items-center justify-center bg-violet-50"
        >
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 flex">
        <div ref={leftImagesRef} className="flex-1">
          <img
            src="/assets/ryan.jpeg"
            alt="Left image 1"
            width={400}
            height={600}
            className="h-1/2 w-full object-cover"
            onLoad={handleImageLoad}
          />
          <img
            src="/src/assets/alfian.jpeg"
            alt="Left image 2"
            width={400}
            height={600}
            className="h-1/2 w-full object-fit"
            onLoad={handleImageLoad}
          />
        </div>
        <div
          ref={centerTextRef}
          className="flex-1 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="special-font hero-heading text-4xl font-bold mb-4">
              Selamat <br /> Ulang Tahun!
            </h1>
            <p className="text-lg">
              Merayakan hari spesial dengan semua teman dekatmu di sini!
            </p>
          </div>
        </div>
        <div ref={rightImagesRef} className="flex-1">
          <img
            src="/assets/haryo.jpeg"
            alt="Right image 1"
            width={400}
            height={600}
            className="h-1/2 w-full object-cover"
            onLoad={handleImageLoad}
          />
          <img
            src="/assets/ane.jpeg"
            alt="Right image 2"
            width={400}
            height={600}
            className="h-1/2 w-full object-cover"
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-white z-10">
        <b className="flex">
          Hello World!
          <VscDebugStart />
        </b>
      </h1>
    </div>
  );
};

export default Hero;
