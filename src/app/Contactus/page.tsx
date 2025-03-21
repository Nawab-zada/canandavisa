import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={40} />,
    label: "Address",
    value: "toronto,canada",
  },
  {
    icon: <FaPhoneAlt size={40} />,
    label: "Phone",
    value: "+1902-706-2766",
  },
  {
    icon: <FaEnvelope size={40} />,
    label: "Email",
    value: "Sardarjagmohansinghnanda@gmail.com",
  },
];

export default function Contact() {
  return (
    <div className="lg:w-full mx-auto p-8 bg-slate-50">
      <h2 className="text-3xl mb-6 flex justify-center font-bold text-red-500">
      
      </h2>
      <ul className="flex flex-col lg:flex-row gap-20 lg:gap-[200px] justify-center">
        {contactInfo.map((info, index) => (
          <li key={index} className="flex flex-col items-center text-lg text-gray-700">
            <span className="text-red-500 mb-2">{info.icon}</span>
            <span className="font-semibold">{info.label}:</span>
            <span>{info.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}