import React from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import CategoryLinks from "../components/CategoryLinks";
import BestGear from "../components/BestGear";

import XX99Headphones from "../assets/xx99-desktop.svg";
import XX99HeadphonesM from "../assets/xx99-tablet.svg";
import XX99MarkI from "../assets/xx99-mark1-desktop.svg";
import XX99MarkIm from "../assets/xx99-mark1-tablet.svg";

import XX59 from "../assets/xx59-desktop.svg";
import XX59m from "../assets/xx59-tablet.svg";

import ZX9Speaker from "../assets/zx9-speaker.svg";
import ZX7Speaker from "../assets/zx7-speakers.svg";
import YX1Earphones from "../assets/yx1-wireless.svg";
// GALLERY IMPORTS
import xx991 from "../assets/man-d-products.svg";
import xx992 from "../assets/phone-d-products.svg";
import xx993 from "../assets/headphones-d-products.svg";

import mark11 from "../assets/mark1-first.svg";
import mark12 from "../assets/mark1-second.svg";
import mark13 from "../assets/mark1-third.svg";

import xx591 from "../assets/xx59-1.svg";
import xx592 from "../assets/xx59-2.svg";
import xx593 from "../assets/xx59-3.svg";

import zx91 from "../assets/zx9-1.svg";
import zx92 from "../assets/zx9-2.svg";
import zx93 from "../assets/zx9-3.svg";

import ZX71 from "../assets/zx7-1.svg";
import ZX72 from "../assets/zx7-2.svg";
import ZX73 from "../assets/zx7-3.svg";

import E1 from "../assets/earphones1.svg";
import E2 from "../assets/earphones2.svg";
import E3 from "../assets/earphones3.svg";

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
        price: 2999,
        features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
  
        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 5m Audio Cable" },
          { quantity: 1, item: "Travel Bag" },
        ],
        gallery: {
          first: {
            desktop: xx991,
            mobile: xx991,
            tablet: xx991,
          },
          second: {
            desktop: xx992,
            mobile: xx992,
            tablet: xx992,
          },
          third: {
            desktop: xx993,
            mobile: xx993,
            tablet: xx993,
          },
        },
        others: [
          {
            slug: "xx99-mark-i-headphones",
            name: "XX99 Mark I",
            images: {
              mobile: XX99MarkIm,
              tablet: XX99MarkIm,
              desktop: XX99MarkI,
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            images: {
              mobile: ZX9Speaker,
              tablet: ZX9Speaker,
              desktop: ZX9Speaker,
            },
          },
        ],
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
        price: 1750,
        features: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 5m Audio Cable" },
        ],
        gallery: {
          first: {
            mobile: mark11,
            tablet: mark11,
            desktop: mark11,
          },
          second: {
            mobile: mark12,
            tablet: mark12,
            desktop: mark12,
          },
          third: {
            mobile: mark13,
            tablet: mark13,
            desktop: mark13,
          },
        },
        others: [
          {
            slug: "xx99-mark-ii-headphones",
            name: "XX99 Mark II",
            images: {
              mobile: XX99HeadphonesM,
              tablet: XX99HeadphonesM,
              desktop: XX99Headphones,
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            images: {
              mobile: ZX9Speaker,
              tablet: ZX9Speaker,
              desktop: ZX9Speaker,
            },
          },
        ],
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
        price: 899,
        features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 5m Audio Cable" },
        ],
        gallery: {
          first: {
            desktop: xx591,
            mobile: xx591,
            tablet: xx591,
          },
          second: {
            desktop: xx592,
            mobile: xx592,
            tablet: xx592,
          },
          third: {
            desktop: xx593,
            mobile: xx593,
            tablet: xx593,
          },
        },
        others: [
          {
            slug: "xx99-mark-ii-headphones",
            name: "XX99 Mark II",
            images: {
              mobile: XX99HeadphonesM,
              tablet: XX99HeadphonesM,
              desktop: XX99Headphones,
            },
          },
          {
            slug: "xx99-mark-i-headphones",
            name: "XX99 Mark I",
            images: {
              mobile: XX99MarkIm,
              tablet: XX99MarkIm,
              desktop: XX99MarkI,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            images: {
              mobile: ZX9Speaker,
              tablet: ZX9Speaker,
              desktop: ZX9Speaker,
            },
          },
        ],
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
          mobile: ZX9Speaker,
          tablet: ZX9Speaker,
          desktop: ZX9Speaker,
        },
        price: 4500,
        features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
        inTheBox: [
          { quantity: 1, item: "Speaker Unit" },
          { quantity: 2, item: "Speaker Cloth Panel" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 10m Audio Cable" },
          { quantity: 1, item: "10m Optical Cable" },
        ],
        gallery: {
          first: {
            desktop: zx91,
            mobile: zx91,
            tablet: zx91,
          },
          second: {
            desktop: zx92,
            mobile: zx92,
            tablet: zx92,
          },
          third: {
            desktop: zx93,
            mobile: zx93,
            tablet: zx93,
          },
        },
        others: [
          {
            slug: "zx7-speaker",
            name: "ZX7 Speaker",
            images: {
              mobile: ZX7Speaker,
              tablet: ZX7Speaker,
              desktop: ZX7Speaker,
            },
          },
          {
            slug: "xx99-mark-i-headphones",
            name: "XX99 Mark I",
            images: {
              mobile: XX99MarkIm,
              tablet: XX99MarkIm,
              desktop: XX99MarkI,
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
        ],
      },

      {
        id: 2,
        name: "ZX7 SPEAKER",
        description:
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        isNew: false,
        slug: "zx7-speaker",
        images: {
          mobile: ZX7Speaker,
          tablet: ZX7Speaker,
          desktop: ZX7Speaker,
        },
        price: 3500,
        features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
        inTheBox: [
          { quantity: 1, item: "Speaker Unit" },
          { quantity: 2, item: "Speaker Cloth Panel" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
          { quantity: 1, item: "7.5m Optical Cable" },
        ],
        gallery: {
          first: {
            desktop: ZX71,
            mobile: ZX71,
            tablet: ZX71,
          },
          second: {
            desktop: ZX72,
            mobile: ZX72,
            tablet: ZX72,
          },
          third: {
            desktop: ZX73,
            mobile: ZX73,
            tablet: ZX73,
          },
        },
        others: [
          {
            slug: "xx99-mark-i-headphones",
            name: "XX99 Mark I",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            },
          },
        ],
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
          mobile: YX1Earphones,
          tablet: YX1Earphones,
          desktop: YX1Earphones,
        },
        price: 599,
        features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
        inTheBox: [
          { quantity: 2, item: "EarPhone Unit" },
          { quantity: 6, item: "Multi-size Earplugs" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "USB-C Charging Cable" },
          { quantity: 1, item: "Travel Pouch" },
        ],
        gallery: {
          first: {
            desktop: E1,
            mobile: E1,
            tablet: E1,
          },
          second: {
            desktop: E2,
            mobile: E2,
            tablet: E2,
          },
          third: {
            desktop: E3,
            mobile: E3,
            tablet: E3,
          },
        },
        others: [
          { slug: "xx99-mark-i-headphones", name: "XX99 Mark I", images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            } },
          { slug: "xx59-headphones", name: "XX59", images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            }},
          { slug: "zx9-speaker", name: "ZX9 Speaker", images: {
              mobile: XX59m,
              tablet: XX59m,
              desktop: XX59,
            } },
        ],
      },
    ],
  },
};

export const allProductData = categoryData;

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
