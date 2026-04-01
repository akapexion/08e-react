import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardsSection = () => {

    const [cardsData, setCardsData] = useState([]);

   async function fetchProducts(){
    try {
     const res = await axios.get("./data/products.json");
     console.log(res.data.products);
     setCardsData(res.data.products);
    }
    catch(err){
        console.log(err);
    }
   }

   useEffect(() => {
    fetchProducts();
   }, []);



  return (
    <>
        <div className='cards-container grid md:grid-cols-3 grid-cols-1 gap-20 py-24 px-10'>
            
            {cardsData.map((c) => (
            <div className='card border border-gray-300 shadow-md' key={c.id}>
                <div className="card-banner">
                    <img src={c.images} alt="" />
                </div>
                <div className="card-content p-3">
                    <p>{c.title}</p>
                    <p>{c.description}</p>
                </div>
            </div>
            ))}

        </div>
    </>
  )
}

export default CardsSection
