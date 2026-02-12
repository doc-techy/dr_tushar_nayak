import Link from "next/link";
import { LuMapPin, LuClock, LuPhone, LuExternalLink, LuInfo } from "react-icons/lu";

const locations = [
  {
    id: 1,
    name: "Sparsh Hospital, Hennur",
    address: "DivyaSree Avance, Hennur Bagalur Main Rd, Chikkanna Layout, HBR Layout, Geddalahalli, Bengaluru - 560043",
    mapLink: "https://share.google/8cdAfOpQTfDXonnGh",
    timing: "Monday to Saturday – 10 AM to 5 PM",
    phone: "080 61 222 000",
    buttonText: "Book Appointment",
    buttonLink: "https://www.sparshhospital.com/doctors/dr-tushar-nayak/",
    isExternal: true,
  },
  {
    id: 2,
    name: "Nishtha Healthcare & Diagnostic Center",
    address: "Ground Floor, Tarun Tower, 9, Kaggadasapura Main Rd, Kondappa Layout, C V Raman Nagar, Bengaluru - 560093",
    mapLink: "https://share.google/MnvUf9SOj45ZyFNrR",
    timing: "Monday to Saturday – 6 PM to 9 PM",
    phone: "+91 88106 05887",
    buttonText: "Book Appointment",
    buttonLink: "/booking/nishtha",
    isExternal: false,
  },
];

export default function BookingLocationsPage() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-transparent">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 sm:mb-4 text-white">
            Choose Your Preferred{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400">Location</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed">
            Dr. Tushar Nayak is available at these healthcare facilities in Bengaluru
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300"
            >
              {/* Location Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/30">
                  <LuMapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Hospital Name */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
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
                    <p className="text-xs sm:text-sm font-semibold text-white">Address</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white leading-relaxed">
                      {location.address}
                    </p>
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-brand-teal font-semibold hover:text-cyan-400 transition-colors mt-1"
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
                    <p className="text-xs sm:text-sm font-semibold text-white">Available At</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white">
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
                    <p className="text-xs sm:text-sm font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="text-[10px] sm:text-xs md:text-sm text-white hover:text-brand-teal transition-colors"
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

        {/* Important Information */}
        <div className="mt-8 sm:mt-12 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
              <LuInfo className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Important Information</h3>
          </div>
          <ul className="space-y-2.5 sm:space-y-3">
            <li className="flex items-start gap-2.5 sm:gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                Please arrive 15 minutes before your scheduled appointment time
              </span>
            </li>
            <li className="flex items-start gap-2.5 sm:gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                Bring a valid ID and any relevant medical reports
              </span>
            </li>
            <li className="flex items-start gap-2.5 sm:gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                Cancellations must be made at least 24 hours in advance
              </span>
            </li>
            <li className="flex items-start gap-2.5 sm:gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                Emergency cases will be given priority
              </span>
            </li>
          </ul>
        </div>

        {/* Help Text */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            Need help choosing? Call us at{" "}
            <a href="tel:+918810605887" className="text-brand-teal font-semibold hover:text-cyan-400">
              +91 88106 05887
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
