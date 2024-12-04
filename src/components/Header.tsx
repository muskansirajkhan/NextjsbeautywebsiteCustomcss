import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-custom-bg text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Blush & Glow</h1>
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
        <Link href="/gallery" className="hover:text-gray-300 transition-colors duration-300">GlamourGallery</Link>
        <Link href="/cart" className="hover:text-gray-300 transition-colors duration-300">BlushCart</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact Us</Link>
      </nav>
      <div className="relative">
        <FaShoppingCart className="text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors duration-300" />
        {/* You can add a cart item count badge here */}
        {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span> */}
      </div>
    </header>
  )
}

export default Header
