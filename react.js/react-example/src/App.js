// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import MyComponent from './components/MyComp';
import Board from './components/BoardComp'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
