import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={28} />,
    label: "Address",
    value: "Toronto, Canada",
    subtext: "Official Operations Support",
    link: "https://maps.google.com/?q=Toronto,Canada"
  },
  {
    icon: <FaPhoneAlt size={24} />,
    label: "Phone",
    value: "+1 (807) 697-3974",
    subtext: "Call or WhatsApp Anytime",
    link: "tel:+18076973974"
  },
];

export default function Contact() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
          Contact Our Offices
        </h2>
        <div className="bg-red-500 h-1.5 w-20 rounded-full mt-3 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target={info.label === "Address" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
          >
            {/* Icon Circle */}
            <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-red-600 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </span>
            </div>

            {/* Labels & Details */}
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
              {info.label}
            </span>
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
              {info.value}
            </h3>
            <p className="text-sm text-gray-400">
              {info.subtext}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}