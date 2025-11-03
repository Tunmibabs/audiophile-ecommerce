import React from 'react';

export default function ProductGallery({ product }) {
  const { gallery } = product;

  return (
    <section className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {/* First image */}
        <div className="row-span-1 md:col-span-1">
          <picture>
            <source media="(min-width: 769px)" srcSet={gallery.first.desktop} />
            <source media="(min-width: 376px)" srcSet={gallery.first.tablet} />
            <img src={gallery.first.mobile} alt={`${product.name} gallery image 1`} className="w-full rounded-lg" />
          </picture>
        </div>
        
        {/* Second image */}
        <div className="row-span-1 md:col-span-1">
          <picture>
            <source media="(min-width: 769px)" srcSet={gallery.second.desktop} />
            <source media="(min-width: 376px)" srcSet={gallery.second.tablet} />
            <img src={gallery.second.mobile} alt={`${product.name} gallery image 2`} className="w-full rounded-lg" />
          </picture>
        </div>

        {/* Third image */}
        <div className="md:col-span-1 md:row-span-2">
          <picture>
            <source media="(min-width: 769px)" srcSet={gallery.third.desktop} />
            <source media="(min-width: 376px)" srcSet={gallery.third.tablet} />
            <img src={gallery.third.mobile} alt={`${product.name} gallery image 3`} className="w-full rounded-lg" />
          </picture>
        </div>
      </div>
    </section>
  );
}