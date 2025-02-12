"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/1-carrucel.png",
    "/img/2-carrucel.png",
    "/img/3-carrucel.png",
    "/img/4-carrucel.png",
    "/img/5-carrucel.png",
  ];

  // Cambio automático de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-5x5">
      {/* Carrusel */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[500px] object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#b8860b] scale-110" : "bg-gray-400 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
