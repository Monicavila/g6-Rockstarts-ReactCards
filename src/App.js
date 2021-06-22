import React from "react";
import "./App.css";

const CreateCardCorner = (props) => {
  return (
    <div className="card-corner">
      <div>{props.number}</div>
      <div>{props.symbol}</div>
    </div>
  );
};

class CreateCardSymbols extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNumber: !isNaN(props.number),
    };
  }

  render() {
    return (
      <div className="symbols">
        {this.props.number === "A" ? (
          <div className="symbol">{this.props.symbol}</div>
        ) : ["J", "Q", "K"].includes(this.props.number) ? (
          <div className="image"></div>
        ) : this.state.isNumber ? (
          new Array(parseInt(this.props.number))
            .fill(this.props.symbol)
            .map((cardSymbol, index) => <div key={index}>{cardSymbol}</div>)
        ) : null}
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
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
}

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    (async () => {
      const cards = await (
        await fetch(`http://localhost:4001/${this.props.path}`)
      ).json();
      this.cards = cards;
      this.setState({ cards });
      //console.log(`http://localhost:4001/${this.props.path}`, this.props.title, cards);

    })();
  }

  render() {
    return (
      <div>
        {this.state.cards.length === 0 ? (
          <div>Loading ... </div>
        ) : (
          <div>
            <h2>{this.props.title}</h2>
            <div className="deck">
              {this.state.cards.map((card, index) => {
                const number = card.slice(0, -1);
                const symbol = card.slice(-1);
                return <Card
                    symbol={symbol}
                    number={number}
                    key={index}
                    flipped={parseInt(this.props.flipped) > index}
                  />
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing Texas</h1>
        <Deck title="Table" path="table/" flipped="2"/>
        <Deck title="Hand" path="deck/2" flipped="2"/>
      </header>
    </div>
  );
}

export default App;
