import React from 'react'
import Image from 'next/image' 

const BlushCart = () => {

    const BlushCartdata = [
        {id:1,name:'Lipstick',price:1200,description:'Beauty',image:'/lipstick.jpg'},
        {id:2,name:'Mascara',price:1000,description:'Beauty',image:'/mascra2.png'},
        {id:3,name:'Foundation',price:1800,description:'Beauty',image:'/foundation2jpg.jpg'},
        {id:4,name:'BlushOn',price:1300,description:'Beauty',image:'/blushon2.png'},
        {id:5,name:'Eyeliner',price:800,description:'Beauty',image:'/eyeliner.jpg'},
        {id:6,name:'Eyeshadow',price:900,description:'Beauty',image:'/eyeshadow.jpg'},
        {id:7,name:'Watertint',price:600,description:'Beauty',image:'/watertint.jpg'},
        {id:8,name:'Concealer',price:1400,description:'Beauty',image:'/conclealer.png'},
        {id:9,name:'Compact',price:1100,description:'Beauty',image:'/facepowder.jpg'},
        {id:10,name:'Hairspray',price:550,description:'Beauty',image:'/hairspray.jpg'},
        {id:11,name:'HairExtension',price:2800,description:'Beauty',image:'/hairextension.png'},
        {id:12,name:'NailPolish',price:700,description:'Beauty',image:'/nailpolish.png'}
    ]

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {BlushCartdata.map((BlushCart) => (
          <div key={BlushCart.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image component use kiya */}
            <div className="w-full h-64 relative mb-4">
              <Image 
                src={BlushCart.image} 
                alt={BlushCart.name} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{BlushCart.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{BlushCart.description}</p>
            <div className="text-lg font-bold text-gray-800 mb-4">${BlushCart.price}</div>
            <button className="w-full py-2 bg-custom-bg text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlushCart;



