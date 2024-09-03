import { useSelector } from "react-redux";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);
  const date = new Date(note.createdAt);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <div
      className="note"
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#ffffff",
        color: note.isStaff ? "#ffffff" : "rgba(0,0,0,0.7)",
      }}
    >
      <h4>
        Note from
        {note.isStaff ? <span>Staff</span> : <span> {user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className="note-date">{`${month}/${day}/${year}`}</div>
    </div>
  ); 
}

export default NoteItem;
