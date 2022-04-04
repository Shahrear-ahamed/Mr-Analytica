import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
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
          <img src="./images/macbook-pro-m1.jpg" alt="macbook pro" />
        </div>
      </div>
    </div>
  );
};

export default Home;
