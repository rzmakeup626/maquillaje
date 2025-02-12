"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"; // Importamos los iconos
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo y nombre con botón de inicio */}
        <div className="flex items-center gap-3">
          <Link href="/" className="bg-[#ffffff] p-2 rounded-full hover:scale-105 transition-transform">
            <img src="/img/Logo.png" alt="Logo" className="h-10 w-10" />
          </Link>
          <span className="text-lg font-bold tracking-wider">RZ Makeup Artist</span>
        </div>

        {/* Navegación */}
        <div className="mt-4 md:mt-0">
          <ul className="flex gap-4">
            <li>
              <Link href="/nosotros" className="hover:underline hover:text-white transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:underline hover:text-white transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline hover:text-white transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="https://www.instagram.com/rzmakeup_artist?igsh=dmtzM2F1c2VucGs4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1EVwuGEWKX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@rzmakeup_artist17?_t=ZS-8trS1GFlAwc&_r=1" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors">
            <FaTiktok />
          </a>
        </div>

        {/* Derechos reservados */}
        <div className="mt-4 md:mt-0 text-sm">
          <p>
            &copy; {currentYear} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
