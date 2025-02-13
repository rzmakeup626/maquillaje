"use client";

import React from "react";
import { motion } from "framer-motion";

const phone = "573116386099"; // Número de WhatsApp

// Función para generar enlaces de WhatsApp dinámicos
const getWhatsAppLink = (message) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const baseURL = isMobile
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";
  return `${baseURL}?phone=${phone}&text=${encodeURIComponent(message)}`;
};

const HomePage = () => {


  const skinTypes = [
    {
      id: 1,
      name: "Piel Seca",
      description:
        "Para la piel seca, es ideal un maquillaje hidratante que no reseque más. Usamos bases líquidas y productos que aportan luminosidad.",
      image: "/img/Piel-seca.jpeg",
      makeup: "Maquillaje hidratante, bases ligeras, iluminadores.",
    },
    {
      id: 2,
      name: "Piel Grasa",
      description:
        "Para la piel grasa, es mejor un maquillaje mate que controle el exceso de brillo. Utilizamos bases en polvo o fórmulas a prueba de agua.",
      image: "/img/Piel-grasa.jpeg",
      makeup: "Maquillaje mate, bases a prueba de agua, polvos compactos.",
    },
    {
      id: 3,
      name: "Piel Mixta",
      description:
        "Si tienes la piel mixta, buscamos productos equilibrantes que hidraten donde sea necesario y controlen el brillo en zonas T.",
      image: "/img/Piel-mixta.jpeg",
      makeup:
        "Maquillaje equilibrante, bases ligeras, productos que matifiquen zonas T.",
    },
    {
      id: 4,
      name: "Piel Sensible",
      description:
        "La piel sensible necesita productos suaves y no comedogénicos. Optamos por fórmulas hipoalergénicas.",
      image: "/img/Piel-sensible.jpeg",
      makeup:
        "Maquillaje hipoalergénico, bases sin fragancia, productos suaves.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-[#b8860b] to-[#f7d678] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Encuentra el Maquillaje Perfecto para Tu Tipo de Piel
        </h1>
        <p className="text-lg md:text-xl mb-6">
          El maquillaje adecuado hace toda la diferencia. Descubre qué productos
          son ideales para tu tipo de piel.
        </p>
      </section>

      {/* Skin Types Section */}
      <section className="py-20 px-6 bg-white text-center">
        <motion.h2 className="text-3xl font-bold text-black mb-8">
          Tipos de Piel y Maquillaje
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skinTypes.map((skin) => (
            <motion.div
              key={skin.id}
              className="relative bg-white border-2 border-[#b8860b] rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-600"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={skin.image}
                alt={skin.name}
                className="w-full h-48 object-cover rounded-t-lg"
                whileHover={{ scale: 1.1 }}
              />
              <div className="p-4 text-left">
                <h3 className="text-2xl font-semibold text-black">
                  {skin.name}
                </h3>
                <p className="text-lg text-gray-600">{skin.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#b8860b] to-[#f7d678] text-white text-center">
        <motion.h2 className="text-4xl font-bold mb-4">
          Nuestros Servicios
        </motion.h2>
        <p className="text-lg mb-6">
          Realza tu belleza con un maquillaje sofisticado y natural, perfecto
          para cualquier ocasión especial. Desde graduaciones y fiestas hasta
          bodas y eventos formales, creamos un look de larga duración que
          armoniza con tu estilo, vestimenta y personalidad
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Maquillaje Social",
              desc: "Look natural, accesible y sofisticado para eventos especiales como graduaciones, fiestas, bodas o para el día a día. Maquillaje de larga duración que realza tu estilo y personalidad.",
            },
            {
              title: "Maquillaje de Noche",
              desc: "Luce impactante y glamurosa con un maquillaje diseñado para resaltar bajo luces nocturnas. Utilizamos técnicas avanzadas para intensificar tu mirada, esculpir tu rostro y garantizar un acabado impecable que dure toda la velada.",
            },
            {
              title: "Maquillaje para Novias",
              desc: "Para el día más importante de tu vida, necesitas un maquillaje que refleje tu esencia y resista cada emoción. Diseñamos un look elegante y atemporal, con productos de alta duración y técnicas profesionales que te harán brillar con luz propia.",
            },
            {
              title: "Maquillaje para Hombres",
              desc: "Un toque sutil pero efectivo para perfeccionar tu apariencia sin exceso de producto. Ideal para sesiones fotográficas, eventos profesionales o televisión, este servicio equilibra el tono de la piel, reduce brillos y oculta imperfecciones con un acabado natural y fresco.",
            },
            {
              title: "Maquillaje para Fotografía",
              desc: "Potencia tu imagen ante las cámaras con un maquillaje diseñado para capturar cada detalle a la perfección. Evitamos reflejos no deseados y realzamos tus facciones con un acabado profesional que luce impecable en cualquier iluminación.",
            },
            {
              title: "Asesoría personalizada Automaquillaje",
              desc: "Descubre los secretos del maquillaje profesional con una asesoría adaptada a tus necesidades. Aprende desde las bases hasta técnicas avanzadas, con clases especializadas para el día a día o eventos especiales. Analizamos tu tipo de piel, rasgos y colores ideales para que logres un look impecable por ti misma.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg relative"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg mb-4">{service.desc}</p>
              <a
                href={getWhatsAppLink(
                  `Hola, me interesa el servicio de ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b8860b] text-white px-6 py-2 text-lg font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
              >
                Más info
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-lg text-black font-semibold">
          Y mucho más. ¡Contáctanos para descubrir todos los servicios que
          tenemos para ti!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
