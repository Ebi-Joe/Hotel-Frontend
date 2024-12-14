import React, { useEffect, useState } from 'react'

function Review() {
  const [name, setName] = useState('TOBI OLOBE')
  const [review, setReview] = useState("Chilling out on the bed in your hotel rooms watching television, while wearing your own pajamas, is sometimes the best part of a vacation.")
  const [reviewNumber, setReviewNumber] = useState(0)

  const reviews = [
    { name:'TOBI OLOBE', review: "Chilling out on the bed in your hotel rooms watching television, while wearing your own pajamas, is sometimes the best part of a vacation."},
    { name:'NNAMDI CHIJIOKE', review: "Every good day starts off with a cappuccino, and there's no place better to enjoy some frothy caffeine than at the Hotel"},
    { name:'MICHEAL BRIGHTON', review: "I still enjoy travelling a lot.I mean, it amazes me that I still get exited in hotel rooms just to see what kind of shampoo they've left me."},
  ]

  const handleReviewChange = (index) => {
    setReviewNumber(index);
    setName(reviews[index].name);
    setReview(reviews[index].review)
  }


  useEffect(() => {
    const intervalId = setInterval(() => handleReviewChange((reviewNumber + 1) % reviews.length), 5000);
    return () => clearInterval(intervalId);
  }, [reviewNumber, reviews]);




  return (
    <>
      <div className="review">
          <div className="img flex relative justify-center items-center">
              <img src="/img/Review.jpg" alt="" className='w-screen object-cover h-[55vh] md:h-full'/>
              <div className="txt absolute text-white z-10 text-sm md:text-xl text-center max-w-3xl mx-auto">
          
                <span>
                  <h1 className='py-4 px-4'>{review}</h1>
                  <h2 className='py-4 px-4'>{name}</h2>
                </span>

                <div className="icn">
                  <button className='mx-2 text-lg md:text-3xl text-gray-400 focus:text-white' onClick={() => handleReviewChange(0)}><i className="fa-solid fa-minus"></i></button>
                  <button className='mx-2 text-lg md:text-3xl text-gray-400 focus:text-white' onClick={() => handleReviewChange(1)}><i className="fa-solid fa-minus"></i></button>
                  <button className='mx-2 text-lg md:text-3xl text-gray-400 focus:text-white' onClick={() => handleReviewChange(2)}><i className="fa-solid fa-minus"></i></button>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Review