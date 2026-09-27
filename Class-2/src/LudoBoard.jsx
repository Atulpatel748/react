import { useState } from "react";

export default function LudoBoard() {

    let [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });

    let update = (color) => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                [color]: prevMoves[color] + 1
            };
        });
    };

    return (
        <div>
            <p>Game Begins!</p>

            <div className="board">

                <p>Blue moves = {moves.blue}</p>
                <button onClick={() => update("blue")} style={{ backgroundColor: "blue" }}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={() => update("yellow")} style={{ backgroundColor: "yellow" }}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button onClick={() => update("green")} style={{ backgroundColor: "green" }}> +1</button >

                <p>Red moves = {moves.red}</p>
                <button onClick={() => update("red")} style={{ backgroundColor: "red" }}> +1</button >

            </div >
        </div >
    );
}
