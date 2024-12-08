import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }
}

function NoteInput() {
  return (
    <div className="note-app__input">
      <form
        id="note_form"
        action=""
        className="flex flex-col w-11/12 gap-2 p-3 mx-auto mt-4 mb-8 border rounded-lg shadow-md md:w-3/4 lg:w-3/5"
      >
        <p class="mb-2 text-3xl text-center text-white">Write your note</p>
        <input
          type="text"
          id="title"
          placeholder="Title"
          class="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <textarea
          name="note"
          id="note"
          placeholder="Write a note"
          rows="7"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
        <input
          type="submit"
          name=""
          id=""
          class="py-1 text-white border rounded shadow hover:bg-gray-500 focus:shadow-outline focus:outline-none"
        />
      </form>
    </div>
  );
}

export default NoteInput;