dummy_notes = [
  {
    id: "a1",
    title: "Pertama",
    date: "12 Juni 2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique suscipit officiis recusandae vel ipsum voluptatem nostrum dolorem aspernatur natus!",
    archived: false,
  },
  {
    id: "a2",
    title: "Kedua",
    date: "12 Juni 2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique suscipit officiis recusandae vel ipsum voluptatem nostrum dolorem aspernatur natus!",
    archived: false,
  },
  {
    id: "a3",
    title: "Dua Setengah",
    date: "12 Juni 2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique suscipit officiis recusandae vel ipsum voluptatem nostrum dolorem aspernatur natus!",
    archived: false,
  },
  {
    id: "a4",
    title: "Tiga",
    date: "12 Juni 2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique suscipit officiis recusandae vel ipsum voluptatem nostrum dolorem aspernatur natus!",
    archived: true,
  },
];

const container_notes = document.getElementById("container-notes");

const container_notes_archived = document.getElementById("list-note-archived");

const container_notes_active = document.getElementById("list-note-active");

const label_notes_active = document.getElementById("label_notes_active");

const label_notes_archive = document.getElementById("label_notes_archive");

const note_form = document.getElementById("note_form");

var notes = [];

document.addEventListener("DOMContentLoaded", () => {
  loadNotesList();
  note_form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNote();
  });
});

function loadNotesList() {
  container_notes_active.innerHTML = "";
  container_notes_archived.innerHTML = "";

  notes_active = [];
  notes_archived = [];

  this.notes.forEach((note) => {
    (note.archived ? notes_archived : notes_active).push(note);
  });

  const generateNoteCard = (notes, container) => {
    if (notes.length === 0) {
      container.append(generateEmptyText());
    } else {
      const noteCards = notes.map(generateCardNote);
      container.append(...noteCards);
    }
  };

  generateNoteCard(notes_active, container_notes_active);
  generateNoteCard(notes_archived, container_notes_archived);
}

function generateEmptyText(archive) {
  const text_empty_notes = document.createElement("p");
  text_empty_notes.classList.add("text-gray-400", "text-center");
  text_empty_notes.textContent = archive ? "No archive note" : "No active note";

  return text_empty_notes;
}

function generateCardNote({ id, title, date, content, archived }) {
  const container_card = document.createElement("div");
  container_card.classList.add(
    "flex",
    "flex-col",
    "p-4",
    "text-white",
    "bg-gray-700",
    "border",
    "rounded-lg"
  );

  const text_title = document.createElement("p");
  text_title.classList.add("text-xl", "font-bold");
  text_title.textContent = title;

  const text_date = document.createElement("p");
  text_date.classList.add("mb-2", "text-xs", "text-gray-400");
  text_date.textContent = date;

  const text_content = document.createElement("p");
  text_content.classList.add("text-sm");
  text_content.textContent = content;

  const container_actions = document.createElement("div");
  container_actions.classList.add("flex", "justify-end", "gap-1", "mt-3");

  const btn_archive = document.createElement("button");
  btn_archive.classList.add(
    "px-1.5",
    "border",
    "w-fit",
    "rounded-xl",
    "hover:bg-white",
    "hover:text-gray-700"
  );
  btn_archive.textContent = archived ? "To List" : "Archive";
  btn_archive.addEventListener("click", () => {
    archiveNote(id);
  });

  const btn_delete = document.createElement("button");
  btn_delete.classList.add(
    "px-1.5",
    "border",
    "border-red-400",
    "w-fit",
    "rounded-xl",
    "text-red-400",
    "hover:bg-red-400",
    "hover:text-gray-700"
  );
  btn_delete.textContent = "Delete";
  btn_delete.addEventListener("click", () => {
    deleteNote(id);
  });

  container_actions.append(btn_archive, btn_delete);

  container_card.append(text_title, text_date, text_content, container_actions);

  return container_card;
}

function deleteNote(id) {
  const note = findNoteIndex(id);

  if (note === 1) return;

  notes.splice(note, 1);
  loadNotesList();
}

function archiveNote(id) {
  const note = notes.find((note) => note.id === id);
  if (note) {
    note.archived = !note.archived;
    loadNotesList();
  }
}

function addNote() {
  const title = document.getElementById("title").value;
  const note = document.getElementById("note").value;
  const id = +new Date();
  const date = generateDateTime();
  const archived = false;

  //   alert(`dateNow: ${date}`);
  const noteObj = {
    title: title,
    content: note,
    id: id,
    date: date,
    archived: archived,
  };
  this.notes.push(noteObj);

  loadNotesList();
}

function generateDateTime() {
  const now = new Date();

  const dateOptions = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", dateOptions);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
  const formattedTime = now.toLocaleTimeString("en-US", timeOptions);

  const dateTimeString = `${formattedDate} - ${formattedTime}`;

  return dateTimeString;
}

function findNoteIndex(id) {
  for (const index in notes) {
    if (notes[index].id === id) {
      return index;
    }
  }

  return -1;
}
