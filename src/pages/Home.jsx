import React from 'react'

import About from "../components/About";
import Hero from '../components/Hero';
import ProductSum from '../components/ProductSum';
import Testimonial from '../components/Testimonial';
import GalleryCarousel from '../components/GalleryCarousel';
import GalleryImages from '../components/GalleryImages';
import ContactDetails from '../components/ContactDetails';



export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <ProductSum/>
        <Testimonial/>
        <GalleryCarousel/>
        <GalleryImages/>
        <ContactDetails/>
    </div>
  )
}
