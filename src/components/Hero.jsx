import React from "react";
import HeadPhones from "../assets/hero-headphones.png";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="bg-black text-white relative overflow-hidden
                 min-h-[90px] md:min-h-[729px]" 
    >
      <div
        className="absolute inset-0 bg-no-repeat 
                   bg-[length:600px_auto] 
                   bg-center

                   {/* Desktop size (md: 769px+)*/}
                   md:bg-[length:auto_729px] 

                   {/* Desktop position (md: 769px+) */}
                   md:bg-[position:calc(50%_+_220px)_center]

                   {/* Gradient */}
                   after:content-[''] after:absolute after:inset-0 after:bg-gradient-radial 
                   after:from-black/0 after:to-black/80 after:via-black/10"
        
        style={{
          backgroundImage: `url(${HeadPhones})`,
        }}
      ></div>

      <div
        className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10
                   flex flex-col md:flex-row items-center justify-center 
                   min-h-[600px] md:min-h-[729px]"
      >
        {/* Text Column */}
        <div className="md:w-1/2 text-center md:text-left py-2 md:py-10"> 
          <span className="text-overline tracking-overline text-white opacity-50 block mb-6">
            NEW PRODUCT
          </span>
          <h1 className="text-h1 font-bold uppercase text-white leading-h1 tracking-h1">
            XX99 Mark II
            <br />
            Headphones
          </h1>
          <p className="text-body leading-body text-white opacity-75 my-6 max-w-sm mx-auto md:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music lover.
          </p>
          <Button variant="primary">See Product</Button>
        </div>

        {/* This empty div just ensures the flex layout works on desktop */}
        <div className="md:w-1/2"></div>
      </div>
    </section>
  );
}