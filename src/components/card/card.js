import React, { useState } from "react";
import CreateCardSymbols from "../symbols/symbols";
import "./card.scss";

const Card = ({ symbol, number, flipped}) => {
  const [isFlipped, setFlip] = useState(flipped);

  return (
    <div
      className="card"
      symbol={symbol}
      number={number}
      className={["card", isFlipped ? "flipped" : ""].filter(Boolean).join(" ")}
      onClick={() => {setFlip(!isFlipped)}}
    >
      <div className="container">
        <div className="front">
          <CreateCardSymbols symbol={symbol} number={number} />
        </div>
      </div>
    </div>
  );
};

export default Card;