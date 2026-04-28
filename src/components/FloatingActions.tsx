/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Social Media - Always Visible */}
      <div className="flex flex-col gap-3">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
        >
          <Facebook className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-[#F58529] via-[#D6249F] to-[#285AEB] text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="https://tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1 .01 1.73.01 3.45 0 5.18-.08 3.52-3.1 6.38-6.61 6.5s-6.61-2.9-6.61-6.42a6.54 6.54 0 0 1 5.92-6.52c.01 1.48.01 2.96.01 4.44-2.14.24-3.56 2.37-2.95 4.39.52 1.74 2.22 2.79 4.02 2.5 1.55-.2 2.65-1.53 2.66-3.08.01-3.66.01-7.32.01-10.98Z"/>
          </svg>
        </motion.a>
      </div>

      {/* Primary WhatsApp Button - Logo Only */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/573164822444" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform z-50"
      >
        <MessageCircle className="w-9 h-9 fill-current" />
      </motion.a>
    </div>
  );
}
