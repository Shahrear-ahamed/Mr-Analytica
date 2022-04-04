import React from "react";
import { FaStar } from "react-icons/fa";
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
        {[...Array(5)].map((data, i) => (
          <FaStar color={i < rating ? "#f39529" : "lightgray"} />
        ))}
        <p>{review.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default UserReviews;
