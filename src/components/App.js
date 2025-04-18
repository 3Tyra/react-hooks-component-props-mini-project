import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList.jsx';

function App() {
  const blogName = "Tune In To Find Out!";
  const logoImage = "https://via.placeholder.com/215";
  const aboutText = "Personal blog by Tyra Mwai";

  const articles = [
    {
      id: 1,
      title: "Why I Love React ",
      date: "April 10, 2025",
      preview: "React lets you build awesome UIs with reusable components. Here's why it's my favorite...",
      minutes: 5,
    },
    {
      id: 2,
      title: "Debugging Like a Pro ",
      date: "April 12, 2025",
      preview: "Struggling with bugs? Here are my top debugging tricks every developer should know.",
      minutes: 12,
    },
    {
      id: 3,
      title: "My Journey at Moringa ",
      date: "April 15, 2025",
      preview: "From the first class to late-night coding sessions — here’s how Moringa changed my dev life.",
      minutes: 22,
    },
    {
      id: 4,
      title: "The CSS Struggle is Real ",
      date: "April 18, 2025",
      preview: "Positioning divs, making layouts responsive... let's talk about the ups and downs of styling.",
      minutes: 35,
    },
  ];

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About logoImage={logoImage} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
