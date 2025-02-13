"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Delineado = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Consejos para un Delineado Perfecto
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Descubre técnicas y trucos para lograr un delineado preciso y elegante
          en tu maquillaje profesional.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/delineado.jpg"
              alt="Delineado de ojos"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Encuentra el tipo de delineado ideal para tu forma de ojos y estilo
            de maquillaje.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Tipos de Delineado
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Delineado Clásico:</strong> Una línea fina a lo largo de
              las pestañas superiores para un look elegante y sutil.
            </li>
            <li>
              <strong>Delineado Cat Eye:</strong> Extiende el trazo hacia afuera
              y hacia arriba para un efecto felino sofisticado.
            </li>
            <li>
              <strong>Delineado Gráfico:</strong> Diseños artísticos y creativos
              para looks modernos y llamativos.
            </li>
            <li>
              <strong>Delineado Ahumado:</strong> Difuminado para un efecto más
              suave y dramático, ideal para maquillaje de noche.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mt-6 mb-4">
            Consejos para un Delineado Preciso
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              Utiliza un primer de ojos para asegurar una aplicación suave y
              duradera.
            </li>
            <li>
              Elige el formato adecuado: gel, líquido o lápiz según tu nivel de
              experiencia y el efecto deseado.
            </li>
            <li>
              Usa cinta adhesiva como guía para lograr una línea simétrica y
              definida.
            </li>
            <li>
              Apoya el codo en una superficie estable para mayor precisión al
              delinear.
            </li>
            <li>
              Corrige errores con un hisopo y desmaquillante para un acabado
              impecable.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delineado;
