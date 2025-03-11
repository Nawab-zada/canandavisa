'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+19027062766?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    // Reset form and hide it
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsFormVisible(false);
  };

  return (
    <div className="fixed bottom-14  mx-5 z-50">
      {/* WhatsApp Button */}
      <motion.button
        onClick={toggleForm}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
          animate={{ rotate: isFormVisible ? 180 : 0 }}
        />
      </motion.button>

      {/* Form Popup */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute bottom-10  bg-white p-4 rounded-lg shadow-xl w-80 border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Contact Us</h3>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { type: "text", placeholder: "Name", value: formData.name, onChange: (e: any) => setFormData({...formData, name: e.target.value}) },
                { type: "tel", placeholder: "Phone Number", value: formData.phone, onChange: (e: any) => setFormData({...formData, phone: e.target.value}) },
                { type: "email", placeholder: "Email", value: formData.email, onChange: (e: any) => setFormData({...formData, email: e.target.value}) }
              ].map((input, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  />
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                  rows={3}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send via WhatsApp
              </motion.button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;