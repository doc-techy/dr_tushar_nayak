import Link from "next/link";
import { LuMapPin, LuClock, LuPhone, LuExternalLink } from "react-icons/lu";

const locations = [
  {
    id: 1,
    name: "SPARSH Hospital",
    address: "Infantry Road, Bengaluru - 560001",
    mapLink: "https://maps.google.com/?q=SPARSH+Hospital+Infantry+Road+Bengaluru",
    timing: "Mon - Sat: 10:00 AM - 5:00 PM",
    phone: "+91 88106 05887",
    buttonText: "Book Appointment",
    buttonLink: "https://sparsh.com/book", // External link to SPARSH
    isExternal: true,
  },
  {
    id: 2,
    name: "Nishna Healthcare",
    address: "HSR Layout, Bengaluru - 560102",
    mapLink: "https://maps.google.com/?q=HSR+Layout+Bengaluru",
    timing: "Mon - Sat: 6:00 PM - 9:00 PM",
    phone: "+91 88106 05887",
    buttonText: "Book Appointment",
    buttonLink: "/booking/nishna",
    isExternal: false,
  },
];

export default function BookingLocationsPage() {
  return (
    <section className="relative min-h-screen text-gray-900 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 sm:mb-4 text-gray-900">
            Choose Your Preferred{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Location</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Dr. Tushar Nayak is available at these healthcare facilities in Bengaluru
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300"
            >
              {/* Location Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/30">
                  <LuMapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Hospital Name */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
                {location.name}
              </h2>

              {/* Details */}
              <div className="space-y-3 sm:space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <LuMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Address</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">
                      {location.address}
                    </p>
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-brand-teal font-semibold hover:text-brand-navy transition-colors mt-1"
                    >
                      <LuExternalLink className="w-3 h-3" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <LuClock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Available At</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                      {location.timing}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <LuPhone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">Phone</p>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="text-[10px] sm:text-xs md:text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-5 sm:mt-6 md:mt-8">
                {location.isExternal ? (
                  <a
                    href={location.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-teal/50"
                  >
                    <LuMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {location.buttonText}
                  </a>
                ) : (
                  <Link
                    href={location.buttonLink}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:shadow-brand-teal/50"
                  >
                    <LuMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {location.buttonText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Need help choosing? Call us at{" "}
            <a href="tel:+918810605887" className="text-brand-teal font-semibold hover:text-brand-navy">
              +91 88106 05887
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
