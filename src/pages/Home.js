import { useState, useEffect } from "react";

import "./home.css";

import PopUp from "../components/PopUp";

import image1 from "../images/webwork1.png";
import image2 from "../images/illustration4.png";
import image5 from "../images/webwork4.png";
import image4 from "../images/illustration1.png";
import image3 from "../images/print5.png";

import hero from "../media/hero.mp4";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);

  // Function to handle scroll and trigger pop-up
  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.5; // 50% down the page
    if (window.scrollY > scrollThreshold) {
      setShowPopUp(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-vid-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-vid"
          preload="none"
        >
          <source src={hero} type="video/mp4" />
        </video>
      </div>
      <div className="home-header">
        <h1>Lets Make the Web Prettier.</h1>
        <h2>
          Hi, I'm Jordan. I like to scale businesses with brand strategies,
          marketing and websites built for traffic.
        </h2>
      </div>

      <div className="portfolio-boxes-home">
        <div className="image-container">
          <div className="col-one">
            <div className="image-box">
              <img
                src={image1}
                alt="work of a freelance designer and webdeveloper in washington state"
              />
            </div>
            <div className="image-box">
              <img
                src={image3}
                alt="work of a freelance designer and webdeveloper in washington state"
              />
            </div>
            <div className="image-box">
              <img
                src={image4}
                alt="work of a freelance designer and webdeveloper in washington state"
              />
            </div>
          </div>
          <div className="col">
            <div className="image-box">
              <img
                src={image2}
                alt="work of a freelance designer and webdeveloper in washington state"
              />
            </div>
            <div className="image-box">
              <img
                src={image5}
                alt="work of a freelance designer and webdeveloper in washington state"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="teamwork">
        <h2>Teamwork Makes the Dream Work</h2>
        <p>
          When you bring me on your team, I don’t just check off boxes—I get
          involved. I’m all about finding creative solutions that work. Give me
          challenges. From designing a website that converts, to crafting a
          brand that speaks to your audience, I dig into the details to make
          sure everything aligns. Together, we’re not just building something
          that looks good—we’re building something that works. Let’s tackle your
          challenges and turn them into opportunities.
        </p>
      </div>

      <div className="home-services"></div>

      {/* Conditionally rendering the pop-up when the scroll threshold is met */}
      {showPopUp && <PopUp />}
    </div>
  );
}
