import React from 'react';
import { benefitOne } from '../components/data';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} className="news-image" />
      <div className="news-text">
        <h2 className="news-title">{news.title}</h2>
        <p className="news-description">{news.description}</p>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div>
      <NewsCard news={benefitOne} />
    </div>
  );
};
export default NewsCard;