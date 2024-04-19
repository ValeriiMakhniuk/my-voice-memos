import { NavLink } from "react-router-dom";
import { Search } from "./search";
import { TNote } from "../../types/notes";
import React, { ChangeEvent } from "react";

interface IProps {
  notes: TNote[];
}

export const SideBar = (props: IProps) => {
  const { notes } = props;
  const [search, setSearch] = React.useState("");

  const notesBySearch = notes.filter((note) =>
    note.title.toLowerCase().includes(search)
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-100 h-full w-1/5 border-r-2 border-gray-200 shrink-0 flex flex-col">
      <Search onChange={handleSearch} className="m-2.5" />
      <ul className="mt-3 divide-y-2">
        {notesBySearch?.map((note) => {
          return (
            <li key={note.id} className="p-2.5">
              <NavLink
                to={`/notes/${note.id}`}
                className={({ isActive }) => {
                  return isActive ? "font-bold" : "font-normal";
                }}
              >
                <p className="text-xl">{note.title}</p>
                <p className="text-sm">{note.date}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
