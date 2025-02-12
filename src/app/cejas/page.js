"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const CejasPerfectas = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Cejas Perfectas: Consejos y Técnicas
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Descubre cómo definir y dar forma a tus cejas para un look armonioso y natural.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/cejas2.jpg"
              alt="Cejas perfectas"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Encuentra el estilo de cejas ideal según tu rostro y estilo.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Técnicas para unas Cejas Perfectas
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Depilación con pinza:</strong> Ideal para definir la forma con precisión.
            </li>
            <li>
              <strong>Depilación con hilo:</strong> Técnica precisa y menos agresiva para la piel.
            </li>
            <li>
              <strong>Microblading:</strong> Procedimiento semipermanente para cejas más definidas y naturales.
            </li>
            <li>
              <strong>Maquillaje de cejas:</strong> Uso de lápices, sombras o geles para rellenar y dar forma.
            </li>
            <li>
              <strong>Laminado de cejas:</strong> Técnica para fijar los vellos en una dirección uniforme y lograr más volumen.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mt-6 mb-4">
            Consejos para un Acabado Natural
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Encuentra la forma de cejas que mejor se adapte a tu tipo de rostro.
            </li>
            <li>
              Usa productos waterproof para mayor duración en el maquillaje de cejas.
            </li>
            <li>
              No depiles en exceso para evitar cejas demasiado finas y poco naturales.
            </li>
            <li>
              Cepilla tus cejas hacia arriba para un efecto más voluminoso y definido.
            </li>
            <li>
              Hidrata y cuida tus cejas con aceites naturales para fortalecer los vellos.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CejasPerfectas;
