"use client";

import { useEffect, useState } from "react";

export default function CookiePreferences() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the button only after consent exists
    try {
      const saved = localStorage.getItem("cookie-consent");
      setVisible(!!saved);
    } catch {}
    const handler = (e: Event) => {
      try {
        const saved = localStorage.getItem("cookie-consent");
        setVisible(!!saved);
      } catch {}
    };
    window.addEventListener("cookie-consent", handler as any);
    return () => window.removeEventListener("cookie-consent", handler as any);
  }, []);

  if (!visible) return null;

  const open = () => {
    try { localStorage.removeItem("cookie-consent"); } catch {}
    window.dispatchEvent(new Event("cookie-open"));
  };

  return (
    <button
      onClick={open}
      className="fixed bottom-4 left-4 z-[90] btn btn-outline text-xs"
      aria-label="Open cookie preferences"
    >
      Cookie Preferences
    </button>
  );
}
