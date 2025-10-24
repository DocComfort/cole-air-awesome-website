"use client";

import { BRAND } from "@/lib/brand";

export default function BookingWidget() {
  const handleBooking = (serviceType: string) => {
    // In a real implementation, this would integrate with your booking system
    // For now, we'll create a pre-filled contact form
    const subject = encodeURIComponent(`${serviceType} Service Request`);
    const body = encodeURIComponent(`Hi Cole Air,

I would like to schedule ${serviceType.toLowerCase()} service.

Please contact me to arrange an appointment.

Thank you!`);
    
    window.location.href = `/contact?service=${encodeURIComponent(serviceType)}&subject=${subject}`;
  };

  const emergencyCall = () => {
    window.location.href = `tel:${BRAND.phoneHref}`;
  };

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
        <h3 className="font-semibold mb-4 text-center">Schedule Service</h3>
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