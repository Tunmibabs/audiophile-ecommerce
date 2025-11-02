import React from "react";
import Button from "./Button";

export default function ProductCard({ product, reverse = false }) {
  const { name, description, isNew, slug, images } = product;

  const nameArray = name.split(" ");
  const lastWord = nameArray.pop();
  const restOfName = nameArray.join(" ");

  return (
    <article
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-32 
                  ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="flex-1 rounded-lg overflow-hidden bg-gray py-16">
        <picture>
          <source media="(min-width: 769px)" srcSet={images.desktop} />
          <source media="(min-width: 376px)" srcSet={images.tablet} />
          <img src={images.mobile} alt={name} className="w-1/2 sm:w-2/3 md:w-3/5 object-contain mx-auto" />
        </picture>
      </div>

      {/* Text Column */}
      <div className="flex-1 text-center md:text-left">
        {isNew && (
          <span className="text-overline text-primary tracking-overline block mb-4">
            NEW PRODUCT
          </span>
        )}

        <h2 className="text-h2 font-bold uppercase tracking-h2 mb-8 leading-h2">
          {restOfName}
          <br />
          {lastWord}
        </h2>

        <p className="text-body leading-body text-black text-opacity-75 mb-10">
          {description}
        </p>

        <Button as="link" to={`/product/${slug}`} variant="primary">
          See Product
        </Button>
      </div>
    </article>
  );
}
