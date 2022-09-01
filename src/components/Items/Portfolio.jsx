import React from "react";

function Portfolio({
  portfolio: { id, name, category, image, link, details },
}) {
  return (
    <a href={link} target="_blank">
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{details}</span>
        </div>
        {/* <span className="plus-icon">+</span> */}
        <div className="thumb">
          <img
            src={image}
            alt={name}
            style={{ height: 160, width: "100%", objectFit: "cover" }}
          />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
