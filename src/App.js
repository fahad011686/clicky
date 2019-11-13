import React from 'react';
import './App.css';

import MakeCard from "./components/cardFormat";
import cards from "./cards.json";

class Game extends React.Component {
  state = {
    cardPicked: '',
    score: 0
  }

  componentDidMount() {
    this.setState({ score: 0 })

  }

  handleClick=()=>{
    alert("You picked a card:" + this.id)
    this.setState({ cardPicked: this.id })
  }

  render() {
    return (
      <div>
        {
          cards.map(card => (
            <MakeCard
              id={card.id}
              name={card.name}
              alt={card.alt}
              handleClick={this.handleClick}
            />
          ))
        }
      </div>
    )
  }
}
export default Game;


