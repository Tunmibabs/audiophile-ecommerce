import React, { useState } from "react";
import Button from "./Button";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../context/CartContext"; // Assumes CartContext.tsx

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  isNew: boolean;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  price: number;
  features?: string;
  inTheBox?: { quantity: number; item: string }[];
  gallery?: any;
  others?: any[];
}

interface ProductDetailCardProps {
  product: Product;
}

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  const { name, description, isNew, images, price } = product;
  
  const [quantity, setQuantity] = useState<number>(1);
    const { addToCart } = useCart();

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const nameArray = name.split(" ");
  const lastWord = nameArray.pop();
  const restOfName = nameArray.join(" ");

  return (
    <article
      className="flex flex-col sm:flex-row items-center 
                        gap-12 sm:gap-16 md:gap-32 mt-8 md:mt-12"
    >
      {/* --- Image Column --- */}
      <div className="flex-1 rounded-lg overflow-hidden bg-gray">
        <picture>
          <source media="(min-width: 769px)" srcSet={images.desktop} />
          <source media="(min-width: 376px)" srcSet={images.tablet} />
          <img src={images.mobile} alt={name} className="w-full" />
        </picture>
      </div>

      {/* --- Text Column --- */}
      <div className="flex-1">
        {isNew && (
          <span className="text-overline text-primary tracking-overline block mb-4">
            NEW PRODUCT
          </span>
        )}

        <h2
          className="text-h2 md:text-h1 font-bold uppercase 
                       tracking-h2 md:tracking-h1 
                       leading-h2 md:leading-h1 mb-8"
        >
          {restOfName} <br /> {lastWord}
        </h2>

        <p className="text-body leading-body text-black text-opacity-75 mb-8">
          {description}
        </p>

        <div className="text-h6 font-bold uppercase tracking-h6 mb-8">
          {formattedPrice}
        </div>

        {/* --- Add to Cart Section --- */}
        <div className="flex gap-4">
          <QuantitySelector
            quantity={quantity}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
          {/* This assumes Button.tsx is typed for an onClick prop */}
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}