import "./home.css";

import image1 from "../images/webwork1.png";
import image2 from "../images/illustration4.png";
import image5 from "../images/webwork4.png";
import image4 from "../images/illustration1.png";
import image3 from "../images/print5.png";

import hero from "../media/hero.mp4";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-vid-container">
        <video autoPlay muted loop className="hero-vid">
          <source src={hero} type="video/mp4" />
        </video>
      </div>
      <div className="home-header">
        <h1>Lets Make the World Prettier.</h1>
        <h2>
          Hi, I'm Jordan, a designer, illustrator and web developer out of
          Washington state. I like to scale businesses with brand strategies,
          marketing and websites designed for traffic.
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
    </div>
  );
}
