"use client";

import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookie-consent");
      if (!saved) setVisible(true);
    } catch {}

    const openHandler = () => setVisible(true);
    window.addEventListener('cookie-open' as any, openHandler as any);
    return () => window.removeEventListener('cookie-open' as any, openHandler as any);
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { accepted: true }}));
  };

  const decline = () => {
    try { localStorage.setItem("cookie-consent", "declined"); } catch {}
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { accepted: false }}));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100]">
      <div className="container pb-4">
        <div className="card bg-white shadow-lg border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-slate-700">
              We use cookies to analyze traffic and improve your experience. You can accept or decline analytics cookies. See our
              {' '}<a href="/privacy" className="text-brand-blue underline">Privacy Policy</a>.
            </p>
            <div className="flex gap-2">
              <button onClick={decline} className="btn btn-outline">Decline</button>
              <button onClick={accept} className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
