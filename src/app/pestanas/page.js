"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PestañasVolumenAlargamiento = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Pestañas con Volumen y Alargamiento
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Descubre cómo lograr unas pestañas más voluminosas y largas para realzar tu mirada y darle un toque impactante a tu maquillaje profesional.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/pestañas.jpg"
              alt="Pestañas con volumen"
              width={736}
              height={736}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Aprende las mejores técnicas y productos para lograr pestañas impactantes.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Métodos para Lograr Volumen y Alargamiento
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Máscara de pestañas:</strong> Usa una fórmula voluminizadora y un cepillo adecuado para dar densidad sin grumos.
            </li>
            <li>
              <strong>Rizador de pestañas:</strong> Herramienta clave para levantar y curvar las pestañas, potenciando su longitud.
            </li>
            <li>
              <strong>Pestañas postizas:</strong> Disponibles en diferentes estilos para añadir dramatismo o naturalidad según la ocasión.
            </li>
            <li>
              <strong>Extensiones de pestañas:</strong> Un método semipermanente que añade volumen y longitud por varias semanas.
            </li>
            <li>
              <strong>Sueros de crecimiento:</strong> Tratamientos que fortalecen y estimulan el crecimiento de las pestañas con el tiempo.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mt-6 mb-4">
            Consejos para un Acabado Perfecto
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Aplica la máscara en zigzag desde la raíz para distribuir el producto de manera uniforme.
            </li>
            <li>
              Usa un primer de pestañas antes de la máscara para potenciar su efecto.
            </li>
            <li>
              No abuses del rizador para evitar dañar las pestañas.
            </li>
            <li>
              Si usas pestañas postizas, elige un pegamento de buena calidad para una fijación duradera.
            </li>
            <li>
              Desmaquilla tus pestañas con suavidad para evitar quiebres y mantenerlas saludables.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PestañasVolumenAlargamiento;
