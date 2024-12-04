import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white flex justify-center items-center"
      style={{ backgroundImage: 'url(/makeup.png)' }}
    >
      <div className="text-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-left rounded-[7px] bg-gradient-to-r from-pink-500 to-yellow-400 p-4 fade-in w-full ml-0">
  Welcome to Blush & Glow
</h1>

<p className="text-lg md:text-2xl mb-8 text-left text-gray-700">
  Where beauty and radiance meet to enhance your charm.
</p>


        <button className="bg-custom-bg text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero


