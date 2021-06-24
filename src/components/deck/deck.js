import React, { useState, useEffect } from "react";
import Card from "../card/card";
import "./deck.scss"

const Deck = ({className, path, title, flipped, children}) => {
    const [cards, setCard] = useState([]);
  
    useEffect(()=> {
      (async () => {
        const cards = await (
          await fetch(`http://localhost:4001/${path}`)
        ).json();
        setCard(cards);
      })();
    }, [path]);
  
      return (
        <div className={['deck', className].filter(Boolean).join(' ')}>
          {cards.length === 0 ? (
            <div>Loading ... </div>
          ) : (
            <div>
              <h2>{title}</h2>
              <div className="deck">
                {cards.map((card, index) => {
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