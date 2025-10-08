"use client";

import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
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
      setStatus("Error occurred ❌");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-white">
          Let’s Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Drop me a message, and I’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-teal-500 bg-transparent text-gray-900 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-teal-500 bg-transparent text-gray-900 dark:text-gray-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-teal-500 bg-transparent text-gray-900 dark:text-gray-100 h-28"
          ></textarea>
          <button
            type="submit"
            className="mt-4 text-white bg-teal-600 hover:bg-teal-700 transition py-2 px-6 rounded-md font-medium"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-2 text-sm text-center">
              {status.includes("✅") ? (
                <span className="text-green-500">{status}</span>
              ) : (
                <span className="text-red-500">{status}</span>
              )}
            </p>
          )}
        </form>

        
      </div>
    </section>
  );
};

export default Contact;
