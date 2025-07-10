
import About from "../components/About";
import Hero from '../components/Hero';
import ProductSum from '../components/ProductSum';
import Testimonial from '../components/Testimonial';
import GalleryCarousel from '../components/GalleryCarousel';
import ContactDetails from '../components/ContactDetails';
import { CartContext } from '../helpers/contextSetUp';



export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <ProductSum/>
        <Testimonial/>
        <GalleryCarousel/>
        <ContactDetails/>
    </div>
  )
}
