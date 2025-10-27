"use client";

import { BRAND } from "@/lib/brand";
import React, { useEffect } from "react";

// TypeScript declaration for Housecall Pro widget
declare global {
  interface Window {
    HCPWidget?: { openModal: () => void };
  }
}

export default function BookingWidget() {
  const handleBooking = (serviceType: string) => {
    const url = `https://book.housecallpro.com/book/Cole-Air/c89fdc638e684fee8d0f0910abd4c96c?v2=true&service=${encodeURIComponent(serviceType)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const emergencyCall = () => {
    window.location.href = `tel:${BRAND.phoneHref}`;
  };

  useEffect(() => {
    // Only load script if not already present
    if (!document.getElementById("hcp-script")) {
      const script = document.createElement("script");
      script.id = "hcp-script";
      script.async = true;
      script.src = "https://online-booking.housecallpro.com/script.js?token=c89fdc638e684fee8d0f0910abd4c96c&orgName=Cole-Air";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="space-y-4">
      {/* Emergency Service Banner */}
      <div className="card gradient-bg text-white text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🚨</span>
          <h3 className="font-bold">Emergency Service</h3>
        </div>
        <p className="text-white/90 text-sm mb-4">
          HVAC emergency? We're available 24/7 for immediate assistance
        </p>
        <button
          onClick={emergencyCall}
          className="btn bg-white text-brand-blue hover:bg-slate-100 w-full font-semibold"
        >
          Call Now: {BRAND.phone}
        </button>
      </div>

      {/* Regular Service Booking */}
      <div className="card">
        <h3 className="font-semibold mb-4 text-center">Book Your Services Online</h3>
        <div className="grid gap-3">

          <button
            onClick={() => handleBooking("AC Repair")}
            className="btn btn-outline text-left justify-start p-3"
          >
            <span className="text-xl mr-3">❄️</span>
            <div>
              <div className="font-medium">AC Repair & Service</div>
              <div className="text-xs text-slate-500">Cooling system issues</div>
            </div>
          </button>
          <button
            onClick={() => handleBooking("Heating Repair")}
            className="btn btn-outline text-left justify-start p-3"
          >
            <span className="text-xl mr-3">🔥</span>
            <div>
              <div className="font-medium">Heating Repair & Service</div>
              <div className="text-xs text-slate-500">Furnace, heat pump issues</div>
            </div>
          </button>
          <button
            onClick={() => handleBooking("Installation")}
            className="btn btn-outline text-left justify-start p-3"
          >
            <span className="text-xl mr-3">🔧</span>
            <div>
              <div className="font-medium">New Installation</div>
              <div className="text-xs text-slate-500">Complete system replacement</div>
            </div>
          </button>
          <button
            onClick={() => handleBooking("Maintenance")}
            className="btn btn-outline text-left justify-start p-3"
          >
            <span className="text-xl mr-3">🛠️</span>
            <div>
              <div className="font-medium">Maintenance & Tune-up</div>
              <div className="text-xs text-slate-500">Preventive maintenance</div>
            </div>
          </button>
        </div>
        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-slate-600 text-sm mb-3">
            Need help choosing? Talk to our experts
          </p>
          <a href="/contact" className="btn btn-primary w-full">
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* Business Hours */}
      <div className="card bg-slate-50">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <span>⏰</span>
          Business Hours
        </h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Emergency Service:</span>
            <span className="font-medium text-green-600">24/7</span>
          </div>
          <div className="flex justify-between">
            <span>Regular Service:</span>
            <span className="text-slate-600">Mon-Fri 8AM-5PM</span>
          </div>
          <div className="flex justify-between">
            <span>Weekend Service:</span>
            <span className="text-slate-600">Available by appointment</span>
          </div>
        </div>
      </div>
    </div>
  );
}