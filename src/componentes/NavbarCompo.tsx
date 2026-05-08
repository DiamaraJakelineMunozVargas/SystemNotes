import { NavLink } from "react-router-dom";
import { PlusIcon, BookText } from "lucide-react";

const NavbarCompo = () => {
  return (
    <header className="navbar bg-base-300 py-8 mb-10">
      <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between">
        <NavLink className={"text-3xl font-bold"} to={"/"}>
          NoteApp
        </NavLink>
        <NavLink
          className={"btn btn-soft btn-primary font-bold text-[1.1em]"}
          to={"/createNote"}
        >
          <PlusIcon />
          Crear una nota
        </NavLink>
        <button className="btn btn-soft btn-primary text-[1.1em]">
          <BookText />
          Reporte
        </button>
      </div>
    </header>
  );
};

export default NavbarCompo;
