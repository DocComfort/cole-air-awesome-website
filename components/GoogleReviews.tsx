"use client";

import { BRAND } from "@/lib/brand";

export default function GoogleReviews() {
  const reviews = [
    {
      author: "Marianne W.",
      rating: 5,
      text: "Cole Air is always so prompt and efficient. We have been using them for 25+ years, and they have never let us down. The technicians are very, very skilled, honest, and polite. I highly recommend Cole Air.",
      date: "2 months ago"
    },
    {
      author: "John D.",
      rating: 5,
      text: "Outstanding service! They fixed our AC on a Sunday during a heat wave. The technician was professional, honest about pricing, and got us cool again quickly. Will definitely use them again.",
      date: "1 month ago"
    },
    {
      author: "Sarah M.",
      rating: 5,
      text: "Cole Air installed a new HVAC system in our home. The work was done professionally, on time, and within budget. The system works perfectly and our energy bills have decreased. Highly recommend!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Google Review Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-blue-600 font-bold">G</span>
          <span className="font-semibold">Google Reviews</span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">★</span>
            ))}
          </div>
          <span className="text-slate-600">4.9 out of 5 (150+ reviews)</span>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.company + ' ' + BRAND.address.street + ', ' + BRAND.address.city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline text-sm"
        >
          View All Reviews on Google
        </a>
      </div>

      {/* Review Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div key={index} className="card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                {review.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-sm">{review.author}</div>
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Leave Review CTA */}
      <div className="card bg-slate-50 text-center">
        <h3 className="font-semibold mb-2">Had a great experience?</h3>
        <p className="text-slate-600 text-sm mb-4">
          Help others find quality HVAC service by sharing your experience
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.company + ' ' + BRAND.address.street + ', ' + BRAND.address.city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Leave a Google Review
        </a>
      </div>
    </div>
  );
}