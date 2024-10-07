import React, { useEffect, useState } from "react";
import "./mainSection.css";
import { URL } from "../../../config";
import axios from "axios";
import Card from "./Card/Card";
import loader from "../../../public/loader.gif";
function MainSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const response = await await axios.get(URL);
    if (response.data.status === "ok") {
      setNews(response.data.articles);
      setLoading(false);
    } else {
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
          <img src={loader}  alt="loading..."/>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {news.map((n, index) => {
              return (
                <Card
                  key={index}
                  title={n.title}
                  urlToImage={n.urlToImage}
                  publishedAt={n.publishedAt}
                  url={n.url}
                  description={n.description}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default MainSection;
