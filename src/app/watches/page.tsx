import Image from 'next/image'
import React from 'react'

Image 

const  Watches = () => {

  const watchDate = [
    { id:1, name: 'Rolex', price: 12000, description: 'Luxury watch',img: '@/pubilc/picture/Rolex-Predictions-2021-Rolex-New-models-2021-new-rolex-explorer-1-calibre-3230-41mm-polar-white-dial-3.webp'},
    { id:2, name: 'Omega', price: 8000, description: 'Luxury watch',img: '@/pubilc/picture/Rolex-Voyage-Into-the-World-of-Lead-Image-Image-8.webp '},
    { id:3, name: 'Patek Philippe', price: 7000, description: 'Luxury watch',img: '@/pubilc/picture/Untitled+design+43.png '},
    { id:4, name: 'TAG Heuer', price: 6000, description: 'Luxury watch',img: '@/pubilc/picture/images.jpg '},
    { id:5, name: 'Breitling', price: 5000, description: 'Luxury watch',img: '@/pubilc/picture/GMT-Rolex.webp '},
    { id:6, name: 'Seiko', price: 5000, description: 'Luxury watch',img : '@/pubilc/picture/download.jpg'},
  ]
  return (
    <div> 
       <div className="watches">
        {watchDate.map((watch) => (
          <div key={watch.id} className="watch-card">
         <img src={watch.img} alt={watch.name}  width={100} height={400} />
         <h3>{watch.name}</h3>
         <p>{watch.description}</p>
         <div className="price">${watch.price}</div>
         <button>Add to Card</button>
          </div>
        ))}
       </div>
    </div>
  )
}

export default  Watches