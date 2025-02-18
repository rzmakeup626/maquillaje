"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Labiales = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen max-w-4xl mx-auto p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-[#d4af37] mb-4 md:mb-6">
          Labiales para Maquillaje Profesional
        </h1>
        <p className="text-base md:text-lg text-gray-700 text-center mb-4 md:mb-6">
          Descubre los diferentes tipos de labiales y cómo elegir el ideal para un acabado profesional y duradero.
        </p>

        {/* Imagen fija */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/img/labios.jpg"
            alt="Labiales para maquillaje profesional"
            width={600}
            height={400}
            className="rounded-xl hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-700 text-center mt-4 p-2">
            Encuentra el labial perfecto para cada ocasión y resalta tu look con colores vibrantes y duraderos.
          </p>
        </div>

        {/* Información sobre labiales de maquillaje */}
        <div className="mt-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-4">
            Tipos de Labiales
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>
              <strong className="text-black">Labiales Mate:</strong> De larga duración y alta pigmentación. Perfectos para un look sofisticado y elegante.
            </li>
            <li>
              <strong className="text-black">Labiales Cremosos:</strong> Hidratan los labios y proporcionan un acabado brillante y cómodo de llevar.
            </li>
            <li>
              <strong className="text-black">Labiales Líquidos:</strong> Alta cobertura con efecto mate o satinado, ideales para eventos de larga duración.
            </li>
            <li>
              <strong className="text-black">Labiales en Bálsamo:</strong> Suaves y nutritivos, perfectos para el día a día y para mantener los labios hidratados.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mt-6 mb-4">
            Consejos para Aplicar Labiales
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Para lograr un acabado impecable, sigue estos consejos clave:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>Exfolia e hidrata los labios antes de aplicar cualquier labial.</li>
            <li>Usa un delineador para definir y evitar que el color se corra.</li>
            <li>Aplica el labial con brocha para mayor precisión y duración.</li>
            <li>Para un efecto más voluminoso, añade un toque de brillo en el centro de los labios.</li>
          </ul>
          <p className="text-[#b8860b] text-lg font-semibold mt-4">
           Marcas de nuestros Productos
          </p>
          <p  className="text-black">Ame, Catrice, essence, atenea, L.A Girl.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Labiales;
