import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes, addNote, deleteNote, archiveNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </div>
  );
}

export default NoteBody;
