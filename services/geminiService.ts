import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini client
// Note: API Key must be provided in the environment or passed securely.
const apiKey = process.env.API_KEY || ''; 
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const createMarketingChat = (): Chat | null => {
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the AI Assistant for "Datta Guro", a premier digital marketing agency. 
      Your tone is professional, innovative, and slightly witty.
      You can answer questions about our services:
      1. Copywriting (Sales pages, blogs, email funnels)
      2. Social Strategy (Instagram, LinkedIn, Twitter/X growth)
      3. SEO Optimization (On-page, Off-page, Technical audits)
      4. Workflow Automation (Zapier, AI integration, CRM setup)
      
      If a user asks to book a service, guide them to the contact form section of the website.
      Keep answers concise (under 50 words unless asked for more details).
      `,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm having trouble thinking right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be offline at the moment. Please contact us directly via the form!";
  }
};