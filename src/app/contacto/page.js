"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function AboutContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    celular: "",
    email: "",
    ciudad: "",
    servicio: "",
    mensaje: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setMensaje(
        "Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo."
      );
      setFormData({
        nombre: "",
        apellidos: "",
        celular: "",
        email: "",
        ciudad: "",
        servicio: "",
        mensaje: "",
      });
    } catch (error) {
      setMensaje("Hubo un error al enviar el mensaje: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-black">Contáctanos</h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white p-6 md:p-8 rounded-lg shadow-2xl max-w-3xl mx-auto text-left border border-[#b8860b]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Celular
                </label>
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Servicio (Obligatorio)
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
              >
                <option value="">Selecciona un servicio</option>
                <option value="maquillaje-novias">Maquillaje para Novias</option>
                <option value="maquillaje-social">Maquillaje Social</option>
                <option value="clases-automaquillaje">Clases de Automaquillaje</option>
                <option value="maquillaje-correctivo-hombres">Maquillaje Correctivo para Hombres</option>
                <option value="maquillaje-cine-tv">Maquillaje para Cine y Televisión</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 h-32 focus:outline-none focus:ring-2 focus:ring-[#b8860b]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 bg-[#b8860b] text-white font-semibold py-3 rounded-lg transition duration-300 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#a37500]"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {mensaje && (
              <p
                className={`mt-4 text-center font-semibold ${
                  mensaje.includes("error") ? "text-red-600" : "text-green-600"
                }`}
              >
                {mensaje}
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutContacto;
