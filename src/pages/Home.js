import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import "./mywork.css";

import PopUp from "../components/PopUp";

import image1 from "../images/webwork1.png";
import image4 from "../images/illustration4.png";
import image5 from "../images/webwork2.png";
import image2 from "../images/illustration1.png";
import image3 from "../images/print5.png";

import webwork1 from "../images/webwork1.png";
import webwork2 from "../images/webwork2.png";
import branding2 from "../images/branding2.png";

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

      <div className="home-services">
        <div class="service-item">
          <div class="service-icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 168.09 168.74"
            >
              <path
                class="cls-1"
                d="m168.09,84.05C168.09,37.7,130.39,0,84.05,0S0,37.7,0,84.05s34.83,81.08,78.69,83.86c1.72.54,3.5.83,5.36.83s3.64-.29,5.36-.83c43.85-2.78,78.69-39.32,78.69-83.86Zm-81.16,72.61c-.96.04-1.92.07-2.89.07s-1.93-.04-2.89-.07c-6.73-3.23-14.38-17.29-18.35-39.5h42.48c-3.96,22.21-11.61,36.27-18.35,39.5Zm-25.74-50.86c-.7-6.52-1.1-13.56-1.1-21.1,0-8.04.45-15.52,1.24-22.4h45.41c.79,6.88,1.24,14.35,1.24,22.4,0,7.54-.4,14.58-1.1,21.1h-45.69Zm-49.84-21.75c0-7.58,1.17-14.88,3.33-21.76h35.29c-.82,7.36-1.24,14.92-1.24,22.4,0,7.04.37,14.15,1.1,21.1H14.69c-2.16-6.87-3.33-14.17-3.33-21.75ZM84.05,12.01c7.17,0,16.38,14.24,21.01,38.92h-42.02c4.63-24.68,13.83-38.92,21.01-38.92Zm34.07,50.29h35.29c2.16,6.87,3.33,14.18,3.33,21.76s-1.17,14.88-3.33,21.75h-35.15c.73-6.95,1.1-14.07,1.1-21.1,0-7.48-.42-15.04-1.24-22.4Zm30.6-11.36h-32.22c-2.55-14.54-6.79-27.62-12.61-36.79,19.52,5.55,35.71,19.06,44.83,36.79ZM64.21,14.14c-5.82,9.17-10.06,22.25-12.61,36.79H19.38c9.12-17.73,25.31-31.24,44.83-36.79ZM19.38,117.16h32c2.39,14.25,6.38,27.18,11.89,36.53-19.1-5.71-34.92-19.08-43.89-36.53Zm85.45,36.53c5.5-9.35,9.5-22.28,11.89-36.53h32c-8.97,17.45-24.79,30.82-43.89,36.53Z"
              />
            </svg>
          </div>
          <h3>Web Work</h3>
          <p>
            Need a website that does more than sit there and look pretty? From
            designs to developing to user experience to SEO.
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 183.26 155.2"
            >
              <path
                class="cls-2"
                d="m91.63,131.84c-25.26,0-45.81-20.55-45.81-45.81s20.55-45.81,45.81-45.81,45.81,20.55,45.81,45.81-20.55,45.81-45.81,45.81Zm.01-78.55c-9.58,0-18.64,4.17-24.86,11.43-5.69,6.64-8.46,15.09-7.79,23.81.67,8.72,4.7,16.66,11.34,22.34,5.93,5.08,13.49,7.89,21.29,7.89,9.58,0,18.64-4.17,24.87-11.43,5.69-6.64,8.45-15.1,7.78-23.82-.67-8.72-4.69-16.66-11.33-22.34-5.93-5.09-13.5-7.89-21.3-7.89Z"
              />
              <path
                class="cls-1"
                d="m91.63,41.13c24.79,0,44.89,20.1,44.89,44.89s-20.1,44.89-44.89,44.89-44.89-20.1-44.89-44.89,20.09-44.89,44.89-44.89m0,78.56c9.48,0,18.91-3.99,25.57-11.76,12.1-14.11,10.46-35.37-3.65-47.46-6.35-5.45-14.14-8.11-21.9-8.11-9.48,0-18.91,3.99-25.56,11.76-12.1,14.11-10.48,35.37,3.65,47.46,6.35,5.44,14.14,8.11,21.9,8.11m0-80.41c-25.77,0-46.74,20.97-46.74,46.74s20.97,46.74,46.74,46.74,46.74-20.97,46.74-46.74-20.97-46.74-46.74-46.74h0Zm0,78.56c-7.58,0-14.93-2.72-20.69-7.66-6.45-5.53-10.37-13.24-11.02-21.71-.65-8.47,2.04-16.69,7.57-23.14,6.05-7.06,14.85-11.11,24.16-11.11,7.58,0,14.93,2.72,20.7,7.66,6.45,5.53,10.36,13.24,11.01,21.71s-2.04,16.69-7.56,23.14c-6.05,7.06-14.86,11.11-24.16,11.11h0Z"
              />
              <path
                class="cls-2"
                d="m18.68,154.28c-9.79,0-17.76-7.97-17.76-17.76V52.35c0-8.72,6.25-16.08,14.85-17.51l23.8-3.97,7.51-18.78C49.8,5.31,56.28.93,63.57.93h56.11c7.3,0,13.77,4.38,16.49,11.16l7.51,18.79,23.8,3.97c8.6,1.43,14.85,8.79,14.85,17.51v84.17c0,9.79-7.97,17.76-17.76,17.76H18.68ZM63.57,14c-1.92,0-3.63,1.16-4.35,2.95l-10.24,25.61-31.06,5.17c-2.27.38-3.92,2.32-3.92,4.62v84.17c0,2.58,2.1,4.68,4.69,4.68h145.89c2.58,0,4.69-2.1,4.69-4.68V52.35c0-2.3-1.65-4.24-3.92-4.62l-31.07-5.17-10.24-25.61c-.72-1.79-2.43-2.95-4.35-2.95h-56.11Z"
              />
              <path
                class="cls-1"
                d="m119.68,1.85c6.91,0,13.05,4.15,15.63,10.58l7.7,19.27,24.32,4.06c8.15,1.35,14.07,8.33,14.07,16.6v84.17c0,9.28-7.55,16.83-16.83,16.83H18.68c-9.28,0-16.83-7.55-16.83-16.83V52.35c0-8.26,5.92-15.25,14.08-16.6l24.31-4.06,7.7-19.26c2.58-6.43,8.72-10.58,15.63-10.58h56.11M18.68,142.13h145.89c3.1,0,5.61-2.51,5.61-5.61V52.35c0-2.74-1.99-5.08-4.69-5.53l-30.55-5.09-10.05-25.13c-.86-2.13-2.92-3.53-5.21-3.53h-56.11c-2.29,0-4.35,1.4-5.21,3.53l-10.05,25.13-30.55,5.09c-2.7.45-4.69,2.79-4.69,5.53v84.17c0,3.1,2.51,5.61,5.61,5.61M119.68,0h-56.11c-7.68,0-14.49,4.61-17.35,11.74l-7.31,18.3-23.28,3.89C6.57,35.43,0,43.18,0,52.35v84.17c0,10.3,8.38,18.69,18.68,18.69h145.89c10.3,0,18.68-8.38,18.68-18.69V52.35c0-9.17-6.57-16.92-15.62-18.42l-23.29-3.89-7.32-18.3c-2.86-7.13-9.67-11.74-17.35-11.74h0ZM18.68,140.28c-2.07,0-3.76-1.69-3.76-3.76V52.35c0-1.84,1.32-3.4,3.14-3.71l30.55-5.09,1.03-.17.39-.97,10.05-25.13c.58-1.43,1.95-2.37,3.49-2.37h56.11c1.54,0,2.91.93,3.49,2.37l10.05,25.12.39.97,1.03.17,30.55,5.09c1.82.3,3.14,1.86,3.14,3.71v84.17c0,2.07-1.69,3.76-3.76,3.76H18.68Z"
              />
            </svg>
          </div>
          <h3>Photography</h3>
          <p>
            From product shots to personal branding, I create high-quality
            images that tell your story and make your business shine.
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120.64 165.9"
            >
              <path
                class="cls-1"
                d="m16.59,116.88c-8.66,0-15.7-7.04-15.7-15.7v-24.46c0-8.66,7.04-15.7,15.7-15.7,3.01,0,5.91.86,8.44,2.49,2.83-4.74,7.9-7.64,13.45-7.64,6.08,0,11.67,3.56,14.24,9.08.54,1.16.59,2.46.15,3.65-.44,1.19-1.31,2.13-2.45,2.66-.63.29-1.31.44-2.01.44-1.84,0-3.53-1.08-4.31-2.74-1.02-2.18-3.22-3.58-5.62-3.58-3.42,0-6.19,2.78-6.19,6.19v27.04c0,2.77,1.86,5.23,4.53,5.97,2.53.71,4,3.34,3.3,5.86-.57,2.04-2.46,3.47-4.58,3.47-.47,0-.89-.06-1.3-.18-1.96-.55-3.78-1.47-5.4-2.75-2.98,3.71-7.5,5.9-12.25,5.9Zm0-46.36c-3.42,0-6.19,2.78-6.19,6.19v24.46c0,3.42,2.78,6.19,6.19,6.19s6.19-2.78,6.19-6.19v-24.46c0-3.42-2.78-6.19-6.19-6.19Z"
              />
              <path
                class="cls-1"
                d="m38.48,56.75c5.74,0,11.01,3.36,13.43,8.56.9,1.94.06,4.24-1.87,5.12-.53.25-1.09.36-1.64.36-1.46,0-2.85-.83-3.5-2.23-1.16-2.49-3.68-4.09-6.43-4.09-3.9,0-7.08,3.18-7.08,7.08v27.04c0,3.17,2.12,5.97,5.18,6.82,2.05.58,3.26,2.7,2.68,4.76-.48,1.7-2.03,2.82-3.72,2.82-.35,0-.7-.04-1.04-.14-2.2-.62-4.16-1.73-5.79-3.18-2.69,3.8-7.11,6.3-12.1,6.3-8.16,0-14.81-6.64-14.81-14.81v-24.47c0-8.16,6.64-14.81,14.81-14.81,3.27,0,6.3,1.08,8.74,2.88,2.46-4.76,7.43-8.03,13.15-8.03m-21.89,51.51c3.9,0,7.08-3.18,7.08-7.08v-24.47c0-3.9-3.18-7.08-7.08-7.08s-7.08,3.18-7.08,7.08v24.47c0,3.9,3.18,7.08,7.08,7.08m21.89-53.28c-5.56,0-10.67,2.76-13.73,7.31-2.49-1.42-5.27-2.16-8.16-2.16-9.15,0-16.59,7.44-16.59,16.59v24.47c0,9.15,7.44,16.59,16.59,16.59,4.74,0,9.25-2.06,12.39-5.58,1.53,1.08,3.22,1.89,5.03,2.4.46.14.97.21,1.52.21,2.52,0,4.75-1.69,5.43-4.12.84-2.99-.91-6.11-3.91-6.96-2.29-.64-3.88-2.74-3.88-5.11v-27.04c0-2.92,2.38-5.3,5.3-5.3,2.05,0,3.94,1.2,4.81,3.07.92,1.98,2.93,3.26,5.11,3.26.83,0,1.63-.18,2.38-.53,1.36-.62,2.39-1.75,2.91-3.15.52-1.42.46-2.96-.18-4.33-2.71-5.83-8.62-9.59-15.04-9.59h0Zm-21.89,51.51c-2.92,0-5.3-2.38-5.3-5.3v-24.47c0-2.92,2.38-5.3,5.3-5.3s5.3,2.38,5.3,5.3v24.47c0,2.92-2.38,5.3-5.3,5.3h0Z"
              />
              <path
                class="cls-1"
                d="m56.94,165.01c-22.07,0-41.75-14.79-47.87-35.98-.35-1.22-.21-2.5.41-3.61.61-1.11,1.62-1.91,2.84-2.27.43-.12.87-.19,1.32-.19,2.1,0,3.97,1.41,4.56,3.43,4.95,17.14,20.88,29.1,38.74,29.1,22.23,0,40.31-18.08,40.31-40.32v-2.46c.02-2.26-1.16-4.36-3.1-5.48l-31.22-18.03c-.95-.54-2.02-.83-3.09-.83-.54,0-1.08.07-1.6.21-1.61.43-2.94,1.45-3.76,2.88-.83,1.43-1.05,3.1-.62,4.7.43,1.6,1.45,2.93,2.88,3.76l21.08,12.17c2.27,1.31,3.05,4.22,1.74,6.49-.85,1.47-2.43,2.38-4.13,2.38-.83,0-1.65-.22-2.37-.64l-21.08-12.16c-7.5-4.33-10.08-13.95-5.75-21.44,2.1-3.62,5.48-6.22,9.53-7.32,1.35-.36,2.72-.54,4.1-.54,2.73,0,5.44.73,7.82,2.11l31.22,18.03c4.9,2.83,7.9,8.1,7.85,13.75v2.41c0,27.47-22.35,49.82-49.82,49.82Z"
              />
              <path
                class="cls-1"
                d="m59.86,79.78c2.57,0,5.1.67,7.38,1.99l31.23,18.03c4.61,2.67,7.46,7.64,7.4,12.97v2.42c0,26.98-21.95,48.93-48.93,48.93-21.68,0-41.01-14.54-47.01-35.33-.59-2.05.59-4.18,2.64-4.78.36-.1.72-.15,1.07-.15,1.67,0,3.22,1.1,3.71,2.79,5.06,17.51,21.34,29.74,39.6,29.74,22.73,0,41.2-18.48,41.2-41.2v-2.46c.03-2.59-1.34-4.97-3.54-6.25l-31.23-18.03c-1.09-.63-2.31-.95-3.54-.95-.61,0-1.23.08-1.83.24-1.83.49-3.36,1.66-4.3,3.3-1.96,3.39-.79,7.73,2.59,9.67l21.08,12.17c1.85,1.07,2.49,3.43,1.42,5.28-.72,1.24-2.02,1.93-3.35,1.93-.65,0-1.32-.17-1.92-.52l-21.08-12.16c-7.07-4.08-9.5-13.16-5.42-20.23,1.98-3.43,5.18-5.87,8.99-6.9,1.28-.34,2.58-.51,3.86-.51m0-1.78c-1.45,0-2.9.19-4.32.57-4.28,1.16-7.85,3.9-10.07,7.73-4.57,7.92-1.85,18.09,6.07,22.66l21.08,12.16c.86.49,1.83.75,2.81.75,2.01,0,3.88-1.08,4.89-2.82.76-1.31.96-2.83.57-4.29-.39-1.45-1.33-2.67-2.63-3.43l-21.08-12.17c-1.22-.7-2.1-1.85-2.46-3.22-.37-1.37-.18-2.8.53-4.02.7-1.23,1.85-2.1,3.22-2.47.45-.12.91-.18,1.37-.18.92,0,1.84.25,2.65.71l31.22,18.03c1.65.96,2.67,2.75,2.65,4.69v2.48c0,21.74-17.69,39.43-39.43,39.43-17.46,0-33.04-11.7-37.89-28.46-.69-2.4-2.92-4.08-5.41-4.08-.53,0-1.06.07-1.57.22-2.99.86-4.72,4-3.85,6.98,6.22,21.56,26.26,36.62,48.72,36.62,27.96,0,50.71-22.75,50.71-50.71v-2.42c.06-5.95-3.12-11.52-8.29-14.51l-31.23-18.03c-2.52-1.46-5.38-2.23-8.27-2.23h0Z"
              />
              <path
                class="cls-1"
                d="m102,94.39c-2.62,0-4.75-2.13-4.75-4.75v-9.94c0-.39.04-.73.14-1.06l12.73-59.1c.72-3.34-1.41-6.64-4.75-7.36-.45-.1-.9-.15-1.34-.15-1.17,0-2.32.34-3.31.99-1.39.89-2.34,2.28-2.69,3.9l-12.91,59.86h-.07c-.62,1.6-2.06,2.78-3.79,3-.21.03-.44.05-.64.05-2.37,0-4.4-1.77-4.71-4.12l-8.12-59.96c-.42-3.06-3.05-5.36-6.13-5.36-.28,0-.56.02-.84.06-3.38.46-5.76,3.59-5.3,6.97l4.37,32.23c.35,2.6-1.48,5-4.07,5.35-.21.03-.43.04-.64.04-2.37,0-4.4-1.77-4.71-4.12l-4.36-32.23c-.56-4.15.53-8.27,3.07-11.61,2.54-3.34,6.23-5.49,10.37-6.05.7-.09,1.41-.14,2.11-.14,7.82,0,14.5,5.84,15.55,13.59l4.48,33.11,7.04-32.66c.89-4.09,3.31-7.6,6.84-9.88,2.54-1.65,5.48-2.52,8.48-2.52,1.12,0,2.24.12,3.34.36,4.09.89,7.6,3.31,9.88,6.84,2.27,3.53,3.03,7.73,2.14,11.82l-12.64,58.66v9.43c0,2.62-2.13,4.75-4.75,4.75Z"
              />
              <path
                class="cls-1"
                d="m61.63,1.78c7.29,0,13.66,5.4,14.67,12.82l5.16,38.14,8.11-37.63c.84-3.86,3.13-7.17,6.45-9.32,2.42-1.57,5.18-2.37,7.99-2.37,1.05,0,2.11.11,3.16.34,3.86.84,7.17,3.13,9.32,6.45,2.14,3.32,2.86,7.29,2.02,11.15l-12.66,58.76v9.53c0,2.14-1.73,3.86-3.86,3.86s-3.86-1.73-3.86-3.86v-9.94c0-.27.03-.54.1-.81l12.75-59.15c.82-3.82-1.62-7.6-5.43-8.42-.51-.11-1.02-.17-1.53-.17-1.34,0-2.65.39-3.8,1.14-1.58,1.02-2.68,2.6-3.08,4.46l-12.76,59.15h-.01c-.33,1.55-1.58,2.79-3.24,3.01-.18.03-.36.04-.53.04-1.91,0-3.57-1.4-3.82-3.35l-8.12-59.97c-.48-3.54-3.53-6.13-7.01-6.13-.32,0-.64.02-.96.07-3.86.53-6.59,4.09-6.06,7.97l4.36,32.23c.28,2.12-1.2,4.07-3.31,4.35-.17.02-.35.03-.52.03-1.9,0-3.57-1.41-3.83-3.34l-4.37-32.23c-1.09-8.09,4.6-15.57,12.68-16.66.67-.09,1.34-.13,1.99-.13m0-1.78h0c-.74,0-1.49.05-2.23.15-4.38.59-8.27,2.86-10.96,6.39-2.69,3.53-3.84,7.89-3.25,12.27l4.37,32.23c.37,2.78,2.78,4.88,5.6,4.88.25,0,.51-.02.76-.05,3.08-.41,5.25-3.26,4.84-6.35l-4.37-32.23c-.39-2.9,1.64-5.57,4.54-5.97.24-.03.48-.05.72-.05,2.64,0,4.89,1.97,5.25,4.59l8.12,59.96c.37,2.78,2.77,4.89,5.59,4.89.25,0,.52-.02.78-.06,1.83-.24,3.4-1.39,4.23-3h.2l.32-1.4,12.76-59.15c.3-1.39,1.12-2.57,2.3-3.33.86-.56,1.84-.85,2.84-.85.38,0,.77.04,1.15.13,2.87.62,4.7,3.45,4.08,6.31l-12.74,59.11c-.1.38-.15.79-.15,1.24v9.94c0,3.11,2.53,5.64,5.64,5.64s5.64-2.53,5.64-5.64v-9.34l12.62-58.57c.94-4.33.13-8.76-2.26-12.49-2.41-3.73-6.12-6.29-10.44-7.23-1.16-.25-2.35-.38-3.53-.38-3.17,0-6.27.92-8.96,2.66-3.72,2.41-6.29,6.12-7.22,10.44l-5.97,27.7-3.8-28.08c-1.11-8.19-8.17-14.36-16.43-14.36h0Z"
              />
            </svg>
          </div>
          <h3>Branding</h3>
          <p>
            Building a strong brand is about more than a logo. I help you craft
            a visual identity that connects and speaks to your audience.
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 190.36 190.36"
            >
              <path
                class="cls-1"
                d="m180.71.03c-.18-.02-.36-.02-.55-.03-.05,0-.09,0-.13,0,0,0,0,0,0,0,0,0,0,0,0,0-27.41.06-54.12,7.88-77.24,22.61-23.1,14.72-41.45,35.59-53.09,60.38L.68,180.99c-1.6,3.2-.3,7.09,2.89,8.68.93.46,1.92.68,2.89.68,2.37,0,4.66-1.31,5.79-3.58l17.54-35.08c37.91-1.55,71.29-24.83,85.77-60.2,1.61-3.94,3.4-7.82,5.46-11.85,1.28-2.5.8-5.54-1.19-7.53l-5.19-5.19h10.05c2.23,0,4.3-1.15,5.49-3.04,12.2-19.49,30.78-34.62,52.34-42.62,4.72-1.6,7.86-6,7.82-10.95,0-5.47-4.27-9.94-9.65-10.3Zm-59.51,53.96h-14.45c-2.56,0-4.97.99-6.8,2.79-3.79,3.75-3.83,9.88-.05,13.7l7.51,7.51c-1.38,2.88-2.64,5.72-3.82,8.6-2.21,5.4-4.94,10.47-8.1,15.17l-7.31-7.31c-2.53-2.53-6.63-2.53-9.15,0-2.53,2.53-2.53,6.63,0,9.15l8.38,8.38c-2.02,2.18-4.14,4.24-6.36,6.18l-8.29-8.29c-2.53-2.53-6.63-2.53-9.15,0-2.53,2.53-2.53,6.63,0,9.15l6.94,6.94c-10.16,6.39-21.71,10.59-33.97,12.16l24.72-49.43s.05-.1.07-.15c10.59-22.59,27.31-41.62,48.36-55.04,17.56-11.19,37.4-17.98,57.98-19.96-18.72,9.09-34.91,23.11-46.52,40.42Z"
              />
            </svg>
          </div>
          <h3>Illustration</h3>
          <p>
            Got a big idea? Let’s bring it to life with custom illustrations
            that stand out.
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 184.25 183.28"
            >
              <path
                class="cls-1"
                d="m131.75,94.51l25.6-23.3c.2-.18.4-.38.57-.57,2.74-2.9,3.73-7.12,2.49-10.93-1.26-3.85-4.53-6.67-8.47-7.41-.26-.06-.51-.1-.76-.12l-34.4-3.81-14.26-31.56c-.14-.29-.29-.56-.44-.82-1.94-3.45-5.61-5.64-9.58-5.64s-7.66,2.18-9.58,5.64c-.18.26-.31.53-.44.8l-14.24,31.54-34.4,3.81c-.26.03-.5.07-.75.13-3.95.71-7.22,3.55-8.49,7.38-1.24,3.82-.26,8.02,2.49,10.92.17.21.37.42.57.6l13.87,12.62c4.68,4.26,8.99,8.17,11.72,10.66l-7,33.97c-.84,4.21.86,8.55,4.29,11.04,3.19,2.32,7.56,2.71,11.13,1.05.26-.12.52-.24.78-.39l30.06-17.15,30.06,17.15c.26.15.5.27.76.37,1.49.7,3.09,1.07,4.73,1.07,2.33,0,4.55-.72,6.4-2.06,3.45-2.5,5.14-6.82,4.32-11.12l-7-33.9Zm-12.92-8.04c-1.92,1.73-2.77,4.36-2.25,6.89l6.21,30.03-26.66-15.19c-2.24-1.28-5-1.28-7.24,0l-26.66,15.2c2.77-13.44,5.9-28.54,6.18-29.87.6-2.55-.22-5.27-2.21-7.07l-22.69-20.65,30.5-3.37c2.57-.3,4.79-1.92,5.86-4.27l12.63-27.96,12.65,27.96c1.08,2.37,3.29,3.99,5.86,4.27l30.5,3.37-22.69,20.65Z"
              />
              <path
                class="cls-1"
                d="m134.58,32.33c1.66,0,3.33-.63,4.6-1.9l19.33-19.33c2.54-2.54,2.54-6.65,0-9.19s-6.65-2.54-9.19,0l-19.33,19.33c-2.54,2.54-2.54,6.65,0,9.19,1.27,1.27,2.93,1.9,4.6,1.9Z"
              />
              <path
                class="cls-1"
                d="m27.17,97.57l-23.85,13.37c-3.13,1.76-4.25,5.72-2.49,8.85,1.19,2.13,3.4,3.32,5.68,3.32,1.08,0,2.17-.27,3.17-.83l23.85-13.37c3.13-1.76,4.25-5.72,2.49-8.85-1.76-3.13-5.72-4.24-8.85-2.49Z"
              />
              <path
                class="cls-1"
                d="m93.21,142.94c-3.59,0-6.5,2.91-6.5,6.5v27.34c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-27.34c0-3.59-2.91-6.5-6.5-6.5Z"
              />
              <path
                class="cls-1"
                d="m180.93,110.94l-23.85-13.37c-3.13-1.75-7.09-.64-8.85,2.49-1.75,3.13-.64,7.09,2.49,8.85l23.85,13.37c1.01.56,2.1.83,3.17.83,2.28,0,4.48-1.2,5.68-3.32,1.75-3.13.64-7.09-2.49-8.85Z"
              />
              <path
                class="cls-1"
                d="m48.58,30.43c1.27,1.27,2.93,1.9,4.6,1.9s3.33-.63,4.6-1.9c2.54-2.54,2.54-6.65,0-9.19L38.44,1.9c-2.54-2.54-6.65-2.54-9.19,0-2.54,2.54-2.54,6.65,0,9.19l19.33,19.33Z"
              />
            </svg>
          </div>
          <h3>Campaigns</h3>
          <p>
            Effective digital marketing campaigns, strategically planned and
            designed to grow your business.
          </p>
        </div>

        <div className="recent-work">
          <h2> Recent Work</h2>
          <RecentWork />
        </div>
      </div>

      <div className="my-kind">
        <h2>My Kind of Projects</h2>
        <p>
          I love working on projects that push the envelope—whether it’s
          designing a website that breaks through the noise, creating
          illustrations that bring an idea to life, or helping a brand find its
          voice through smart, effective design. <br />
          <br /> Mcy focus is on websites, branding, custom illustrations, and
          digital marketing campaigns that aren’t just about looking
          good—they’re about getting results. If you need something fresh,
          creative, and with a heaping helping of strategy, let’s chat!
        </p>
        <Link to="/workingwithme">
          <button>What it's like working with me</button>
        </Link>
      </div>

      {/* Conditionally rendering the pop-up when the scroll threshold is met
      {showPopUp && <PopUp />} */}
    </div>
  );
}

function RecentWork() {
  const recentWork = [
    {
      image: webwork1,
      link: "New Love Coffee",
    },
    {
      image: branding2,
      link: "Faolan Forest Apothecary",
    },
    {
      image: webwork2,
      link: "HeyDay Boards",
    },
  ];

  return (
    <div className="image-container-work">
      {recentWork.map(function (item, index) {
        return (
          <div key={index} className="image-box-portfolio">
            <img src={item.image} alt={`Portfolio ${index}`} />
            <a href={`/portfolio/${item.link}`} className="image-link">
              +
            </a>
          </div>
        );
      })}
    </div>
  );
}
