import React from "react";
import "./Home.css";
import macbookPro from "../../assets/images/macbook-pro-m1.jpg";
import useReviews from "../../Hooks/useReviews";
import UserReviews from "../UserReviews/UserReviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews([]);
  // top 3 reviews
  const threeReviews = reviews.slice(0, 3);
  const navigate = useNavigate();
  const goReviewPage = () => navigate("/review");
  return (
    <div className="main-container">
      <div className="hero-section">
        <div>
          <div className="title">
            <h2 className="title-one">MacBook Pro M1</h2>
            <h2 className="title-two">Supercharged for pros.</h2>
          </div>
          <div className="description">
            <p>
              The MacBook Pro with M1 is a laptop with an unbeatable combo of
              power and endurance, making it one of the best laptops you can buy
              right now. And I know this because I’ve been using this system for
              months to plow through my workload, and I can barely get this
              machine to stutter no matter what I throw at it.
            </p>
            <button className="btn-explore">Explore More</button>
          </div>
        </div>
        <div className="img-div">
          <img src={macbookPro} alt="macbook pro" />
        </div>
      </div>
      <div className="reviews-container">
        {threeReviews.map((review) => (
          <UserReviews key={review.id} reviewData={review} />
        ))}
      </div>
      <div className="btn-container">
        <button className="all-review-btn" onClick={goReviewPage}>
          View all reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
