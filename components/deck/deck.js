import React, { useState, useEffect } from "react";
import Card from "../card/card";
import styles from "../../styles/Home.module.scss"

const Deck = ({className, path, title, flipped, children}) => {
  const [cards, setCard] = useState([]);
    useEffect(()=> {
      (async () => {
        const cards = await (
          await fetch(`http://localhost:3000/api/${path}`)
        ).json();
        setCard(cards);
      })();
    }, [path]);
  
      return (
        <div className={[styles.deck, className].filter(Boolean).join(' ')}>
          {cards.length === 0 ? (
            <div>Loading ... </div>
          ) : (
            <div>
              <h2>{title}</h2>
              <div className={styles.deck}>
                {cards.map((card, index) => {
                  //const { number, symbol } = card;
                  const number = card.slice(0, -1);
                  const symbol = card.slice(-1);
                  const flippedCards = parseInt(flipped, 10) > index
                  return <Card {...{symbol, number, key : index, flipped : flippedCards}}/>
                })}
              </div>
              {children}
            </div>
          )}
        </div>
      );
  }

  export default Deck