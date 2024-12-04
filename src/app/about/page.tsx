import React from 'react'

const About = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/image.png)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white p-4">
        <div className="about-content max-w-4xl p-6 border-4 border-white rounded-lg shadow-lg bg-black bg-opacity-50">
          {/* Border Box with Heading and Paragraph */}
          <h2 className="fade-in text-4xl md:text-6xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Welcome to Beauty Glow, where beauty meets brilliance. Founded with a passion for bringing out the natural glow in everyone, we offer high-quality, cruelty-free skincare and beauty products that help you look and feel your best. Our mission is simple: to empower individuals to embrace their natural beauty with confidence. 
            At Beauty Glow, we carefully select each product to ensure it nourishes your skin and enhances your radiance. Whether you&apos;re looking for skincare essentials, luxurious makeup, or refreshing body care, we are committed to delivering only the finest products to make you feel truly beautiful, inside and out. 
            Join us in our journey to celebrate beauty in all its forms!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;



