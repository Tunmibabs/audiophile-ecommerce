import React from "react";
import Man from "../assets/man.png";

export default function BestGear() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div
        className="max-w-[1440px] mx-auto px-6 sm:px-10
                      flex flex-col md:flex-row-reverse items-center 
                      gap-12 md:gap-16 lg:gap-32"
      >
        <div className="flex-1 rounded-lg overflow-hidden">
          <picture>
            {/* Desktop Image (769px and up) */}
            <source media="(min-width: 769px)" srcSet={Man} />
            {/* Tablet Image (376px to 768px) */}
            <source media="(min-width: 376px)" srcSet={Man} />
            {/* Mobile Image (default, < 376px) */}
            <img
              src={Man}
              alt="Man wearing audiophile headphones"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2
            className="text-h4 md:text-h2 font-bold uppercase 
                         tracking-h4 md:tracking-h2 
                         leading-h4 md:leading-h2 mb-8"
          >
            Bringing you the
            <br />
            <span className="text-primary">best</span> audio gear
          </h2>
          <p className="text-body leading-body text-black text-opacity-75 max-w-md mx-auto md:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
