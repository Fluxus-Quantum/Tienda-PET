/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-4 product-card-shadow flex flex-col h-full group transition-all border border-gray-100"
    >
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.tag && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm">
            {product.tag}
          </div>
        )}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-brand-dark hover:text-red-500 hover:bg-white transition-all">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-xs font-semibold text-brand-secondary mb-1 uppercase tracking-wider">{product.subCategory}</span>
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3 h-3 text-brand-primary fill-brand-primary" />
          <span className="text-xs font-bold text-gray-600">{product.rating}</span>
          <span className="text-[10px] text-gray-400">({product.reviews})</span>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-50">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-[10px] text-gray-400 line-through">
                ${product.oldPrice.toLocaleString('es-CO')}
              </span>
            )}
            <span className="text-lg font-bold text-brand-dark underline decoration-brand-primary/30">
              ${product.price.toLocaleString('es-CO')}
            </span>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="bg-brand-primary hover:bg-brand-secondary text-white p-2.5 rounded-xl transition-all shadow-md"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
