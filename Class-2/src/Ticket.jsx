import './Ticket.css';
import TicketNum from './TicketNum';

export default function Ticket({ ticket }) {
    return (

        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, index) => (
                <TicketNum key={index} Num={num} />
            ))}
        </div>
    );
}