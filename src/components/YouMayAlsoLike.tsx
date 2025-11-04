import React from 'react';
import Button from './Button';

interface ProductImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface OtherProduct {
  slug: string;
  name: string;
  images: ProductImages;
}

interface Product {
  others: OtherProduct[];
}

interface YouMayAlsoLikeProps {
  product: Product;
}

export default function YouMayAlsoLike({ product }: YouMayAlsoLikeProps) {
  const { others } = product; 

  return (
    <section className="py-24 md:py-32 text-center">
      <h3 className="text-h3 font-bold uppercase tracking-h3 mb-10 md:mb-16">
        You May Also Like
      </h3>
      <div className="flex flex-col sm:flex-row gap-14 sm:gap-4 lg:gap-8">
        {others.map((otherProduct) => (
          <div key={otherProduct.slug} className="flex-1 flex flex-col items-center">
            <div className="rounded-lg overflow-hidden bg-gray mb-8 
                            flex justify-center items-center py-8">
              <picture>
                <source media="(min-width: 769px)" srcSet={otherProduct.images.desktop} />
                <source media="(min-width: 376px)" srcSet={otherProduct.images.tablet} />
                <img 
                  src={otherProduct.images.mobile} 
                  alt={otherProduct.name} 
                  className="w-1/2 object-contain mx-auto"
                />
              </picture>
            </div>
            
            <h4 className="text-h4 font-bold uppercase tracking-h4 mb-8">
              {otherProduct.name}
            </h4>
            
            <Button as="link" to={`/product/${otherProduct.slug}`} variant="primary" className="mt-auto">
              See Product
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}