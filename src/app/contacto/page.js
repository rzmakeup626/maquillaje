"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function AboutContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    servicio: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el campo servicio no esté vacío
    if (!formData.servicio.trim()) {
      setMensaje("Por favor, describe el servicio que te interesa.");
      return;
    }

    const service_id = "tu_service_id"; // Reemplaza con tu Service ID de EmailJS
    const template_id = "tu_template_id"; // Reemplaza con tu Template ID de EmailJS
    const public_key = "tu_public_key"; // Reemplaza con tu Public Key de EmailJS

    const templateParams = {
      nombre: formData.nombre,
      celular: formData.celular,
      email: formData.email,
      servicio: formData.servicio,
    };

    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((response) => {
        setMensaje("Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo.");
        setFormData({ nombre: "", celular: "", email: "", servicio: "" });
      })
      .catch((error) => {
        setMensaje("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };

  return (
    <>
      <Navbar />

      {/* Sección Contacto */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#d4af37] to-[#b8860b]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">Contáctanos</h2>
          <p className="mt-4 text-lg text-white">
            Si estás en Bogotá y te interesa un servicio de maquillaje profesional, completa el formulario y te contactaremos.
          </p>

          {/* Formulario */}
          <form 
            onSubmit={handleSubmit} 
            className="mt-8 bg-white p-8 rounded-lg shadow-2xl max-w-3xl mx-auto text-left"
          >
            {/* Nombre */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Nombre Completo</label>
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
            </div>

            {/* Celular / WhatsApp */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Celular / WhatsApp</label>
              <input 
                type="text" 
                name="celular" 
                value={formData.celular} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
            </div>

            {/* Descripción del Servicio */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">¿Qué servicio de maquillaje te interesa? (Obligatorio)</label>
              <textarea 
                name="servicio" 
                value={formData.servicio} 
                onChange={handleChange} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 h-32"
              ></textarea>
            </div>

            {/* Botón de Envío */}
            <button 
              type="submit" 
              className="w-full bg-[#b8860b] text-white font-semibold py-3 rounded-lg hover:bg-[#a37500] transition duration-300"
            >
              Enviar Mensaje
            </button>

            {/* Mensaje de Confirmación */}
            {mensaje && <p className="mt-4 text-center text-gray-700 font-semibold">{mensaje}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutContacto;
