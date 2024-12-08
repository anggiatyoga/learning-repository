import React from "react";

function NoteItem({
  id,
  title,
  date,
  content,
  archived,
  deleteNote,
  archiveNote,
}) {
  return (
    <div className="flex flex-col p-4 text-white bg-gray-700 border rounded-lg">
      <p class="text-xl font-bold">{title}</p>
      <p class="mb-2 text-xs text-gray-400">{date} </p>
      <p class="text-sm">{content}</p>
      <div class="flex flex-row justify-end gap-1 mt-3">
        <button
          onClick={() => archiveNote(id)}
          class="w-fit px-1.5 border rounded-xl hover:bg-white hover:text-gray-700"
        >
          {archived ? "To List" : "Archive"}
        </button>
        <button
          onClick={() => deleteNote(id)}
          class="w-fit px-1.5 border border-red-400 rounded-xl text-red-400 hover:bg-red-400 hover:text-gray-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
