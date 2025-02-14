"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";


// Servicios para mujeres
const serviciosMujeres = [
  //{
  //  nombre: "Maquillaje para Eventos Especiales",
  //  descripcion:
  //    "Un servicio perfecto para cualquier ocasión especial, como cumpleaños, aniversarios, sesiones de fotos o cualquier evento donde se quiera destacar con un look profesional y elegante.",
  //  imagen: "/img/Maquillaje_eventos.jpg", 
  //},
  {
    nombre: "Maquillaje para Novias",
    descripcion:
      "Es un servicio altamente personalizado y especial, que se adapta al estilo y el tema de la boda. Este tipo de maquillaje busca que la novia luzca impecable durante todo el día de su boda, incluyendo fotos, ceremonias y celebraciones.",
    imagen: "/img/Maquillaje_novias.png",
  },
  //{
  //  nombre: "Maquillaje de Noche",
  //  descripcion:
  //    "Un maquillaje más dramático, pensado para eventos nocturnos, como cenas, fiestas o salidas. Se juega más con sombras oscuras, delineados intensos y labios llamativos.",
  //  imagen: "/img/Maquillaje_noche.jpg",
  //},
  //{
  //  nombre: "Maquillaje Artístico",
  //  descripcion:
  //    "Transformamos tu rostro en una obra de arte con técnicas avanzadas de body painting y efectos especiales para sesiones temáticas o producciones audiovisuales.",
  //  imagen: "/img/Maquillaje-arte.jpg",
  //},
  {
    nombre: "Maquillaje Social",
    descripcion:
      "Lucir radiante en eventos especiales como graduaciones, fiestas o incluso en el día a día. La combinación perfecta entre naturalidad y sofisticación realza tu belleza sin excesos. Tus rasgos, estilo personal y complementa tu vestuario.",
    imagen: "/img/Maquillaje_natural.png",
  },
  {
    nombre: "Clases de Automaquillaje",
    descripcion:
      "Conócete a ti misma con un análisis detallado de tu rostro. Aprenderás técnicas de aplicación desde lo básico hasta lo avanzado, incluyendo maquillaje para el día a día y eventos especiales asegurando un estilo impecable.",
    imagen: "/img/Clases_auto-maquillaje.png",
  },
];   


// Servicios para hombres
const serviciosHombres = [
  //
  //  nombre: "Maquillaje Masculino Natural",
  //  descripcion:
  //    "Corrige imperfecciones y reduce el brillo facial para un look fresco y natural. Ideal para entrevistas, reuniones y eventos especiales.",
  //  imagen: "/img/Hombres-natural.jpg",
  //},
  {
    nombre: "Maquillaje Correctivo para Cicatrices e Imperfecciones",
    descripcion:
      "Se utilizan productos y técnicas especializadas para disimular cicatrices, acné, manchas o tatuajes sin que el resultado parezca artificial.",
    imagen: "/img/sin-manchas.jpg",
  },
  {
    nombre: "Maquillaje para Televisión y Cine",
    descripcion:
      "Prepara la piel para cámaras HD y luces intensas. Utilizamos una técnica especial para resaltar tus rasgos, evitar reflejos y garantizar un acabado impecable en fotos.",
    imagen: "/img/cine.png",
  },
];

function AboutServicios() {
  return (
    <>
      <Navbar />

      {/* Hero Section con Degradado Dorado Suave */}
<section className="relative text-white text-center py-20 px-6" 
  style={{ background: 'linear-gradient(135deg, #e6c76c, #b8860b)' }}>
  <motion.h1
    className="text-5xl font-extrabold relative z-10 transition-transform duration-300 hover:scale-110"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Servicios Profesionales de Maquillaje
  </motion.h1>
  <motion.p
    className="text-lg mt-4 relative z-10 max-w-2xl mx-auto"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Descubre nuestros servicios diseñados para realzar tu belleza en cualquier ocasión.
  </motion.p>
</section>


      {/* Servicios para Mujeres */}
      <section className="py-20 px-6 bg-white text-center">
        <motion.h2
          className="text-4xl font-bold text-black mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nuestros Servicios para Mujeres
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviciosMujeres.map((servicio, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="relative w-full h-64">
                <Image
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg transition-opacity duration-500 hover:opacity-80"
                />
              </motion.div>
              <div className="p-6" style={{ background: 'linear-gradient(to bottom, #b8860b, #e5c581)' }}>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {servicio.nombre}
                </h3>
                <p className="text-lg text-white">{servicio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Servicios para Hombres */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <motion.h2
          className="text-4xl font-bold text-black mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nuestros Servicios para Hombres
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviciosHombres.map((servicio, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="relative w-full h-64">
                <Image
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg transition-opacity duration-500 hover:opacity-80"
                />
              </motion.div>
              <div className="p-6 bg-gradient-to-b from-black to-gray-900">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {servicio.nombre}
                </h3>
                <p className="text-lg text-gray-300">{servicio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action con Fondo Dorado Suave */}
      <section className="py-6 px-6" style={{ backgroundColor: '#b8860b' }}>
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-center justify-center"
          animate={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 1.5 }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              ¿Lista para una transformación espectacular?
            </h3>
            <p className="text-lg mb-6 text-white">
              Agenda tu cita hoy mismo y descubre el poder del maquillaje profesional.
            </p>
          
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
   
export default AboutServicios;
