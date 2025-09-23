"use client";

import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res: Response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error occurred ❌");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Contact Me</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Let’s connect! Fill out the form or reach out on my socials.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-teal-400 transition"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg h-36 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 transition outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transform transition-shadow shadow-md hover:shadow-teal-400"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`text-center font-medium mt-2 ${
                status.includes("✅") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6 text-3xl">
            <a href="https://github.com/jadhavbhakti1512" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transform hover:scale-110 transition-shadow shadow-md p-2 rounded-full">
              <AiOutlineGithub />
            </a>
            <a href="https://linkedin.com/in/bhaktijadhav" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transform hover:scale-110 transition-shadow shadow-md p-2 rounded-full">
              <AiOutlineLinkedin />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transform hover:scale-110 transition-shadow shadow-md p-2 rounded-full">
              <AiOutlineInstagram />
            </a>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171815.3013517928!2d73.69814747413439!3d18.52487061701948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1758650042023!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
