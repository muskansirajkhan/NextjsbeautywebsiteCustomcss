// pages/glamour-gallery.js

import React from 'react';

const GlamourGallery = () => {
  const bridalLooks = [
    { id: 1, name: 'Bridal Look 1', image: '/bridal1.jpg', description: 'Traditional red bridal makeup with heavy eye makeup.' },
    { id: 2, name: 'Bridal Look 2', image: '/bridal2.jpg', description: 'Glamorous bridal look with gold and bold lips.' },
    { id: 3, name: 'Bridal Look 3', image: '/bridal3.jpg', description: 'Soft glam bridal makeup with natural tones.' },
    { id: 4, name: 'Bridal Look 4', image: '/bridal4.jpg', description: 'Soft, elegant, traditional bridal look.' },
  ];
  return (
    <div className="container">
      {/* Glamour Gallery Hero Section */}
      <section className="hero-gallery">
        <h1>Welcome to Glamour Gallery</h1>
        <p>Explore Our Stunning Bridal Looks and Fashion Trends</p>
      </section>

      {/* Bridal Looks Section */}
      <section className="bridal-looks">
        <h2>Bridal Makeup Looks</h2>
        <div className="gallery">
          {bridalLooks.map((look) => (
            <div className="look" key={look.id}>
              <img src={look.image} alt={look.name} />
              <h3>{look.name}</h3>
              <p>{look.description}</p>
            </div>
          ))}
        </div>
      </section>
        {/* Beauty Services Section (with Collage Image) */}
        <section className="beauty-services">
        <h2>Our Beauty Services</h2>
        <p>We offer a wide range of beauty treatments including facials, threading, waxing, and more. Check out the services we provide below:</p>
        {/* Collage Image for All Services */}
        <img src="/allkinds.jpg" alt="Beauty Services Collage" className="services-image" />
        <p>From facials to body treatments, we cater to all your beauty needs. Whether you're looking for a relaxing facial or professional hair styling, we’ve got you covered.</p>
      </section>
      {/* Testimonials Section */}
<section className="testimonials">
  <h2>What Our Clients Say</h2>
  <div className="testimonial">
    <p>"I had my bridal makeup done here and it was fantastic! The team was professional, and my makeup stayed perfect all day!"</p>
    <p>- Ayesha, Bride</p>
  </div>
  <div className="testimonial">
    <p>"Their facial treatments are amazing! I feel so refreshed every time I visit. Highly recommend!"</p>
    <p>- Sara, Regular Client</p>
  </div>
</section>

{/* Social Media Links Section */}
<section className="social-media">
  <h2>Follow Us</h2>
  <div className="social-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons8-instagram-48.png" alt="Instagram" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons8-facebook-48.png" alt="Facebook" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons8-youtube-48.png" alt="Youtube" />
    </a>
    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons8-tiktok-48.png" alt="TikTok" />
    </a>
  </div>
</section>

    </div>
    
  );
};

export default GlamourGallery;

