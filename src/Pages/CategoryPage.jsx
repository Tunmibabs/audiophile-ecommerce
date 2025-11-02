import React from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import CategoryLinks from "../components/CategoryLinks";
import BestGear from "../components/BestGear";

import XX99Headphones from "../assets/xx99-desktop.svg";
import XX99HeadphonesM from "../assets/xx99-tablet.svg"
import XX99MarkI from "../assets/xx99-mark1-desktop.svg";
import XX99MarkIm from "../assets/xx99-mark1-tablet.svg";

import XX59 from "../assets/xx59-desktop.svg";
import XX59m from "../assets/xx59-tablet.svg";

import ZX9Speaker from "../assets/zx9-speaker.svg";
import ZX7Speaker from "../assets/zx7-speakers.svg";
import YX1Earphones from "../assets/yx1-wireless.svg";

const categoryData = {
  headphones: {
    title: "Headphones",
    products: [
      {
        id: 1,
        name: "XX99 Mark II Headphones",
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        isNew: true,
        slug: "xx99-mark-ii-headphones",
        images: {
          mobile: XX99HeadphonesM,
          tablet: XX99HeadphonesM, 
          desktop: XX99Headphones,
        },
      },
      {
        id: 2,
        name: "XX99 Mark I Headphones",
        description:
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        isNew: false,
        slug: "xx99-mark-i-headphones",
        images: {
          mobile: XX99MarkIm,
          tablet: XX99MarkIm,
          desktop: XX99MarkI,
        },
      },
      {
        id: 3,
        name: "XX59 Headphones",
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        isNew: false,
        slug: "xx59-headphones",
        images: {
          mobile: XX59m, 
          tablet: XX59m,
          desktop: XX59,
        },
      },
    ],
  },
  speakers: {
    title: "Speakers",
    products: [
      {
        id: 1,
        name: "ZX9 SPEAKER",
        description:
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        isNew: true,
        slug: "zx9-speaker",
        images: {
          mobile: ZX9Speaker, // <-- TODO: Replace
          tablet: ZX9Speaker, // <-- TODO: Replace
          desktop: ZX9Speaker,
        },
      },
      {
        id: 2,
        name: "ZX7 SPEAKER",
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        isNew: false,
        slug: "zx7-speaker",
        images: {
          mobile: ZX7Speaker, // <-- TODO: Replace
          tablet: ZX7Speaker, // <-- TODO: Replace
          desktop: ZX7Speaker,
        },
      },
    ],
  },
  earphones: {
    title: "Earphones",
    products: [
      {
        id: 1,
        name: "YX1 WIRELESS EARPHONES",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        isNew: true,
        slug: "yx1-wireless-earphones",
        images: {
          mobile: YX1Earphones, // <-- TODO: Replace
          tablet: YX1Earphones, // <-- TODO: Replace
          desktop: YX1Earphones,
        },
      },
    ],
  },
};
// ---------------------------------

export default function CategoryPage() {
  const { categoryName } = useParams();
  const data = categoryData[categoryName];

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <CategoryHeader title={data.title} />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 md:py-32 flex flex-col gap-32">
        {data.products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <CategoryLinks />
      <BestGear />
    </>
  );
}