/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Search, User, Menu, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">🐾</span>
            </div>
            <span className="text-2xl font-black tracking-tight uppercase flex gap-0.5">
              <span className="text-green-500">T</span>
              <span className="text-pink-500">i</span>
              <span className="text-yellow-400">e</span>
              <span className="text-blue-500">n</span>
              <span className="text-red-500">d</span>
              <span className="text-orange-500 mr-2">a</span>
              <span className="text-sky-400">P</span>
              <span className="text-red-500">e</span>
              <span className="text-pink-500">t</span>
              <span className="text-green-500">s</span>
            </span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Busca comida, juguetes o arena..."
                className="w-full bg-gray-100 border-none rounded-full py-2.5 px-10 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all text-sm outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-brand-dark hover:text-brand-primary transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expand */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-4 pt-2 pb-6 flex flex-col gap-4 border-t border-gray-100"
        >
          <div className="relative w-full mt-2">
            <input 
              type="text" 
              placeholder="¿Qué busca tu mascota?"
              className="w-full bg-gray-100 border-none rounded-full py-3 px-10 text-sm outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <div className="grid grid-cols-1">
            <button className="flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-xl border-none">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold">Deseados</span>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
