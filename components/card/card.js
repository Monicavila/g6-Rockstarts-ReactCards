import React, { useState } from "react";
import CreateCardSymbols from "../symbols/symbols";
import styles from './card.module.scss';

const Card = ({symbol, number, flipped, id}) => {
  const [isFlipped, setFlip] = useState(flipped);

  return (
    <div
      className={[styles.card, (id ? styles.all : "")].filter(Boolean).join(" ")}
      symbol={symbol}
      number={number}
      className={id ? ([styles.card, styles.all, (isFlipped ? styles.flipped : "")].filter(Boolean).join(" ")) : ([styles.card, (isFlipped ? styles.flipped : "")].filter(Boolean).join(" "))}
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