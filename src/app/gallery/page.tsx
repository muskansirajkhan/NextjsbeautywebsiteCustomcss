'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const GlamourGallery = () => {
  const bridalLooks = [
    { id: 1, name: 'Bridal Look 1', image: '/bridal1.jpg', description: 'Traditional red bridal makeup with heavy eye makeup.' },
    { id: 2, name: 'Bridal Look 2', image: '/bridal2.jpg', description: 'Glamorous bridal look with gold and bold lips.' },
    { id: 3, name: 'Bridal Look 3', image: '/bridal3.jpg', description: 'Soft glam bridal makeup with natural tones.' },
    { id: 4, name: 'Bridal Look 4', image: '/bridal4.jpg', description: 'Soft, elegant, traditional bridal look.' },
  ];

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Open Modal Function
  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Close Modal Function
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Glamour Gallery Hero Section */}
      <section className="bg-pink-500 text-white text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Glamour Gallery</h1>
        <p className="mt-4 text-lg md:text-xl">Explore Our Stunning Bridal Looks and Fashion Trends</p>
      </section>

      {/* Bridal Looks Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Bridal Makeup Looks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bridalLooks.map((look) => (
            <div
              key={look.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openModal(look.image)} // Open modal on click
            >
              {/* Image with zoom effect */}
              <div className="w-full h-64 relative mb-4 overflow-hidden">
                <Image
                  src={look.image}
                  alt={look.name}
                  layout="fill"
                  objectFit="contain" // Prevent cropping, ensures full image fits within container
                  className="rounded-t-lg transition-transform duration-300 transform hover:scale-110" // Zoom effect on hover
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{look.name}</h3>
              <p className="text-sm text-gray-600">{look.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beauty Services Section (with Collage Image) */}
      <section className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Beauty Services</h2>
        <p className="text-center mb-6 text-lg">We offer a wide range of beauty treatments including facials, threading, waxing, and more. Check out the services we provide below:</p>
        <div className="w-full h-96 relative mb-6 overflow-hidden">
          {/* Image with zoom effect */}
          <Image
            src="/allkinds.jpg"
            alt="Beauty Services Collage"
            layout="fill"
            objectFit="contain" // Prevent cropping, ensures the full image fits within container
            className="rounded-lg transition-transform duration-300 transform hover:scale-110" // Zoom effect on hover
          />
        </div>
        <p className="text-center text-lg text-gray-700">
          From facials to body treatments, we cater to all your beauty needs. Whether you&apos;re looking for a relaxing facial or professional hair styling, we&apos;ve got you covered.
        </p>
      </section>

      {/* Modal for zoomed image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg max-w-lg relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={modalImage!} // Non-null assertion because modalImage is not null if modal is open
              alt="Zoomed Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-2 m-2"
            >
              X
            </button>
          </div>
        </div>
      )}

     {/* Testimonials Section */}
<section className="py-20 px-6 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">What Our Clients Say</h2>
  <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8">
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="italic text-lg text-gray-600 mb-4">"I had my bridal makeup done here and it was fantastic! The team was professional, and my makeup stayed perfect all day!"</p>
      <p className="font-semibold text-center text-gray-800">- Ayesha, Bride</p>
    </div>
    
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="italic text-lg text-gray-600 mb-4">"Their facial treatments are amazing! I feel so refreshed every time I visit. Highly recommend!"</p>
      <p className="font-semibold text-center text-gray-800">- Sara, Regular Client</p>
    </div>
  </div>
</section>


      {/* Social Media Links Section */}
      <section className="py-16 px-6 bg-pink-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons8-instagram-48.png"
              alt="Instagram"
              width={48}
              height={48}
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons8-facebook-48.png"
              alt="Facebook"
              width={48}
              height={48}
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons8-youtube-48.png"
              alt="Youtube"
              width={48}
              height={48}
            />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons8-tiktok-48.png"
              alt="TikTok"
              width={48}
              height={48}
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default GlamourGallery;





