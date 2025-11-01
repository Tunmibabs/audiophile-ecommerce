import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CategoryLinks from "../components/CategoryLinks";
import FeaturedProducts from "../components/FeaturedProducts";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CategoryLinks />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
