"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const CuidadoFacial = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-6 p-4 rounded-md">
          Bases de Maquillaje Profesional
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6 p-4 rounded-md">
          Descubre cómo elegir la base ideal según tu tipo de piel y tono para
          un acabado perfecto.
        </p>

        {/* Imagen fija con zoom */}
        <div className="flex flex-col items-center mb-6 overflow-hidden rounded-xl shadow-lg">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image
              src="/img/facial1.jpg"
              alt="Base de maquillaje"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-gray-700 text-center mt-4 p-2 rounded-md">
            Encuentra la base perfecta para tu tipo de piel y luce un acabado
            impecable.
          </p>
        </div>

        {/* Información relevante con fondo de diseño */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text mb-4">
            Subtonos de Base de Maquillaje
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Es básico que entiendas que hay bases de subtono frío y bases de
            subtono cálido. Las de subtono frío son un poco más rosadas,
            generalmente usadas por europeas, nórdicas o alemanas. Las de
            subtono cálido son más amarillas, que normalmente son los tonos más
            indicados para pieles latinas. Sin embargo, también hay pieles
            neutras, ni muy amarillas ni muy rosadas.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Entender qué subtono tienes es vital para hacer compras acertadas.
            Una regla general es que las pieles que se enrojecen con facilidad y
            difícilmente se broncean suelen ser frías. Aquellas que adquieren un
            tono dorado sin enrojecerse demasiado tienden a ser cálidas.
            Mientras que quienes primero se ponen rojas y luego toman un tono
            dorado son neutras.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Muchas marcas de maquillaje clasifican sus bases en W (Warm -
            cálido), C (Cool - frío) y N (Neutral - neutro). Puedes encontrar
            bases como 10C, 10W y 10N, donde el número representa la intensidad
            del tono y la letra, el subtono. Algunas marcas usan nombres como
            “Warm Beige”, “Cool Beige” o “Neutral Beige”.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            También es importante identificar si tu piel es clara, media u
            oscura, para elegir la gama de color adecuada. Para probar la base,
            aplícala cerca de la mejilla y el cuello, difuminando bien. El tono
            que desaparezca por completo y coincida con tu subtono será el
            ideal.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CuidadoFacial;
