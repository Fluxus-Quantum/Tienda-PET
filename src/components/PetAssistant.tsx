/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MessageSquare, Send, Loader2 } from 'lucide-react';
import { getPetAdvice } from '../services/geminiService';

export default function PetAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [petType, setPetType] = useState('perro');
  const [age, setAge] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;
    
    setLoading(true);
    setResponse('');
    const advice = await getPetAdvice(petType, age, question);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-32 left-6 z-40 flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="absolute bottom-20 left-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">IA Asistente Tienda Pets</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 max-h-[500px] overflow-y-auto">
              {!response && !loading ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-500 font-medium">Pregúntale a nuestra IA experta sobre nutrición, salud o comportamiento.</p>
                  
                  <div className="flex gap-2">
                    {['perro', 'gato', 'exótico'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPetType(type)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl border-2 transition-all capitalize ${
                          petType === type ? 'border-brand-primary bg-brand-primary/10 text-brand-primary' : 'border-gray-100 text-gray-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <input 
                    type="text" 
                    placeholder="Edad de tu mascota"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-1 focus:ring-brand-primary"
                  />

                  <textarea 
                    placeholder="¿Cuál es tu duda? (Ej: Mi perro no quiere comer)"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                    className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-1 focus:ring-brand-primary resize-none"
                  />

                  <button 
                    disabled={!question}
                    className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 disabled:opacity-50 transition-all"
                  >
                    Consultar Experto
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl p-4 text-sm">
                    <p className="font-bold text-gray-400 uppercase text-[10px] mb-2">Tu duda:</p>
                    {question}
                  </div>
                  
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
                      <p className="text-xs font-bold text-gray-400 animate-pulse uppercase">Consultando bibliotecas veterinarias...</p>
                    </div>
                  ) : (
                    <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 text-sm leading-relaxed">
                       <p className="font-bold text-brand-primary uppercase text-[10px] mb-2 font-mono">Respuesta Clínica:</p>
                      {response}
                      <button 
                        onClick={() => {setResponse(''); setQuestion('')}}
                        className="mt-4 text-brand-primary font-bold text-xs flex items-center gap-1 hover:underline"
                      >
                        Hacer otra pregunta
                         <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white z-50 relative"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          {!isOpen && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3" />
            </span>
          )}
        </motion.button>
        
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block bg-white text-brand-dark px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-bold whitespace-nowrap"
          >
            ¿Dudas de salud? <span className="text-brand-primary">IA Experta</span> 🐾
          </motion.div>
        )}
      </div>
    </div>
  );
}
