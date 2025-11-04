import React from "react";
import Hero from "../components/Hero.tsx";
import CategoryLinks from "../components/CategoryLinks.tsx";
import FeaturedProducts from "../components/FeaturedProducts.tsx";
import BestGear from "../components/BestGear.tsx";

function HomePage() {
  return (
    <div>
      <main>
        <Hero />
        <CategoryLinks />
        <FeaturedProducts />
        <BestGear />
      </main>
    </div>
  );
}

export default HomePage;
