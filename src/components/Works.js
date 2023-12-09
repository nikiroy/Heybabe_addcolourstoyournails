import React from "react";
import { work } from "../Data";
const Works = () => {
  return (
    <>
      <section className="work" id="work">
        <h1 className="heading">
          See<span> Our Work! </span>
        </h1>
        <p>Get a swift glimpse of the nail makeovers we've executed. You can have confidence
          in us for all your nail care needs.</p>

        <div className="box-container">
          {work.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div class="image">

                <img src={item.img} alt="" />
              </div>
            </div>


          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
