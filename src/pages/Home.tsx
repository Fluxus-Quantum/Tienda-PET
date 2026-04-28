/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import FloatingActions from '../components/FloatingActions';
import PetAssistant from '../components/PetAssistant';
import Footer from '../components/Footer';
import { PRODUCTS } from '../types';
import { motion } from 'motion/react';
import { Calendar, Heart, ShieldCheck, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <CategorySection />

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark">Más Vendidos</h2>
              <button className="bg-gray-100 px-6 py-2 rounded-full font-bold text-sm text-brand-dark hover:bg-brand-primary hover:text-white transition-all">
                Ver Tienda
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Value Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-dark rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                    Programa de Fidelización
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Crea el perfil <br/><span className="text-brand-primary">de tu mascota.</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                    Recibe recomendaciones basadas en IA, programa tus envíos recurrentes y accede a tele-veterinaria gratis 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform">
                      Unirme ahora
                    </button>
                    <button className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all">
                      Ver beneficios
                    </button>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="aspect-square bg-white/5 rounded-[40px] p-4 backdrop-blur-sm border border-white/10">
                     <img 
                      src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=800" 
                      alt="Bienestar mascota"
                      className="w-full h-full object-cover rounded-[32px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Lo que dicen los Padres de Mascotas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-8 rounded-3xl product-card-shadow text-left border border-gray-50 uppercase">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-primary text-brand-primary" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6">"Excelente servicio y entrega súper rápida. Taste of the Wild es el favorito de Max y aquí siempre lo encuentro al mejor precio."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-bold text-brand-dark leading-none mb-1">Camilo Rodriguez</p>
                      <p className="text-[10px] text-gray-400 font-bold">Papá de un Golden Retreiver</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingActions />
      <PetAssistant />
    </div>
  );
}
