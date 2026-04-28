/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CATEGORIES } from '../types';

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-2">Comprar por Mascota</h2>
            <p className="text-gray-500">Todo lo que necesitas para tu peludo amigo.</p>
          </div>
          <button className="text-brand-primary font-bold hover:underline flex items-center gap-1">
            Ver todas las categorías
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl flex flex-col items-center hover:bg-brand-light cursor-pointer border border-gray-100 hover:border-brand-primary transition-all group">
            <span className="text-4xl mb-3">🦴</span>
            <span className="text-sm font-bold group-hover:text-brand-primary transition-colors">Perros</span>
          </div>
          <div className="bg-white p-6 rounded-2xl flex flex-col items-center hover:bg-brand-light cursor-pointer border border-gray-100 hover:border-brand-primary transition-all group">
            <span className="text-4xl mb-3">🧶</span>
            <span className="text-sm font-bold group-hover:text-brand-primary transition-colors">Gatos</span>
          </div>
          <div className="bg-white p-6 rounded-2xl flex flex-col items-center hover:bg-brand-light cursor-pointer border border-gray-100 hover:border-brand-primary transition-all group">
            <span className="text-4xl mb-3">💊</span>
            <span className="text-sm font-bold group-hover:text-brand-primary transition-colors">Salud</span>
          </div>
          <div className="bg-white p-6 rounded-2xl flex flex-col items-center hover:bg-brand-light cursor-pointer border border-gray-100 hover:border-brand-primary transition-all group">
            <span className="text-4xl mb-3">🐹</span>
            <span className="text-sm font-bold group-hover:text-brand-primary transition-colors">Exóticos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
