import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Works";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (

    <>
      <Navbar />
      <Home />
      <About />
      <div className="new">
        <Service />
        <Work />
        <Review />
      </div>
      <Contact />
      <Footer />
    </>

  );
};

export default App;
