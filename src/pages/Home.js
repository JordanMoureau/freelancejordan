import "./home.css";

import image1 from "../media/image1.png";
import image2 from "../media/image2.png";
import image3 from "../media/image3.png";
import image4 from "../media/image4.png";
import image5 from "../media/image5.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Lets Make the Web Prettier.</h1>
        <h2>
          Hi, I'm Jordan, a designer, illustrator and web developer out of
          Liberty Lake, Washington.
        </h2>
      </div>

      <div className="portfolio-boxes-home">
        <div className="image-container">
          <div className="col-one">
            <img
              src={image1}
              alt="work of a freelance designer and webdeveloper in washington state"
            />
            <img
              src={image3}
              alt="work of a freelance designer and webdeveloper in washington state"
            />
            <img
              src={image4}
              alt="work of a freelance designer and webdeveloper in washington state"
            />
          </div>
          <div className="col">
            <img
              src={image2}
              alt="work of a freelance designer and webdeveloper in washington state"
            />
            <img
              src={image5}
              alt="work of a freelance designer and webdeveloper in washington state"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// function HomeHashes() {
//   const hashtags = [
//     "#WebDesign",
//     "#Development",
//     "#ReactJS",
//     "#FreelanceLife",
//     "#DigitalMarketing",
//     "#SEO",
//     "#Creative",
//     "#UXDesign",
//     "#JavaScript",
//     "#Tech",
//   ];
//   return (
//     <>
//       {hashtags.map((hashtag, index) => (
//         <div className="hashes">{hashtag}</div>
//       ))}
//     </>
//   );
// }
