import React, { useContext, useEffect, useState } from 'react';
import HotelContext from '../context/HotelContext';

function Review() {
  const { reviews } = useContext(HotelContext);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const displayedReviews = reviews?.length ? reviews.slice(0, 5) : [];

  const handleReviewChange = (index) => {
    setCurrentReviewIndex(index);
  };

  useEffect(() => {
    if (displayedReviews.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % displayedReviews.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, [displayedReviews.length]);

  return (
    <div className="review">
      <div className="img flex relative justify-center items-center">
        <img src="/img/Review.jpg" alt="Review Background" className="w-screen object-cover h-[55vh] md:h-full" />
        
        <div className="txt absolute text-white z-10 text-sm md:text-xl text-center max-w-3xl mx-auto">
          {displayedReviews.length > 0 ? (
            <>
              <h1 className="py-2 px-4">{displayedReviews[currentReviewIndex]?.description}</h1>
              <h2 className="pt-2 px-4">{displayedReviews[currentReviewIndex]?.name}</h2>
            </>
          ) : (
            <h1 className="py-2 px-4">No reviews available</h1>
          )}
        </div>

        {displayedReviews.length > 0 && (
          <div className="icn flex justify-center mt-4">
            {displayedReviews.map((_, index) => (
              <button key={index} className={`mx-2 text-lg md:text-3xl ${currentReviewIndex === index ? 'text-[#6dc234]' : 'text-gray-400'}`}
                onClick={() => handleReviewChange(index)} >
                <i className="fa-solid fa-minus"></i>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;