import React from "react";

export default function PortfolioMap({ items }) {
  return (
    <div className="image-container-work">
      {items.map(function (item, index) {
        return (
          <div key={index} className="image-box-portfolio">
            <img src={item.image} alt={item.description} />
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
