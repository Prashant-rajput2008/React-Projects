import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">{frontContent}</div>
        <div className="card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
