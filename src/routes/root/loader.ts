import { LoaderFunction } from "react-router-dom";
import { getNotesFromStorage } from "../../lib/storage";

export const routeLoader: LoaderFunction = () => {
  return getNotesFromStorage() ?? [];
};
