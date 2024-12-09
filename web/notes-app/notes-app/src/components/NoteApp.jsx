import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { isArrayEmpty, isStringEmpty } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      filteredNotes: [],
      searchNote: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, note }) {
    const timestamp = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            content: note,
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

  onSearchNoteHandler(searchText) {
    if (isStringEmpty(searchText)) {
      this.setState({ filteredNotes: [], searchNote: "" });
    } else {
      let filteredNotes = [];
      this.state.notes.map((note) => {
        if (note.title.toLowerCase().includes(searchText)) {
          filteredNotes.push(note);
        }
      });

      this.setState({
        filteredNotes: filteredNotes,
        searchNote: searchText,
      });
    }
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader searchNote={this.onSearchNoteHandler} />
        <NoteBody
          notes={
            isArrayEmpty(this.state.filteredNotes) &&
            isStringEmpty(this.state.searchNote)
              ? this.state.notes
              : this.state.filteredNotes
          }
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
          archiveNote={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
