import React from "react";
import "./UserReviews.css";

const UserReviews = ({ reviewData }) => {
  const { name, rating, review, image } = reviewData;

  return (
    <div className="review-cart">
      <div>
        <img className="user-image" src={image} alt={`${name} pic`} />
      </div>
      <div className="review-text">
        <h4>{name}</h4>
        <p>{review.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default UserReviews;
