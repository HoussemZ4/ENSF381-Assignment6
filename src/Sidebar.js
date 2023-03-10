import { useOutletContext, useNavigate} from "react-router-dom";


function Sidebar(){
    const [notes, setNotes, addNote, currentNoteID, setCurrentNoteID, deleteNote, getCurrentNote, updateNote] = useOutletContext();
    const navigate = useNavigate();
    function handleClick(){
        addNote();
        navigate("/edit");
    };
    
    return (
    <div className = "sidebar">
        <div className = "sidebar-header"> 
            <h2> Notes </h2>
            <button id = "add-button" onClick={()=>handleClick()}> &#43; </button>
       </div>
       <div className = "sidebar-note-snapshots">
            {notes.map((note) => {
                const dateObj = new Date(note.date);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                };
                return (
                <div className = {`sidebar-note-snapshot ${note.id===currentNoteID && "current"}`} onClick={() => setCurrentNoteID(note.id)}>
                    <strong>{note.title}</strong>
                    <p className = "sidebar-note-date"> {dateObj.toLocaleDateString('en-US', options)}</p>
                    <p> {note.body && note.body.substr(0,100) + "..."}</p>
                </div>
                );
            })}
        </div>
    </div>);
}

export default Sidebar;