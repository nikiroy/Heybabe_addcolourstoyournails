import React from "react";
import { service } from "../Data";
const Services = () => {


  return (
    <>
      <section className="service" id="service">

        <h1 className="heading">

          What <span>we do ?</span>
        </h1>
        <p>Whether it's basic nail art, overlays, or pedicures, we cater to all your beauty requirements using top-notch
          products and providing dedicated services.</p>
        <div className="box-container">
          {service.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />

              <h1>{item.nikita}</h1>


            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
