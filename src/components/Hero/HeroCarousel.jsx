import React from 'react'
import hero1 from "../../assets/images/hero1.png"
import hero2 from "../../assets/images/hero2.png"
import { useState, useEffect } from 'react'


export default function HeroCaruosel({children}) {
  const images = [hero1, hero2];
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
      <div className="w-full h-screen bg-black/40">{children}</div>
    </div>
  );
}
