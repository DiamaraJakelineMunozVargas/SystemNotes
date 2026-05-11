import { NavLink } from "react-router-dom";
import { PlusIcon, BookText } from "lucide-react";
import ModalComponente  from "./ModalComponente.tsx";
import type {Note} from "../types/note.ts";


type Props = {
  selectedNote: Note | null;
  onUpdate: (id: string, updatedData: Partial<Note>) => Promise<void>; 
};
const NavbarCompo = ({selectedNote, onUpdate}: Props) => {
  const abrirModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
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
       <button
            className="btn btn-soft btn-primary text-[1.1em]"
            onClick={abrirModal}
            disabled={!selectedNote} 
          >
            <BookText />
            Reporte
          </button>
        </div>
      </header>
     <ModalComponente selectedNote={selectedNote} onUpdate={onUpdate}/>
    </>
  );
};

export default NavbarCompo;
