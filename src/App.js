import React from 'react';
import './App.css';

import MakeCard from "./components/cardFormat";
import cards from "./cards.json";

class Game extends React.Component {
  state = {
    cardPicked: [],
    score: 0,
    strikes: 0
  }

  componentDidMount() {
    this.setState({ score: 0 })
  }

  winCheck = () => {
    if (this.state.cardPicked[0] == this.state.cardPicked[1]) {
      let newScore = (this.state.score + 1);
      this.setState({ score: newScore })
      alert("You got a point!")
    }
    else {
      let newStrikes = (this.state.strikes + 1);
      this.setState({ strikes: newStrikes })
      alert("That was incorrect.")
    }
  }

  gameCheck = () => {
    if (this.state.cardPicked.length > 1) {
      winCheck()
    }
  }

  handleClick = () => {
    alert("You picked a card:" + this.name)
    this.setState({ cardPicked: this.name })
    gameCheck();
  }

  render() {
    return (
      <div>
        <div>
          <p>Score: {this.state.score}</p>
          <p>Lives Left: {(3 - this.state.strikes)}</p>
        </div>
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
      </div>
    )
  }
}
export default Game;


