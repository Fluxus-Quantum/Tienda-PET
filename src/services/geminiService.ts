/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getPetAdvice(petType: string, age: string, question: string) {
  try {
    const prompt = `Actúa como un experto veterinario y nutricionista de mascotas. El usuario tiene un ${petType} de edad ${age}. 
    Pregunta: ${question}
    Responde de forma amable, profesional y concisa (máximo 100 palabras). Menciona que siempre es bueno consultar a su veterinario de confianza.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text || "Lo siento, no pude procesar tu consulta.";
  } catch (error) {
    console.error("Error fetching pet advice:", error);
    return "Lo siento, mi olfato me falla en este momento. Por favor, intenta de nuevo más tarde o consulta con un veterinario de Tienda Pets.";
  }
}
