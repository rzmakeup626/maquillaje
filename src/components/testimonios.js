"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonios = [
  {
    nombre: "Sofía Arroyo",
    imagen: "/img/Sofía_Arroyo.png",
    texto: "Recibí un maquillaje increíble con Yoli. Su profesionalismo, atención a los detalles y productos de alta calidad lograron un acabado impecable y duradero. Me sentí y me vi espectacular. ¡Totalmente recomendada!",
  },
  {
    nombre: "Nicole Mendoza",
    imagen: "/img/Nicole_Mendoza.png",
    texto: "Tu trabajo es excepcional. Cada maquillaje resalta mis rasgos con precisión y se adapta a cada sesión fotográfica, desde lo sutil hasta lo creativo. Tu profesionalismo y dedicación hacen que trabajar contigo sea un placer. ¡Gracias por aportar tanto con tu arte!",
  },
  {
    nombre: "Mateo Fajardo",
    imagen: "/img/Mateo_Fajardo.png",
    texto: "Trabajo impecable y profesional. Me hizo sentir cómodo, explicando cada producto con detalle. El maquillaje quedó natural y adaptado a mi tipo de piel. ¡100% recomendada!",
  },
  {
    nombre: "Sara Mendoza",
    imagen: "/img/Sara_Mendoza.png",
    texto: "Muy agradable, un buen maquillaje, buena atención, me gustaría ver y probar maquillajes un poco más simples. Por lo demás, muy contenta con su desempeño. ¡Gracias!",
  },
  {
    nombre: "Daniela Castro",
    imagen: "/img/Daniela-Castro.png",
    texto: "Una experiencia increíble. Me sentí cómoda y segura desde el primer momento. El maquillaje realzó mi mirada con elegancia y perfección. ¡Sin duda, lo repetiría!",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      {/* Sección de Testimonios */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-center text-black mb-12">
          Testimonios de Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"
              }`}
              style={{
                background: "linear-gradient(to bottom, #f7e7b3, #fff)", // Degradado dorado suave
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-24 h-24 overflow-hidden rounded-full border-4 border-[#b8860b] mb-4"
                whileHover={{ scale: 1.2 }}
              >
                <Image
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
                />
              </motion.div>
              <h4 className="text-lg font-semibold text-black">{testimonio.nombre}</h4>
              <p className="text-gray-700 text-center mt-2">{testimonio.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección con Mensaje Inspirador */}
      <section className="py-6 px-4 bg-gradient-to-r from-black via-[#b8860b] to-white text-black text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          animate={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Transforma tu Belleza, Siente el Poder del Maquillaje</h3>
          <p className="text-lg">
            Descubre el maquillaje profesional que te hace brillar en cualquier momento. ¡Es tu turno de ser la mejor versión de ti misma!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
