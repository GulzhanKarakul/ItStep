import React from 'react';
import Square from './SquareComp';

class Board extends React.Component {
    renderSquare(i){
        <Square value={i} />
    }
}

export default Board;