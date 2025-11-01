import React from "react";
import HeadPhones from "../assets/hero-headphones.svg";
import Button from "./Button"; // Import our reusable button

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left py-24 md:py-36">
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

        <div className="md:w-1/2">
          <img
            src={HeadPhones}
            alt="XX99 Mark II Headphones"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
