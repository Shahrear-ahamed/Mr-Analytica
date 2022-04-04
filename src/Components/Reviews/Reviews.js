import React from "react"
import useReviews from "../../Hooks/useReviews";
import UserReviews from "../UserReviews/UserReviews";
import "./Reviews.css"

const Reviews = () => {
  const [reviews] = useReviews([]);
  return (
    <div className="reviews-page-container">
      {reviews.map((review) => (
        <UserReviews key={review.id} reviewData={review} />
      ))}
    </div>
  );
};

export default Reviews;
