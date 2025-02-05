import React from "react";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import HomePage from "@/components/home";
import Testimonios from "@/components/testimonios"


import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b to-indigo-600 font-sans text-white">
    
     <Navbar />
      <Carousel />
      <HomePage />
    <Testimonios />

   



     <Footer /> 
  </div>
  
  );
}