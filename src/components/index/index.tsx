import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

export const Index = () => {
  const noteId = uuidv4();

  return (
    <Link
      to={`/notes/${noteId}`}
      className="p-4 bg-slate-400 rounded-lg text-neutral-50 text-lg m-auto"
    >
      Create new Memo
    </Link>
  );
};
