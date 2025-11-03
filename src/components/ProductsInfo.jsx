import React from 'react';

export default function ProductInfo({ product }) {
  const { features, inTheBox } = product;

  return (
    <section className="py-24 md:py-32">

      <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">

        <div className="lg:w-3/5">
          <h3 className="text-h3 font-bold uppercase tracking-h3 mb-8">
            Features
          </h3>

          <p className="text-body leading-body text-black text-opacity-75 whitespace-pre-line">
            {features}
          </p>
        </div>
        <div className="lg:w-2/5">
          <h3 className="text-h3 font-bold uppercase tracking-h3 mb-8">
            In the Box
          </h3>
          <ul className="flex flex-col gap-2">
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
    </section>
  );
}