import React from 'react';

interface BoxItem {
  quantity: number;
  item: string;
}

interface Product {
  features: string;
  inTheBox: BoxItem[]; 
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { features, inTheBox } = product;

  return (
    <section className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-24 md:gap-32">
        <div className="md:w-3/5">
          <h3 className="text-h3 font-bold uppercase tracking-h3 mb-8">
            Features
          </h3>
          <p className="text-body leading-body text-black text-opacity-75 whitespace-pre-line text-justify">
            {features}
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="flex flex-col sm:flex-row md:flex-col">
            <h3 className="text-h3 font-bold uppercase tracking-h3 mb-8 
                           sm:w-1/2 sm:mb-0 
                           md:w-auto md:mb-8">
              In the Box
            </h3>
            <ul className="flex flex-col gap-2 
                           sm:w-1/2
                           md:w-auto">
              {inTheBox.map((item) => (
                <li key={item.item} className="flex">
                  <span className="text-primary font-bold w-12">{item.quantity}x</span>
                  <span className="text-body leading-body text-black text-opacity-75">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
        
      </div>
    </section>
  );
}