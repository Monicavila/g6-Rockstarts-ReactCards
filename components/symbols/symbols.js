import React from "react";
import styles from "../card/card.module.scss"

class CreateCardSymbols extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isNumber: !isNaN(props.number),
      };
    }
  
    render() {
      return (
        <div className={styles.symbols} data={`${this.props.number}\n${this.props.symbol}`}>
          {this.props.number === "A" ? ( 
            <b className={styles.icon}>{this.props.symbol}</b>
          ) : ["J", "Q", "K"].includes(this.props.number) ? (
            <div className={styles.image}></div>
          ) : this.state.isNumber ? (
            new Array(parseInt(this.props.number, 10))
              .fill(this.props.symbol)
              .map((cardSymbol, index) => <b className={styles.icon} key={index}>{cardSymbol}</b>)
          ) : null}
        </div>
      );
    }
  }

export default CreateCardSymbols