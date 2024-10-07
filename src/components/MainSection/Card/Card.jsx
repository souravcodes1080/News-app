import React from "react";
import dateFormat from "dateformat";
import "./card.css";
function Card({ title, urlToImage, publishedAt, url, description }) {
    
  return (
    <>
      <div className="card-wrapper">
        <a href={url} target="_blank">
          <img src={urlToImage} alt={title} loading="lazy" />
        </a>
        <a href={url} target="_blank" className="title">
          {title}
        </a>
        <p className="desc">{description && description.slice(0, 100)+"..."}</p>
        <p className="time">{dateFormat(publishedAt, "dS mmmm yyyy, h:MM TT")}</p>
      </div>
    </>
  );
}

export default Card;
