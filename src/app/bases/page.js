"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"; // Importamos los iconos
import { useRouter } from "next/navigation";

const Bases = () => {
  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push("/blog/1");
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Bases de Maquillaje</h1>
      <p className="text-lg text-gray-600 mb-4">
        Descubre cómo elegir la base ideal según tu tipo de piel y tono para un acabado perfecto.
      </p>
      <button
        onClick={handleMoreInfoClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Más información
      </button>
    </div>
  );
};

export default Bases;
