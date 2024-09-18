import "./mywork.css";
import { useState } from "react";

import {
  webWorkItems,
  brandingItems,
  illustrationItems,
  printMediaItems,
  allItems,
} from "../components/portfolioItems";

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
        return webWorkItems.filter((item) => item.image); // Filters out undefined or missing images
      case "Branding":
        return brandingItems.filter((item) => item.image);
      case "Illustration":
        return illustrationItems.filter((item) => item.image);
      case "Print Media":
        return printMediaItems.filter((item) => item.image);
      case "All":
      default:
        return allItems.filter((item) => item.image); // Filters out undefined or missing images
    }
  }

  return (
    <div className="image-container-work">
      {itemsToDisplay().map(function (item, index) {
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
// return (
//   <div className="image-container-work">
//     {imagesToDisplay().map(function (image, index) {
//       return <img key={index} src={image} alt={`Portfolio ${index}`} />;
//     })}
//   </div>
// );
