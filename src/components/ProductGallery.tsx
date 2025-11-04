import React from 'react';

interface GalleryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  name: string;
  gallery: {
    first: GalleryImage;
    second: GalleryImage;
    third: GalleryImage;
  };
}

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const { gallery } = product;

  return (
    <section className="py-24 md:py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
        {/* Col 1: Two stacked images */}
        <div className="flex flex-col gap-5 md:gap-8">
          {/* First image */}
          <div className="rounded-lg overflow-hidden">
            <picture>
              <source media="(min-width: 769px)" srcSet={gallery.first.desktop} />
              <source media="(min-width: 376px)" srcSet={gallery.first.tablet} />
              <img src={gallery.first.mobile} alt={`${product.name} gallery image 1`} className="w-full h-full object-cover" />
            </picture>
          </div>
          {/* Second image */}
          <div className="rounded-lg overflow-hidden">
            <picture>
              <source media="(min-width: 769px)" srcSet={gallery.second.desktop} />
              <source media="(min-width: 376px)" srcSet={gallery.second.tablet} />
              <img src={gallery.second.mobile} alt={`${product.name} gallery image 2`} className="w-full h-full object-cover" />
            </picture>
          </div>
        </div>

        {/* Col 2: One tall image */}
        <div className="rounded-lg overflow-hidden">
          <picture>
            <source media="(min-width: 769px)" srcSet={gallery.third.desktop} />
            <source media="(min-width: 376px)" srcSet={gallery.third.tablet} />
            <img src={gallery.third.mobile} alt={`${product.name} gallery image 3`} className="w-full h-full object-cover" />
          </picture>
        </div>
      </div>
    </section>
  );
}