import { createBrowserRouter } from "react-router-dom";
import { Root, rootLoader } from "./root";
import { Note, noteLoader, noteActions } from "./note";

import { Index } from "../components/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/notes/:noteId",
        Component: Note,
        loader: noteLoader,
      },
      {
        path: "notes/:noteId/edit",
        action: noteActions.editAction,
      },
      {
        path: "notes/:noteId/delete",
        action: noteActions.deleteAction,
      },
      {
        path: "notes/:noteId/create",
        action: noteActions.addAction,
      },
    ],
  },
]);
