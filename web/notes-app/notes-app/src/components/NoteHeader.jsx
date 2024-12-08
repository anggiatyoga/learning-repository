import React from "react";

function NoteHeader() {
  return (
    <div className="flex justify-between px-20 py-5 border-b-2">
      <h1 className="text-2xl font-bold text-white">Notes</h1>
      <input
        type="text"
        id="search_input"
        placeholder="search"
        className="px-3 leading-tight text-gray-700 border rounded shadow appearance-none w-6/6 focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default NoteHeader;
