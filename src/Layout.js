import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import uuid from "react-uuid";

function Layout(props) {
    
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("localNotes")) || []);
    const [currentNoteID, setCurrentNoteID] = useState(false);

    const addNote = () => {
        const newNote = {
        id: uuid(),
        title: "Untitled",
        text: "",
        date: Date.now(),
        };

        setNotes([newNote, ...notes]);
        setCurrentNoteID(newNote.id);
    };

    const deleteNote = (id) => {
      console.log("Delete");
      const answer = window.confirm("Are you sure?");
      if (answer) {
        setNotes(notes.filter((note) => note.id !== id));
      }
    };

    const getCurrentNote = () => {
        return notes.find((note) => note.id === currentNoteID)
    };

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
          return note;
        });
    
        setNotes(updatedNotes);
      };

    return (
    <>
        <header>
            <button id="menu-button" onClick={props.toggleSidebar}> &#9776;</button>
            <div className ="title-container">
                <h1> Lotion</h1>
                <h4> Like Notion, but worse.</h4>
            </div>
        </header>
        <Outlet context={[notes, setNotes, addNote, currentNoteID, setCurrentNoteID, deleteNote, getCurrentNote, updateNote]}/>
    </>
  )
}

export default Layout;