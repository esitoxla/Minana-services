import React from 'react'
import hero4 from "../assets/images/hero4.1.png"
import hero3 from "../assets/images/hero3.jpeg"
import { useState, useEffect } from 'react'


export default function HeroCaruosel({children}) {
  const images = [hero4, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="w-full h-full bg-black/40">{children}</div>
    </div>
  );
}
