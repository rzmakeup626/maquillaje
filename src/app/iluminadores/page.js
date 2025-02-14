"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Iluminadores = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Iluminadores para Maquillaje Profesional
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Descubre cómo elegir y aplicar iluminadores para resaltar tu rostro
          con un brillo natural y sofisticado.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/iluminador.jpg"
              alt="Iluminador de maquillaje"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Resalta los puntos clave de tu rostro con el iluminador ideal para
            tu tipo de piel.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Tipos de Iluminadores
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Iluminador en Polvo:</strong> Ideal para pieles grasas, se
              difumina fácilmente y proporciona un acabado natural.
            </li>
            <li>
              <strong>Iluminador en Crema:</strong> Perfecto para pieles secas,
              aporta un brillo más intenso y húmedo.
            </li>
            <li>
              <strong>Iluminador Líquido:</strong> Muy versátil, se puede
              mezclar con la base o aplicar directamente sobre la piel.
            </li>
            <li>
              <strong>Iluminador en Barra:</strong> Fácil de aplicar y
              difuminar, ideal para retoques rápidos.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mt-6 mb-4">
            Cómo Aplicar el Iluminador
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Aplica en los puntos altos del rostro: pómulos, puente de la
              nariz, arco de cupido y lagrimal.
            </li>
            <li>
              Usa una brocha o esponja para difuminar y lograr un efecto
              natural.
            </li>
            <li>
              Combina con rubor y bronceador para un look equilibrado y
              armonioso.
            </li>
            <li>
              Elige un tono adecuado según tu piel: champagne para pieles
              claras, dorado para medias y bronce para oscuras.
            </li>
          </ul>
          <p className="text-[#b8860b] text-lg font-semibold mt-4">
           Marcas de nuestros Productos
          </p>
          <p>Atenea, Mac.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Iluminadores;
