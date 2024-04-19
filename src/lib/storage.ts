import { TNote } from "../types/notes";

export const STORAGE_KEY = "notes";

export const getNotesFromStorage = (): TNote[] | null => {
  try {
    const rawNotes = localStorage.getItem(STORAGE_KEY);

    if (!rawNotes) {
      return null;
    }

    return JSON.parse(rawNotes) as TNote[];
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const setNotesToStorage = (notes: TNote[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error(error);
  }
};
