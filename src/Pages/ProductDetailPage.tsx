import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { allProductData } from "./CategoryPage.tsx";

import CategoryLinks from "../components/CategoryLinks.tsx";
import BestGear from "../components/BestGear.tsx";

import ProductDetailCard from "../components/ProductDetailCard.tsx";
import ProductInfo from "../components/ProductsInfo.tsx";
import ProductGallery from "../components/ProductGallery.tsx";
import YouMayAlsoLike from "../components/YouMayAlsoLike.tsx";

export default function ProductDetailPage() {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const allProducts = [
    ...allProductData.headphones.products,
    ...allProductData.speakers.products,
    ...allProductData.earphones.products,
  ];

  const product = allProducts.find((p) => p.slug === productSlug);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return <div>Product not found</div>; // Or a 404 component
  }

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-8 md:pt-16 lg:pt-20">
        <div className="w-full flex">
          <button
            onClick={handleGoBack}
            className="text-body text-black text-opacity-75 hover:text-primary mb-8"
          >
            Go Back
          </button>
        </div>
        <ProductDetailCard product={product} />
        <ProductInfo product={product} />
        <ProductGallery product={product} />
        <YouMayAlsoLike product={product} />
      </div>
      <CategoryLinks />
      <BestGear />
    </>
  );
}
