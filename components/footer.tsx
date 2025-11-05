'use client';
import * as React from 'react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Placeholder for newsletter subscription logic
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="/categories" className="hover:text-blue-400 transition-colors duration-300">Categories</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400 transition-colors duration-300">FAQ</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@edupathlibrary.com</p>
          <p className="text-sm">Phone:+91 8953883431</p>
          <p className="text-sm">Address: Lucknow, Uttar Pradesh, India</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-l-lg text-white bg-gray-800 border border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-2">Stay updated with our latest books and offers!</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} EduPath Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
