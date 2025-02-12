"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Rubores = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Rubores para Maquillaje Profesional
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Aprende a elegir y aplicar el rubor ideal para realzar tu rostro con
          un efecto natural y saludable.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/rubor2.jpg"
              alt="Rubor de maquillaje"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Encuentra el tono de rubor perfecto para tu tipo de piel y estilo de
            maquillaje.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Tipos de Rubores
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Rubor en Polvo:</strong> Fácil de aplicar y difuminar,
              ideal para pieles grasas.
            </li>
            <li>
              <strong>Rubor en Crema:</strong> Aporta un acabado más jugoso y
              natural, recomendado para pieles secas.
            </li>
            <li>
              <strong>Rubor Líquido:</strong> De larga duración y gran
              pigmentación, perfecto para un look fresco.
            </li>
            <li>
              <strong>Rubor en Barra:</strong> Práctico y fácil de aplicar,
              ideal para retoques rápidos.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mt-6 mb-4">
            Cómo Aplicar el Rubor
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Aplica en las mejillas y difumina hacia las sienes para un efecto
              natural.
            </li>
            <li>
              Elige un tono acorde a tu piel: rosados para pieles claras,
              duraznos para pieles medias y corales para pieles oscuras.
            </li>
            <li>
              Usa una brocha adecuada para una aplicación uniforme y bien
              difuminada.
            </li>
            <li>
              Si buscas un efecto lifting, aplica el rubor un poco más arriba en
              las mejillas.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rubores;
