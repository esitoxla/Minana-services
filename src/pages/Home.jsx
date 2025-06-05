import React from 'react'

import About from "../components/About/About";
import Products from '../components/Products';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Products/>
    </div>
  )
}
