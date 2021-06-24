import React, { useState } from "react";
import CreateCardSymbols from "../symbols/symbols";
import "./card.css";

//class Card extends React.Component {
const Card = ({ symbol, number, flipped, onClick }) => {
  const [isFlipped, setFlip] = useState(flipped);

  return (
    <div
      className="card"
      symbol={symbol}
      number={number}
      className={["card", isFlipped ? "flipped" : ""].filter(Boolean).join(" ")}
      onClick={() => {setFlip(!isFlipped); () => onClick(!isFlipped);
      }}
    >
      <div className="container">
        <div className="front">
          {/*<CreateCardCorner
                  symbol={symbol}
                  number={number}
                />*/}
          <CreateCardSymbols symbol={symbol} number={number} />
          {/*<CreateCardCorner
                  symbol={symbol}
                  number={number}
                />*/}
        </div>
        {/*<div className="back"></div>*/}
      </div>
    </div>
  );
};
{
  /*constructor(props) {
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
    }*/
}

export default Card;
