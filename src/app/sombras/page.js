"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Sombras = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-[#d4af37] mb-4 md:mb-6">
          Sombras para Maquillaje Profesional
        </h1>
        <p className="text-base md:text-lg text-gray-700 text-center mb-4 md:mb-6">
          Descubre cómo elegir y aplicar sombras de ojos para lograr un acabado profesional y duradero.
        </p>

        {/* Imagen fija */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/img/sombras.a.jpg"
            alt="Paleta de sombras para maquillaje profesional"
            width={600}
            height={400}
            className="rounded-xl hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 text-center mt-4 p-2">
            Explora una variedad de tonos y texturas para crear looks únicos y sofisticados.
          </p>
        </div>

        {/* Información sobre sombras de maquillaje */}
        <div className="mt-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-4">
            Tipos de Sombras de Ojos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>
              <strong className="text-black">Sombras en Polvo:</strong> Son las más comunes y fáciles de difuminar. Perfectas para maquilladores profesionales.
            </li>
            <li>
              <strong className="text-black">Sombras en Crema:</strong> Ideales para un acabado más intenso y duradero. Se pueden usar como base para potenciar los colores en polvo.
            </li>
            <li>
              <strong className="text-black">Sombras Líquidas:</strong> De alta pigmentación y larga duración. Son perfectas para looks llamativos y modernos.
            </li>
            <li>
              <strong className="text-black">Sombras en Barra:</strong> Fáciles de aplicar y difuminar. Ideales para un maquillaje rápido y práctico.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mt-6 mb-4">
            Consejos para Aplicar Sombras de Ojos
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Para lograr un acabado impecable, sigue estos consejos clave:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>Usa una prebase de ojos para mayor duración y pigmentación.</li>
            <li>Difumina bien los colores para un efecto degradado natural.</li>
            <li>Elige tonos neutros para un look diario y colores vibrantes para ocasiones especiales.</li>
            <li>Aplica tonos más claros en el lagrimal y oscuros en la cuenca para profundidad.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sombras;
