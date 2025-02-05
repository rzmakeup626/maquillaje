"use client"

import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/img/1-carrucel.png',
    '/img/2-carrucel.png',
    '/img/3-carrucel.png',
    '/img/4-carrucel.png',
    '/img/5-carrucel.png',
  ];

  // Cambiar de imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="relative w-full ">
      {/* Carrusel */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-[#b8860b]' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

