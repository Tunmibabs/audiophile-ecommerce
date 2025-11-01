import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CategoryLinks from '../components/CategoryLinks'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CategoryLinks />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
