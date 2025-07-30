import React, { useEffect, useState } from "react";
import "../styles/TextSlider.scss";

const texts = ["Web Publisher", "Frontend-developer"];

const TextRotation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-slider">
      {texts.map((text, i) => (
        <p
          key={i}
          className={`home_page_description ${
            i === index ? "visible" : "hidden"
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextRotation;
