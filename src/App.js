import React from "react";
import Deck from "./components/deck/deck";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing Texas</h1>
        <Deck className="all" title="Deck" path="all/" />
        <Deck title="Table" path="table/" flipped="2" />
        <Deck title="Hand" path="deck/2" flipped="2" />
      </header>
    </div>
  );
}

export default App;