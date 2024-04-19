import { Outlet, useLoaderData } from "react-router-dom";
import { SideBar } from "../../components/sidebar";
import { TNote } from "../../types/notes";

export const Root = () => {
  const notes = useLoaderData() as TNote[];
  return (
    <main className="h-screen flex">
      <SideBar notes={notes} />
      <section className="w-full h-full flex p-5">
        <Outlet />
      </section>
    </main>
  );
};

export { routeLoader as rootLoader } from "./loader";
