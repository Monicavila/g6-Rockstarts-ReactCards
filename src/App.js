import React, { useState, useEffect } from "react";
import Deck from "./components/deck/deck";
import "./App.css";

{/*const FlipButton = ({flipped}) => {
  const [isFlipped, setFlip] = useState(flipped);
  return(
    <button id="flip-cards" onClick={()=> {setFlip(!isFlipped)}}>Flip</button>
  );
}*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing Texas</h1>
        <Deck className="all" title="Deck" path="all/" />
        <Deck title="Table" path="table/" flipped="2"/>
        <Deck title="Hand" path="deck/2" flipped="2">
          {/*<FlipButton flipped={false}/>*/}
        </Deck>
      </header>
    </div>
  );
}

export default App;
