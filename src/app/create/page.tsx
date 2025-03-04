"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function JobForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/SendApplication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Application sent successfully!");
      } else {
        alert("Failed to send application. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-6 text-center"
      >
        Apply Form
      </motion.h2>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-4"
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
          { name: "firstName", type: "text", placeholder: "First Name" },
          { name: "lastName", type: "text", placeholder: "Last Name" },
          { name: "email", type: "email", placeholder: "Email" },
          { name: "contactNumber", type: "tel", placeholder: "Contact Number" }
        ].map((field, index) => (
          <motion.div
            key={field.name}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
