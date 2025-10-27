"use client";

import React from "react";

export default function CheckServiceAvailabilityButton() {
  const handleBooking = () => {
    const url = "https://book.housecallpro.com/book/Cole-Air/c89fdc638e684fee8d0f0910abd4c96c?v2=true&service=Check%20Service%20Availability";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleBooking}
      className="btn btn-outline text-left justify-start p-3 w-full flex-1"
      >
        <span className="text-xl mr-3">📍</span>
        <div>
          <div className="font-medium">Check Service Availability</div>
        </div>
    </button>
  );
}
