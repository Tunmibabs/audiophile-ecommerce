import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import FeaturedProducts from "../components/FeaturedProducts";
import BestGear from "../components/BestGear";

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
