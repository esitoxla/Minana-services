import React from 'react'
import Hero from '../components/hero/hero'
import About from "../components/About/About";
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Products/>
    </div>
  )
}
