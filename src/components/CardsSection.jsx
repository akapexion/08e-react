import React from 'react'

const CardsSection = () => {

    const cardsData = [
        {
            id : 1,
            title : "Card 1 Title",
            detail : "Card 1 Detail",
            banner_url : "./sports1.jpg"
        },
        {
            id : 2,
            title : "Card 2 Title",
            detail : "Card 2 Detail",
            banner_url : "./sports2.jpg"
        },
        {
            id : 3,
            title : "Card 3 Title",
            detail : "Card 3 Detail",
            banner_url : "./sports3.jpg"
        }
    ]



  return (
    <>
        <div className='cards-container grid grid-cols-3 gap-20 py-24 px-10'>
            
            {cardsData.map((c) => (
            <div className='card border border-gray-300 shadow-md' key={c.id}>
                <div className="card-banner">
                    <img src={c.banner_url} alt="" />
                </div>
                <div className="card-content p-3">
                    <p>{c.title}</p>
                    <p>{c.detail}</p>
                </div>
            </div>
            ))}

        </div>
    </>
  )
}

export default CardsSection
