


import { FaCheckCircle } from 'react-icons/fa';

const data = [
  {
    title: "Step #1: Initial Selection",
    description: "Begin your journey with Eden Company by getting selected! You'll receive an official selection letter to get started on the process.",
    icon: <FaCheckCircle className="text-green-500 text-3xl mb-4" />,
  },
  {
    title: "Step #2: Issuance of Selection Letter",
    description: "Your selection letter will be issued, confirming your acceptance. This letter is your gateway to moving forward in the process.",
    icon: <FaCheckCircle className="text-yellow-500 text-3xl mb-4" />,
  },
  {
    title: "Step #3: Visa Stamp & Immigration",
    description: "Your journey to Canada becomes official with the visa stamp! You'll also undergo a medical checkup as part of the immigration process.",
    icon: <FaCheckCircle className="text-blue-500 text-3xl mb-4" />,
  },
];

export default function Features() {
  return (
    <div className="lg:max-w-5xl bg-slate-50 mx-auto p-4">
      <h2 className="text-3xl mb-4 text-center font-bold text-blue-600">
        Your Simple Journey to Canada: 3 Easy Steps
      </h2>
      <ul className="gap-8 flex flex-col w-full lg:flex-row font-serif">
        {data.map((item, index) => (
          <li
            key={index}
            className="mx-auto p-4 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 w-full lg:w-1/3"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
