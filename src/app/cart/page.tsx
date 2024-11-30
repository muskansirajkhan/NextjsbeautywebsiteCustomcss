import React from 'react'

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
    <div>
      <div className='beauties'>
        {BlushCartdata.map((BlushCart) => (
          <div key={BlushCart.id} className='BlushCart'>
            <img src={BlushCart.image} alt={BlushCart.name} />
            <h3>{BlushCart.name}</h3>
            <p>{BlushCart.description}</p>
            <div>${BlushCart.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlushCart

