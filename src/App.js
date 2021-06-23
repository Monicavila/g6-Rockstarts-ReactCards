import React, { useState, useEffect } from "react";
import "./App.css";

{/*const CreateCardCorner = (props) => {
  return (
    <div className="card-corner">
      <div>{props.number}</div>
      <div>{props.symbol}</div>
    </div>
  );
};*/}

class CreateCardSymbols extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNumber: !isNaN(props.number),
    };
  }

  render() {
    return (
      <div className="symbols" data={`${this.props.number}\n${this.props.symbol}`}>
        {this.props.number === "A" ? ( 
          <b>{this.props.symbol}</b>
        ) : ["J", "Q", "K"].includes(this.props.number) ? (
          <div></div>
        ) : this.state.isNumber ? (
          new Array(parseInt(this.props.number, 10))
            .fill(this.props.symbol)
            .map((cardSymbol, index) => <b key={index}>{cardSymbol}</b>)
        ) : null}
      </div>
    );
  }
}

//class Card extends React.Component {
  const Card = ({symbol, number, flipped}) => {
    const [isFlipped, setFlip] = useState(flipped);

    return (
      <div
        className="card"
        symbol={symbol}
        number={number}
        className={["card", isFlipped ? "flipped" : ""].filter(Boolean).join(' ')}
        onClick={()=> {setFlip(!isFlipped)}}
      >
        <div className="container">
          <div className="front">
            {/*<CreateCardCorner
              symbol={symbol}
              number={number}
            />*/}
            <CreateCardSymbols
              symbol={symbol}
              number={number}
            />
            {/*<CreateCardCorner
              symbol={symbol}
              number={number}
            />*/}
          </div>
          {/*<div className="back"></div>*/}
        </div>
      </div>
    );
  }
  {/*constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const currentState = this.state.active;
    currentState
      ? this.setState({ active: !currentState })
      : currentState === false
      ? this.setState({ active: !currentState })
      : null;
  }

  render() {
    return (
      <div
        className="card"
        symbol={this.props.symbol}
        number={this.props.number}
        className={this.state.active === true ? "card" : "card flipped"}
        onClick={this.handleClick}
      >
        <div className="container">
          <div className="front">
            <CreateCardCorner
              symbol={this.props.symbol}
              number={this.props.number}
            />
            <CreateCardSymbols
              symbol={this.props.symbol}
              number={this.props.number}
            />
            <CreateCardCorner
              symbol={this.props.symbol}
              number={this.props.number}
            />
          </div>
          <div className="back"></div>
        </div>
      </div>
    );
  }
}*/}

//class Deck extends React.Component
const Deck = ({className, children, path, title, flipped}) => {
  const [cards, setCard] = useState([]);
  
  {/*constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }*/}

  {/*componentDidMount() {
    (async () => {
      const cards = await (
        await fetch(`http://localhost:4001/${this.props.path}`)
      ).json();
      this.cards = cards;
      this.setState({ cards });
      //console.log(`http://localhost:4001/${this.props.path}`, this.props.title, cards);

    })();
  }*/}

  useEffect(()=> {
    (async () => {
      const cards = await (
        await fetch(`http://localhost:4001/${path}`)
      ).json();
      setCard(cards);
    })();
  }, [path]);

  //render() {
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
                return <Card {...{symbol, number, key : index, flipped : flippedCards}} />
                    {/*symbol={symbol}
                    number={number}
                    key={index}
              flipped={flipCard}*/}
              })}
            </div>
            {children}
          </div>
        )}
      </div>
    );
  //}
}

const FlipButton = ({flipped}) => {
  const [isFlipped, setFlip] = useState(flipped);
  return(
    <button id="flip-cards" onClick={()=> {setFlip(!isFlipped)}}>Flip</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing Texas</h1>
        <Deck className="all" title="Deck" path="all/" flipped="52"/>
        <Deck title="Table" path="table/" flipped="2"/>
        <Deck title="Hand" path="deck/2" flipped="2">
          <FlipButton flipped={true}/>
        </Deck>
      </header>
    </div>
  );
}

export default App;
