import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  const date = new Date(ticket.createdAt);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <div className="ticket">
      <div>{`${month}/${day}/${year}`}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}
export default TicketItem;
