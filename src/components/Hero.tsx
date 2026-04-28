/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-brand-light">
      {/* Decorative Circles omitted for cleaner theme */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800')" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Especialista en Nutrición
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
                Tu mascota merece <br/><span className="text-brand-primary">lo mejor del mundo.</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
                Alimentos Premium, accesorios exclusivos y asesoría veterinaria online. Entrega en 2 horas en Bogotá.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start font-bold">
                <button className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-brand-secondary transition-all w-full sm:w-auto">
                  Comprar Ahora
                </button>
                <button className="bg-white text-brand-primary px-8 py-3.5 rounded-xl font-bold border-2 border-brand-primary hover:bg-gray-50 transition-all w-full sm:w-auto">
                  Ver Suscripciones
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Envío Express</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Garantía Total</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl skew-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mascotas felices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Card UI */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 glass-morphism p-4 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recomendación Pro</p>
                    <p className="text-brand-dark font-bold">¡Plan de nutrición personalizado activado!</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
