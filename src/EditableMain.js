import { useOutletContext, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditableMain(){
    const [notes, setNotes, addNote, currentNoteID, setCurrentNoteID, deleteNote, getCurrentNote, updateNote] = useOutletContext();
    const currentNote = getCurrentNote;
    const navigate = useNavigate();

    const handleSave = () => {
        navigate("/");
        setNotes({
            ...currentNote,
            title: document.getElementById('note-title').value,
            body: document.getElementById('note-text').textContent,
            date: Date.now(),
        });
    };

    if (!notes || !notes.length) {
        return <div id = "empty-note">Select a note, or create a new one</div>;
    }
    return (
    <div className = "main">  
        <div className = "main-header">
            <input type="text" id="note-title" value={currentNote.title} placeholder="Overview"/> 
            <div className = "main-header-buttons-container">
                <button onClick = {() => handleSave()} type="button" className="main-header-buttons"> Save </button>
                <button onClick = {()=>deleteNote(currentNote)} className="main-header-buttons"> Delete </button>
            </div>
        </div>
        <div> 
            <ReactQuill
                value={currentNote.body}
                placeholder="Your note here"
            />
        </div>
    </div>);
}

export default EditableMain;