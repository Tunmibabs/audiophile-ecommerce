import React from "react";
import Button from "./Button";
import PatternCircles from "../assets/pattern-circles.svg";
import Speakers from "../assets/zx9-speaker.svg";
import ZX7 from "../assets/zx7.png";
import YX1 from "../assets/YX1.svg";

export default function FeaturedProducts(): React.ReactElement {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col gap-8">
        {/* --- 1. ZX9 Speaker --- */}
        <div
          className="bg-primary rounded-lg p-12 pt-16 md:px-24 md:pt-24 md:pb-0 relative 
             flex flex-col md:flex-row items-center text-center md:text-left 
             overflow-hidden pb-24"
        >
          <img
            src={PatternCircles}
            alt=""
            className="absolute z-0 
               top-[-120px] left-1/2 -translate-x-1/2 
               w-[550px] sm:w-[600px] md:w-[944px] 
               md:top-[-50px] md:left-[-15%] md:-translate-x-0 
               max-w-none"
          />
          <div className="flex-1 relative z-10 w-full flex justify-center md:block">
            <img
              src={Speakers}
              alt="ZX9 Speaker"
              className="w-40 sm:w-48 md:w-[410px]
                 mb-8 md:mb-0 md:absolute md:bottom-0 md:transform md:translate-y-[55%] lg:translate-y-[55%]"
            />
          </div>

          <div className="flex-1 relative z-10 md:pl-24">
            <h2
              className="text-h2 md:text-h1 font-bold text-white uppercase 
                   leading-h2 md:leading-h1 tracking-h2 md:tracking-h1 mb-6"
            >
              ZX9
              <br />
              Speaker
            </h2>
            <p className="text-body text-white opacity-75 mb-10 max-w-sm mx-auto md:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            {/* Updated to be a link */}
            <Button as="link" to="/product/zx9-speaker" variant="tertiary">
              See Product
            </Button>
          </div>
        </div>

        {/* --- 2. ZX7 Speaker --- */}
        <div className="relative rounded-lg overflow-hidden h-[320px] md:h-[400px]">
          {/* Background Image */}
          <img
            src={ZX7}
            alt="ZX7 Speaker"
            className="w-full h-full object-cover object-bottom-left md:object-center lg:object-right"
          />
          {/* Text Content */}
          <div
            className="absolute inset-0 flex flex-col justify-center
                  p-6 sm:p-12 md:p-24
                  items-start"
          >
            <h3 className="text-h4 font-bold uppercase tracking-h4 mb-8">
              ZX7 Speaker
            </h3>
            {/* Updated to be a link */}
            <Button as="link" to="/product/zx7-speaker" variant="secondary">
              See Product
            </Button>
          </div>
        </div>

        {/* --- 3. YX1 Earphones --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image Column */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={YX1}
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Card Column */}
          <div className="bg-gray rounded-lg flex flex-col justify-center p-12 md:p-24 items-start">
            <h3 className=" font-bold uppercase tracking-h4 mb-8 text-h4">
              YX1 Earphones
            </h3>
            {/* Updated to be a link */}
            <Button
              as="link"
              to="/product/yx1-wireless-earphones"
              variant="secondary"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}