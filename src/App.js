import React from 'react';
import './App.css';

import MakeCard from "./components/cardFormat";
import cards from "./cards.json";

function App() {
  return (
    <div>
      {
        cards.map(card => (
          <MakeCard
          id={card.id} name={card.name} alt={card.alt} />
        ))
      }
    </div>

  );
}

export default App;


