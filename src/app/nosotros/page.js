"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function AboutNosotros() {
  return (
    <>
      <Navbar />

      {/* Sección Quiénes Somos */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 text-center">
        <motion.h2 
          className="text-4xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quiénes Somos
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          En <span className="text-[#b8860b] font-semibold">R&Z Makeup Artist</span> nos especializamos en realzar la belleza de cada persona mediante técnicas profesionales y productos de alta calidad. Nos enfocamos en ofrecer una experiencia personalizada, asegurando que cada cliente se sienta único y seguro en cualquier ocasión.
        </motion.p>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#fdf6e3] to-[#f5e1a4]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Imagen con movimiento y zoom */}
    <motion.div
      className="w-full md:w-1/3 flex justify-center md:justify-start"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <img 
        src="/img/historia.jpeg" 
        alt="Historia" 
        className="w-full md:w-auto md:max-w-sm rounded-2xl shadow-lg transition-transform duration-300"
      />
    </motion.div>

    {/* Texto */}
    <motion.div
      className="w-full md:w-2/3 text-center md:text-left"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-semibold text-black">Historia</h3>
      <p className="mt-4 text-lg text-gray-700">
        Desde pequeña, el maquillaje fue mi gran pasión. Pasaba horas explorando colores, texturas y técnicas, maravillada por el poder transformador de cada pincelada. Aprendí de manera autodidacta, experimentando con distintos estilos y perfeccionando cada trazo con dedicación y creatividad.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Aunque inicialmente decidí estudiar enfermería por seguridad, el amor por el arte del maquillaje nunca desapareció. Entre turnos y estudios, seguía practicando, descubriendo nuevas tendencias y perfeccionando cada técnica. Fue entonces cuando comprendí que mi verdadera vocación estaba en resaltar la belleza y confianza de cada persona a través del maquillaje.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Decidí dar un paso adelante y formarme profesionalmente en V PRO Makeup Center, donde adquirí conocimientos avanzados, dominé nuevas técnicas y reforcé mi pasión por esta profesión. Lo que comenzó como un hobby, se convirtió en mi propósito: transformar rostros y hacer que cada cliente se sienta especial, único y seguro de sí mismo en cualquier ocasión.
      </p>
      <p className="mt-4 text-lg text-gray-700 font-semibold">
        Hoy soy maquilladora profesional, con muchos logros por alcanzar y grandes expectativas para el futuro. Este camino me ha permitido entender que el maquillaje no es solo una profesión, sino un estilo de vida que me inspira y me llena de felicidad.
      </p>
    </motion.div>
  </div>
</section>


      {/* Nuestros Valores */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Nuestros Valores</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Pasión", text: "Amamos lo que hacemos y se nota en cada maquillaje." },
              { title: "Exclusividad", text: "Cada look es diseñado para realzar tu belleza única." },
              { title: "Excelencia", text: "Buscamos la excelencia en cada servicio." },
              { title: "Puntualidad", text: "Valoramos tu tiempo y nos aseguramos de cumplir con cada cita agendada." },
              { title: "Compromiso", text: "Nos dedicamos con responsabilidad a ofrecer el mejor servicio." },
              { title: "Responsabilidad", text: "Cada servicio es realizado con profesionalismo y dedicación." }
            ].map((valor, index) => (
              <motion.div
                key={index}
                className="bg-[#b8860b] p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-semibold">{valor.title}</h4>
                <p className="mt-4 text-lg">{valor.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutNosotros;

