import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize the client strictly with process.env.API_KEY
try {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("API_KEY not found in environment variables. Chat features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI client:", error);
}

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  if (!aiClient) {
    return "Mi dispiace, il servizio di chat non è al momento disponibile (API Key mancante).";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct a context-aware prompt using history
    // For a simple stateless chat in this demo, we append previous context manually or rely on single-turn structure 
    // tailored by system instructions. Here we send the current message + system instruction config.
    
    const response = await aiClient.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Mi dispiace, non sono riuscito a generare una risposta.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Si è verificato un errore durante la comunicazione con l'assistente. Riprova più tardi.";
  }
};