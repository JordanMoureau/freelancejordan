import React from "react";
import { useParams } from "react-router-dom";
import {
  webWorkItems,
  brandingItems,
  illustrationItems,
  printMediaItems,
} from "./components/portfolioItems";

import "./portfoliodetail.css";

function PortfolioDetail() {
  const { id } = useParams(); // Get the dynamic ID from the route

  // Combine all items to find the correct item by ID
  const allItems = [
    ...webWorkItems,
    ...brandingItems,
    ...illustrationItems,
    ...printMediaItems,
  ];

  // Find the specific portfolio item based on the ID from the URL
  const portfolioItem = allItems.find((item) => item.link === id);

  if (!portfolioItem) {
    return <p>Portfolio item not found</p>;
  }

  return (
    <div className="portfolio-item">
      <h1>{portfolioItem.link}</h1>
      <p>{portfolioItem.description}</p>
      <img src={portfolioItem.image} alt="Portfolio Detail" />

      {/* Add more details about the portfolio item here */}
    </div>
  );
}

export default PortfolioDetail;
