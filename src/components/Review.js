import React from "react";
import { review } from "../Data";
// import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          What <span>our clients say's</span>
        </h1>
        <p>Explore the testimonials from our clients,
          sharing their thoughts on our craftsmanship and commitment,
          the factors that consistently bring them back for more.</p>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>

              <img src={item.img} className="user" alt="" />
              <h3>{item.nikita}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
