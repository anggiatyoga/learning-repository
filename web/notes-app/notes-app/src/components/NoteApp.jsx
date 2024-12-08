import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getDummyNotes } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getDummyNotes(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    console.log(`title: ${title} body: ${body}`);
    const timestamp = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: timestamp,
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id == id) {
        note.archived = !note.archived;
      }
      return note;
    });

    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
