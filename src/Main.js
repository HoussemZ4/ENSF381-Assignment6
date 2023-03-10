import { useOutletContext, useNavigate } from "react-router-dom";

function Main(){
    const [notes, setNotes, addNote, currentNoteID, setCurrentNoteID, deleteNote, getCurrentNote, updateNote] = useOutletContext();
    const navigate = useNavigate();
    const currentNote = getCurrentNote;

    const handelEdit = ()=> {
        navigate("/edit");
        // setNotes({
        //     ...currentNote,
        //     title: document.getElementById('note-title').value,
        //     body: document.getElementById('note-text').textContent,
        //     date: Date.now(),
        // });

    };

    if (!notes || !notes.length) {
        return <div id = "empty-note">Select a note, or create a new one</div>;
    }

    return (
    <div className = "main">  
        <div className = "main-header">
            <input id="note-title" value={currentNote.title}/> 
            <div className = "main-header-buttons-container">
                <button onClick = {() => handelEdit()} className="main-header-buttons"> Edit </button>
                <button onClick = {() => deleteNote(currentNote.id)} className="main-header-buttons"> Delete </button>
            </div>
        </div>
        <div className = "main-note">
            <p id="note-text" textContent={currentNote.body}/>
        </div>

    </div>);
}

export default Main;