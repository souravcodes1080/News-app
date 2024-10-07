import React, { useEffect, useState } from "react";
import "./mainSection.css";
import { URL } from "../../../config";
import axios from "axios";
import Card from "./Card/Card";
import loader from "../../../public/loader.gif";

function MainSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  //function to fetch news data from API
  const fetchNews = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(URL);
      if (response.data.status === "ok") {
        setNews(response.data.articles);
      } else {
        throw new Error("Failed to fetch news articles");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="title">
        <h2>Top Headlines</h2>
      </div>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="loading..." />
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p> 
        </div>
      ) : (
        <div className="card-grid">
          {news.map((n, index) => (
            <Card
              key={index}
              title={n.title}
              urlToImage={n.urlToImage}
              publishedAt={n.publishedAt}
              url={n.url}
              description={n.description}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MainSection;
