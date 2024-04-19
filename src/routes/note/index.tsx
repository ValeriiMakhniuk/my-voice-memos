import { Form, useFormAction } from "react-router-dom";

import { Editor } from "./editor";
import { Title } from "./title";
import { useLoaderData } from "react-router-dom";
import { TNote } from "../../types/notes";

interface IProps {
  note: TNote | null;
}

const NoteComponent = (props: IProps) => {
  const { note } = props;
  const delteFormAction = useFormAction("delete");
  const createFormAction = useFormAction("create");
  const editFormAction = useFormAction("edit");

  return (
    <div className="shadow-xl rounded-md p-5 bg-white w-full">
      <Form
        className="w-full h-full flex flex-col"
        id="note-form"
        method="post"
      >
        <Title name="title" value={note?.title} />
        <Editor name="content" value={note?.content} className="mt-3" />
        <div className="flex justify-between mt-3 gap-5">
          <button
            className="flex-1 m-auto text-xl bg-slate-500 rounded-md p-3 text-white disabled:bg-slate-200 disabled:text-gray-400"
            type="submit"
            formAction={note ? editFormAction : createFormAction}
          >
            Save memo
          </button>
          {note && (
            <button
              className="w-1/4 m-auto text-xl bg-red-400 rounded-md p-3 text-white disabled:bg-slate-200 disabled:text-gray-400"
              type="submit"
              formAction={delteFormAction}
            >
              Delete
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

export const Note = () => {
  const note = useLoaderData() as TNote | null;

  return <NoteComponent key={note?.id} note={note} />;
};

export { routeLoader as noteLoader } from "./loader";
export * as noteActions from "./action";
