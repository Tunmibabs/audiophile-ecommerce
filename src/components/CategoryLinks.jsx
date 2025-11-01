import React from "react";
import Button from "./Button";
import Speakers from "../assets/speakers.svg";
import Earphones from "../assets/earphones.svg";
import Headphones from "../assets/headphones.svg";

function ArrowIcon() {
  return (
    <svg
      width="8"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-3"
    >
      <path
        d="M1.322 1l5 5-5 5"
        stroke="#D87D4A"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

const categories = [
  {
    name: "Headphones",
    href: "/headphones",
    imgSrc: Headphones,
  },
  {
    name: "Speakers",
    href: "/speakers",
    imgSrc: Speakers,
  },
  {
    name: "Earphones",
    href: "/earphones",
    imgSrc: Earphones,
  },
];

export default function CategoryLinks() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row gap-16 sm:gap-4 lg:gap-8 mt-16 sm:mt-0">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex-1 relative bg-gray rounded-lg text-center pt-20 pb-5"
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                           h-32 w-auto sm:h-40"
              />

              <h6 className="text-h6 font-bold uppercase tracking-h6 mb-4">
                {category.name}
              </h6>

              <Button variant="link">
                Shop <ArrowIcon />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
