import NoteGrid from "./NoteGrid";
import { isArrayEmpty } from "../utils";

function NoteList({ notes, deleteNote, archiveNote }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div id="container-notes" className="container w-11/12 mx-auto md:w-3/4">
      <p id="label_notes_active" className="mb-5 text-3xl text-white">
        Active
      </p>
      {isArrayEmpty(activeNotes) ? (
        <p className="text-center text-gray-400">No active note</p>
      ) : (
        <NoteGrid
          notes={activeNotes}
          archiveNote={archiveNote}
          deleteNote={deleteNote}
        />
      )}

      <p id="label_notes_archive" className="mb-5 text-3xl text-white mt-7">
        Archived
      </p>
      {isArrayEmpty(archivedNotes) ? (
        <p className="text-center text-gray-400">No archive note</p>
      ) : (
        <NoteGrid
          notes={archivedNotes}
          archiveNote={archiveNote}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
}

export default NoteList;
