import React from 'react';
import Image from 'next/image'; 

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
              {/* Image component use kiya */}
              <Image
                src={look.image}
                alt={look.name}
                width={500} // Adjust width as per your layout
                height={300} // Adjust height as per your layout
              />
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
        <Image
          src="/allkinds.jpg"
          alt="Beauty Services Collage"
          className="services-image"
          width={700} // Adjust width as per your layout
          height={400} // Adjust height as per your layout
        />
        <p>From facials to body treatments, we cater to all your beauty needs. Whether you&apos;re looking for a relaxing facial or professional hair styling, we&apos;ve got you covered.</p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>&quot;I had my bridal makeup done here and it was fantastic! The team was professional, and my makeup stayed perfect all day!&quot;</p>
          <p>- Ayesha, Bride</p>
        </div>
        <div className="testimonial">
          <p>&quot;Their facial treatments are amazing! I feel so refreshed every time I visit. Highly recommend!&quot;</p>
          <p>- Sara, Regular Client</p>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            {/* Image component for social media icons */}
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



