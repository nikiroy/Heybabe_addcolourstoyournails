import React from "react";
import HomeImg from "../assets/images/homeimg.png";


const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="row">

          <div className="content">
            <h3>
              HEY BABE,</h3>
            <h4>ADD COLOURS TO YOUR NAILS !
            </h4>
            <p>
              "Polish your moments with elegance and grace. Welcome to our Nail Studio,where every
              touch brings beauty to life. Join us in this colorful journey of style and self-expression.
              Let your nails tell a story of sophistication and creativity. Together,
              let's nail the art of beauty!"
            </p>

            <a href="#contact" className="btn">
              Book Appointment
            </a>
          </div>
          <div className="image">
            <img src={HomeImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
