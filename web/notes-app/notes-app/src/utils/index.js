const getDummyNotes = () => [
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
    archived: true,
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

const isArrayEmpty = (array) => Array.isArray(array) && array.length === 0;

const isStringEmpty = (value) =>
  value == null || (typeof value === "string" && value.trim().length === 0);

export { getDummyNotes, isArrayEmpty, isStringEmpty };
