
  import { createRoot } from "react-dom/client";
  import posthog from "posthog-js";
  import { PostHogProvider } from "posthog-js/react";
  import App from "./App.tsx";
  import "./index.css";

  // Initialize PostHog
  if (typeof window !== "undefined") {
    const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
    const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
    
    if (posthogKey && posthogKey !== "your_posthog_key_here") {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        loaded: (posthog) => {
          if (import.meta.env.DEV) {
            posthog.debug(); // Enable debug mode in development
          }
        },
      });
    }
  }

  createRoot(document.getElementById("root")!).render(
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  );
  