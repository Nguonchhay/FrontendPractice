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
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 mt-2">
      <h2 className="font-bold text-xl px-4">What's happen?</h2>
      <ul>
      {
        news.slice(0, articleNum).map((article, ind) => (
          <div>
            <li key={ind}>
              <a href={article.url} target="_blank">
                <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-300 transition duration-200">
                  <div className="space-y-0.5">
                    <h5>{article.title}</h5>
                    <p>{article.source.name}</p>
                  </div>
                
                  <img src={article.urlToImage} alt="" width={70} className="rounded-xl" />
                </div>
              </a>
            </li>
          </div>
        ))
      }
      </ul>
      <button onClick={() => setArticleNum(articleNum + 3)} className="w-full py-2 bg-gray-200 hover:bg-gray-300 transition duration-200">
        Load more
      </button>
    </div>
  )
}
