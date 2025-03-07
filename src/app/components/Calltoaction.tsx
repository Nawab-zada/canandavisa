import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-red-700 py-12 text-white text-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-red-500 to-red-200 opacity-60"></div>
      <div className="relative z-10 px-6 md:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
          Your Dream Job in Canada Starts Here!
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Secure your <span className="font-semibold">Work Visa</span> with our expert guidance. Take the first step toward a brighter future today!
        </p>

        {/* Work Visa Button */}
        <div className="flex justify-center">
          <a
            href="#workVisa"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition duration-300 shadow-lg"
          >
            Apply for Work Visa
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-6 text-lg">
          <p className="mb-2">Need help? Contact us now!</p>
          <p>
            <a
              href="https://wa.me/yourwhatsappnumber"
              className="text-white font-semibold underline hover:text-gray-200"
            >
              WhatsApp
            </a>{' '}
            |{' '}
            <a
              href="mailto:youremail@example.com"
              className="text-white font-semibold underline hover:text-gray-200"
            >
              Email Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
