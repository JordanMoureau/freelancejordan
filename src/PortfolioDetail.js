import React from "react";
import { Link } from "react-router-dom";

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
      <div className="portfolio-item-container">
        <div className="portfolio-item-column-detail">
          <img src={portfolioItem.image} alt="Portfolio Detail" />
        </div>
        <div className="portfolio-item-column-main">
          <div className="peice-description">
            <h1>{portfolioItem.link}</h1>
            <h2>{portfolioItem.themes}</h2>
            <p>{portfolioItem.description}</p>
            <p>{portfolioItem.paratwo}</p>
            <Link to="/mywork">
              <button>&larr; Back to Works</button>
            </Link>
          </div>
        </div>

        {/* Add more details about the portfolio item here */}
      </div>
      {/* <div className="detail-across">
        <img src={portfolioItem.detailone} />
        <img src={portfolioItem.detailtwo} />
        <img src={portfolioItem.detailthree} />
      </div> */}
    </div>
  );
}

export default PortfolioDetail;
