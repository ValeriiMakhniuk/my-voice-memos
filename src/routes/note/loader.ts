import { LoaderFunction } from "react-router-dom";
import { getNotesFromStorage } from "../../lib/storage";

export const routeLoader: LoaderFunction = ({ params }) => {
  const { noteId } = params;
  const notes = getNotesFromStorage();
  const foundNote = notes?.find((note) => note.id === noteId);

  return foundNote ?? null;
};
