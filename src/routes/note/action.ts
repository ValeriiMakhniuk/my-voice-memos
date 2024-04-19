import { ActionFunction, redirect } from "react-router-dom";
import { getNotesFromStorage, setNotesToStorage } from "../../lib/storage";

export const addAction: ActionFunction = async ({ request, params }) => {
  const currentNotes = getNotesFromStorage() ?? [];

  const { noteId } = params as { noteId: string };
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = (formData.get("content") as string) ?? "";
  const date = new Date().toLocaleDateString();

  const note = {
    title: title.length > 0 ? title : "Empty title",
    content,
    id: noteId,
    date,
  };

  setNotesToStorage([...currentNotes, note]);

  return redirect("/");
};

export const editAction: ActionFunction = async ({ request, params }) => {
  const currentNotes = getNotesFromStorage()!;

  const { noteId } = params as { noteId: string };
  const formData = await request.formData();
  const title = (formData.get("title") as string) ?? "";
  const content = (formData.get("content") as string) ?? "";
  const date = new Date().toLocaleDateString();

  const noteChanges = {
    title,
    content,
    date,
  };

  const notesToSave = currentNotes?.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        ...noteChanges,
      };
    } else {
      return note;
    }
  });

  setNotesToStorage(notesToSave);

  return redirect("/");
};

export const deleteAction: ActionFunction = async ({ params }) => {
  const currentNotes = getNotesFromStorage()!;

  const { noteId } = params as { noteId: string };

  const notesToSave = currentNotes.filter((note) => note.id !== noteId);

  setNotesToStorage(notesToSave);

  return redirect("/");
};
