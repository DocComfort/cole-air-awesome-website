"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics, Hotjar, FacebookPixel } from "@/lib/analytics";

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => {
      try {
        const saved = localStorage.getItem("cookie-consent");
        setEnabled(saved === "accepted");
      } catch {
        setEnabled(false);
      }
    };
    update();
    const handler = (e: Event) => {
      // re-check consent whenever event fired
      update();
    };
    window.addEventListener("cookie-consent", handler as any);
    return () => window.removeEventListener("cookie-consent", handler as any);
  }, []);

  if (!enabled) return null;
  return (
    <>
      <GoogleAnalytics />
      <Hotjar />
      <FacebookPixel />
    </>
  );
}
