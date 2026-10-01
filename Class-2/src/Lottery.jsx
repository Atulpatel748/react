import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
    let [ticket, setticket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setticket(genTicket(n))
    }
    return (
        <div className="Lottery">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3 className="Lottery-message">{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}