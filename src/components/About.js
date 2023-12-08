import React from "react";
import AboutImg from "../assets/images/aboutimg.png";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>Welcome to our Nail Studio,
              where creativity meets expertise.</h3>
            <div>
              <p>
                At our studio, we redefine nail care, offering a blend of artistic flair and professional precision. With a team of skilled technicians, we craft stunning nail designs tailored to your unique style. Immerse yourself in a haven of relaxation and beauty, where meticulous attention
                to hygiene and client satisfaction are our top priorities.</p>

              <p>
                "Discover a world of vibrant colors, intricate
                designs, and personalized nail solutions, all within the inviting ambiance of our Nail Studio. Experience the epitome of nail artistry with us." </p>

              <div className="business">Business Hours : 11 AM TO 8 PM
                Working all days for you.</div>




            </div>

            <a href="#contact" className="btn">
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
