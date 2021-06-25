import React, { useState } from "react";
import CreateCardSymbols from "../symbols/symbols";
import styles from './card.module.scss';

const Card = ({ symbol, number, flipped}) => {
  const [isFlipped, setFlip] = useState(flipped);

  return (
    <div
      className={styles.card}
      symbol={symbol}
      number={number}
      className={[styles.card, (isFlipped ? styles.flipped : "")].filter(Boolean).join(" ")}
      onClick={() => {setFlip(!isFlipped)}}
    >
      <div className={styles.container}>
        <div className={styles.front}>
          <CreateCardSymbols symbol={symbol} number={number} />
        </div>
      </div>
    </div>
  );
};

export default Card;