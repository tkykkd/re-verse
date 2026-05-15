import { useEffect } from "react";

declare global {
  interface Window {
    difyChatbotConfig?: {
      token: string;
      baseUrl: string;
      systemVariables?: Record<string, string>;
      userVariables?: Record<string, string>;
    };
  }
}

const TOKEN = import.meta.env.VITE_DIFY_EMBED_TOKEN as string | undefined;
const BASE_URL = (import.meta.env.VITE_DIFY_BASE_URL as string | undefined) || "https://udify.app";

/**
 * Loads Dify embed widget once per page.
 * Set VITE_DIFY_EMBED_TOKEN in .env (see .env.example).
 */
export default function DifyChatEmbed() {
  useEffect(() => {
    if (!TOKEN?.trim()) {
      if (import.meta.env.DEV) {
        console.info("[Dify] VITE_DIFY_EMBED_TOKEN is not set — chat widget disabled.");
      }
      return;
    }

    window.difyChatbotConfig = {
      token: TOKEN,
      baseUrl: BASE_URL,
    };

    if (document.getElementById(TOKEN)) return;

    const script = document.createElement("script");
    script.src = `${BASE_URL.replace(/\/$/, "")}/embed.min.js`;
    script.id = TOKEN;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
