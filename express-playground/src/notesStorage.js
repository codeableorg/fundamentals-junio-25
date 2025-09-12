import fs from "node:fs/promises";

export async function getNotes() {
  const content = await fs.readFile("./src/notes.json", "utf8");
  return JSON.parse(content);
}

export async function saveNotes(notes) {
  await fs.writeFile("./src/notes.json", JSON.stringify(notes, null, 2));
}
