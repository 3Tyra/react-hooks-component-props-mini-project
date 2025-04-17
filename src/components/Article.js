import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  
  const renderReadingTime = (minutes) => {
    if (!minutes) return "";
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      return "🍱".repeat(bentos);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderReadingTime(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
