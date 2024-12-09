import NoteItem from "./NoteItem";

function NoteGrid({ notes, deleteNote, archiveNote }) {
  return (
    <div
      id="list-note-active"
      className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"
    >
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.date}
          content={note.content}
          archived={note.archived}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
        />
      ))}
    </div>
  );
}

export default NoteGrid;
