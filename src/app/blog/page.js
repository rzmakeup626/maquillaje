"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const blogPosts = [
  {
    id: "1",
    title: "Bases de Maquillaje: ¿Cómo elegir la mejor?",
    description:
      "Descubre cómo elegir la base ideal según tu tipo de piel y tono para un acabado perfecto.",
    image: "/img/Bases.jpg",
    link: <Link href="/bases/1/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "2",
    title: "Sombras de Ojos: Técnicas para un Look Profesional",
    description:
      "Aprende a combinar colores y aplicar sombras como una profesional.",
    image: "/img/Sombras-ojos.jpg",
    link: <Link href="/sombras/2/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "3",
    title: "Labiales de Larga Duración: ¿Cuáles son los mejores?",
    description:
      "Te mostramos los labiales que realmente duran todo el día sin resecar.",
    image: "/img/Labial.jpg",
    link: <Link href="/labiales/3/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "4",
    title: "Cuidado Facial: Prepara tu piel para el maquillaje",
    description:
      "Consejos esenciales para mantener tu piel saludable antes del maquillaje.",
    image: "/img/Cuidado-facial.jpg",
    link: <Link href="/facial/4/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "5",
    title: "Iluminadores: Cómo conseguir un brillo natural",
    description:
      "Descubre los secretos para un rostro radiante con iluminadores.",
    image: "/img/iluminadores.jpg",
    link: <Link href="/iluminadores/5/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "6",
    title: "Rubores: Tonos ideales para cada tipo de piel",
    description:
      "Elige el rubor perfecto según tu tono de piel y logra un look natural.",
    image: "/img/rubores.jpg",
    link: <Link href="/rubores/6/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "7",
    title: "Delineado Perfecto: Técnicas y consejos",
    description:
      "Aprende a realizar diferentes tipos de delineado para realzar tu mirada.",
    image: "/img/Delineador.jpg",
    link: <Link href="/delineado/7/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "8",
    title: "Máscaras de Pestañas: Volumen y alargamiento",
    description:
      "Conoce las mejores máscaras para unas pestañas impactantes.",
    image: "/img/Mascara-pestañas.jpg",
    link: <Link href="/pestanas/8/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
  {
    id: "9",
    title: "Cejas Definidas: Cómo maquillarlas correctamente",
    description:
      "Tips para unas cejas bien definidas y naturales.",
    image: "/img/cejas.jpg",
     link: <Link href="/cejas/9/.."><motion.button className="bg-[#b8860b] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e5c581] transition-all" whileHover={{ scale: 1.1 }}>Leer más</motion.button></Link>
  },
];

function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 bg-gold text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Blog de Maquillaje</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{post.description}</p>
                {post.link}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default BlogPage;