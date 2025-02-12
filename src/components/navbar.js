"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [whatsappMenuVisible, setWhatsAppMenuVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const whatsappRef = useRef(null);

  const phone = "573116386099"; // Número de WhatsApp

  // Función para generar enlaces de WhatsApp dinámicos
  const getWhatsAppLink = (message) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseURL = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";
    return `${baseURL}?phone=${phone}&text=${encodeURIComponent(message)}`;
  };

  // Cerrar el menú si el usuario hace clic fuera de él
  const handleClickOutside = (event) => {
    if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
      setWhatsAppMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-[#b8860b] text-[#ffffff] shadow-md relative">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-[#ffffff] p-2 rounded-full">
            <img
              src="/img/Logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-wider">
            RZ Makeup Artist
          </span>
        </button>

        {/* Menú de navegación */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {[
            { path: "/nosotros", label: "Nosotros" },
            { path: "/servicios", label: "Servicios" },
            { path: "/blog", label: "Blog" },
            { path: "/contacto", label: "Contacto" },
          ].map(({ path, label }) => (
            <motion.li
              key={path}
              whileHover={{ scale: 1.1 }}
              className="hover:underline"
            >
              <a
                href={path}
                className={`transition duration-300 text-lg ${
                  router.pathname === path
                    ? "text-[#171717]"
                    : "text-white hover:text-[#171717]"
                }`}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Botón Reserva tu Cita */}
        <div className="hidden md:block">
          <button
            className="px-4 py-2 rounded-2xl text-[#b8860b] border border-[#b8860b] bg-white hover:bg-[#171717] hover:text-white transition-all duration-300"
            onClick={() => router.push("/contacto")}
            disabled={pathname === "/contacto"}
          >
            Reserva tu Cita
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-[#ffffff] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-900 shadow-lg p-6 flex flex-col items-center gap-6 z-50 transition-all duration-300">
          {[
            { path: "/nosotros", label: "Nosotros" },
            { path: "/servicios", label: "Servicios" },
            { path: "/blog", label: "Blog" },
            { path: "/contacto", label: "Contacto" },
          ].map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="text-xl font-semibold text-white tracking-wide hover:text-[#ffffff] transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}{" "}
      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="bg-[#25D366] text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-green-600 transition duration-300 cursor-pointer"
          style={{ width: "60px", height: "60px" }}
          onClick={() => setWhatsAppMenuVisible(!whatsappMenuVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M20.52 3.47A11.78 11.78 0 0012 0a11.68 11.68 0 00-8.22 3.47 11.68 11.68 0 00-3.47 8.22 11.67 11.67 0 001.52 5.9L0 24l6.52-1.79a11.83 11.83 0 005.48 1.4h.01a11.68 11.68 0 008.22-3.47 11.68 11.68 0 003.47-8.22 11.78 11.78 0 00-3.47-8.22zM12 21.2a9.85 9.85 0 01-5.07-1.38l-.36-.21-3.87 1.07 1.04-3.8-.23-.39A9.76 9.76 0 012.2 11.7a9.9 9.9 0 019.8-9.8h.04a9.86 9.86 0 019.8 9.8 9.9 9.9 0 01-2.9 7.05A9.86 9.86 0 0112 21.2zm5.07-7.5c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.18-.33.2-.6.07a8.3 8.3 0 01-2.44-1.5 9.21 9.21 0 01-1.7-2.1c-.18-.31 0-.48.13-.65.14-.17.28-.28.42-.42.14-.14.19-.23.28-.38.1-.15.05-.28-.02-.42-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5h-.55c-.18 0-.47.07-.71.33-.24.26-.93.91-.93 2.22s.95 2.56 1.08 2.74c.14.17 1.87 2.86 4.54 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.7.1.52-.08 1.65-.67 1.88-1.33.23-.66.23-1.23.16-1.34-.08-.1-.24-.16-.52-.3z" />
          </svg>
        </div>

        {/* Menú desplegable de WhatsApp */}
        {whatsappMenuVisible && (
          <div
            ref={whatsappRef}
            className="fixed bottom-20 right-6 bg-white text-black rounded-lg shadow-lg p-4 z-50 w-64"
          >
            <p className="font-bold mb-2">¿En qué podemos ayudarte?</p>
            <ul>
              <li className="mb-2">
                <a
                  href={getWhatsAppLink(
                    "Hola, quiero información sobre sus servicios de maquillaje."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  💄 Información sobre servicios
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={getWhatsAppLink(
                    "Quisiera conocer sus promociones actuales."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🎉 realizan asesoria para ver que maquillaje usar
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={getWhatsAppLink(
                    "Me gustaría reservar una cita para maquillaje profesional."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  📅 Reservar una cita
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={getWhatsAppLink(
                    "¿Cuáles son sus horarios de atención?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  ⏰ Horarios de atención
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={getWhatsAppLink("¿Dónde están ubicados?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  📍 Ubicación del estudio
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
