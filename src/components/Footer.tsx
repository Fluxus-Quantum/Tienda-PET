/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <span className="text-xl font-bold tracking-tight uppercase flex gap-0.5">
                <span className="text-green-500">T</span>
                <span className="text-pink-500">i</span>
                <span className="text-yellow-400">e</span>
                <span className="text-blue-500">n</span>
                <span className="text-red-500">d</span>
                <span className="text-orange-500 mr-1.5">a</span>
                <span className="text-sky-400">P</span>
                <span className="text-red-500">e</span>
                <span className="text-pink-500">t</span>
                <span className="text-green-500">s</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expertos en bienestar animal. Unimos tecnología, amor y calidad para brindarle a tu mascota una vida plena y feliz.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TK', 'YT'].map(social => (
                <div key={social} className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-400 hover:border-brand-primary hover:text-brand-primary cursor-pointer transition-colors">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Sobre Nosotros</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Ubicaciones</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Preguntas Frecuentes</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Trabaja con Nosotros</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Asesoría Veterinaria</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Grooming SPA</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Suscripción Premium</li>
              <li className="hover:text-brand-primary cursor-pointer transition-colors">Blog de Bienestar</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6">Club de Amigos</h4>
            <p className="text-sm text-gray-400 mb-4">Recibe ofertas exclusivas y consejos personalizados.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="w-full bg-gray-800 border-none rounded-xl py-3 px-4 pr-12 text-sm text-white focus:ring-1 focus:ring-brand-primary outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary text-white p-1.5 rounded-lg hover:opacity-90">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-gray-500">© 2026 Tienda Pets Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-[12px] text-gray-500">
            <span className="hover:text-white cursor-pointer">Privacidad</span>
            <span className="hover:text-white cursor-pointer">Términos</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
