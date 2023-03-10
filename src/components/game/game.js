import React, { useState } from "react";
import Board from "../board/board";
import "../game/game.css"
import { Button } from 'react-bootstrap';



export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
   
    const currentSquares = history[currentMove];



    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'RESTART';
        }
        return (
            <div key={move}>
            <Button variant="dark" onClick={() => jumpTo(move)}>{description}</Button>
            </div>
        );
    });


   



    return (

        <div>
            <div className="game-info">
                <ol className="uppey">{moves}</ol>
            </div>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
            </div>

        </div>
    );
}