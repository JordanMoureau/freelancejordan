import "./mywork.css";
import { useState } from "react";

import {
  webWorkItems,
  brandingItems,
  illustrationItems,
  printMediaItems,
  allItems,
} from "../components/portfolioItems";

import webWork1 from "../images/webwork1.jpg";
import webWork2 from "../images/webwork2.jpg";
import webWork3 from "../images/webwork3.jpg";
import webWork4 from "../images/webwork4.jpg";
import webWork5 from "../images/webwork5.jpg";
import webWork6 from "../images/webwork6.jpg";

import branding1 from "../images/branding1.jpg";
import branding2 from "../images/branding2.jpg";
import branding3 from "../images/branding3.jpg";
import branding4 from "../images/branding4.jpg";
import branding5 from "../images/branding5.jpg";
import branding6 from "../images/branding6.jpg";

import illustration1 from "../images/illustration1.jpg";
import illustration2 from "../images/illustration2.jpg";
import illustration3 from "../images/illustration3.jpg";
import illustration4 from "../images/illustration4.jpg";
import illustration5 from "../images/illustration5.jpg";
import illustration6 from "../images/illustration6.jpg";

import print1 from "../images/print1.jpg";
import print2 from "../images/print2.jpg";
import print3 from "../images/print3.jpg";
import print4 from "../images/print4.jpg";
import print5 from "../images/print5.jpg";
import print6 from "../images/print6.jpg";

export default function MyWork() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="mywork">
      <h1>A Sampling of My Work</h1>
      <div className="tabs">
        {/* Render the Tabs component and pass the necessary props */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="work-body">
        <PortfolioMap activeTab={activeTab} />
      </div>
    </div>
  );
}

// Tabs Component to display tab navigation
function Tabs({ activeTab, setActiveTab }) {
  // List of portfolio sections
  const tabs = ["All", "Web Work", "Branding", "Illustration", "Print Media"];

  return (
    <div className="tabs-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
function PortfolioMap({ activeTab }) {
  function itemsToDisplay() {
    switch (activeTab) {
      case "Web Work":
        return webWorkItems;
      case "Branding":
        return brandingItems;
      case "Illustration":
        return illustrationItems;
      case "Print Media":
        return printMediaItems;
      case "All":
      default:
        return [...allItems]; // Randomize the 'All' items
    }
  }

  return (
    <div className="image-container-work">
      {itemsToDisplay().map(function (item, index) {
        return (
          <div key={index} className="image-box-portfolio">
            <img src={item.image} alt={`Portfolio ${index}`} />
            {/* Plus sign link using the link property */}
            <a href={`/portfolio/${item.link}`} className="image-link">
              +
            </a>
          </div>
        );
      })}
    </div>
  );
}

// return (
//   <div className="image-container-work">
//     {imagesToDisplay().map(function (image, index) {
//       return <img key={index} src={image} alt={`Portfolio ${index}`} />;
//     })}
//   </div>
// );
