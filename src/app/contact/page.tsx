import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/image-copy.png)',
          filter: 'blur(5px)', // Apply blur effect only on the background
          zIndex: -1, // Ensure the background stays behind the content
        }}
      ></div>

      {/* Content */}
      <section className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-custom-bg text-white rounded-md hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;




