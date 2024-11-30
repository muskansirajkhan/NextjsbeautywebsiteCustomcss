import React from 'react'

const Hero = () => {
  return (
    <section className='hero' style={{ backgroundImage: 'url(/makeup.png)' }}>
      <div> 
        <h1 className='fade-in'>Welcome to Blush & Glow</h1>
        <p>Where beauty and radiance meet to enhance your charm.</p>
        <button>Shop Now</button>
      </div>
    </section>
  )
}

export default Hero;

