"use client";
import { useState } from "react";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-12">
        <Header/>
        <br></br>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-10">
        Contact Us
      </h1>

      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 mb-8 transform transition-all duration-300 hover:scale-105">
        {submitted ? (
          <div className="flex items-center justify-center flex-col">
            <CheckCircleIcon className="h-16 w-16 text-blue-500 mb-4" />
            <p className="text-lg font-semibold text-gray-800">
              Message Sent Successfully!
            </p>
            <p className="text-gray-600 mt-2">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="text-center text-gray-600">
        <p className="flex items-center justify-center">
          <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-2" />
          Reach out at:{" "}
          <a
            href="mailto:anujtiwari720ya@gmail.com"
            className="ml-1 text-blue-500 hover:underline"
          >
            support@careersite.com
          </a>
        </p>
      </div>
    </div>
    <br></br>
    <Footer/>
    </div>
  );
}
