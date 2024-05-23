"use client";

import { useState, useEffect } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
      .then(res => res.json())
      .then(data => {
        setNews(data.articles)
      });
  }, []);

  return (
    <div>
      {
        news.slice(0, articleNum).map(article => (
          <div>
            <h2>{article.title}</h2>
          </div>
        ))
      }
    </div>
  )
}
