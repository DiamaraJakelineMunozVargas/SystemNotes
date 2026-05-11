import DraggableModal from "./DraggableModal";
import type { Note } from "../types/note.ts";

import ContenidoModalTipTap from "./ContenidoModalTipTap";

type Props = {
  selectedNote: Note | null;
  onUpdate: (id: string, updatedData: Partial<Note>) => Promise<void>;
};

const ModalComponente = ({ selectedNote,onUpdate }: Props) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <DraggableModal handle=".handle">
        <div className="modal-box  p-0" >
          <div className="handle bg-base-300 p-4 cursor-move rounded-t-2xl flex justify-between items-center">
            <h3 className="font-bold text-lg">Reporte de Nota</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>

          <div className="p-6 ">
            <ContenidoModalTipTap selectedNote={selectedNote} onUpdate={onUpdate}/>
          </div>
        </div>
      </DraggableModal>
    </dialog>
  );
};

export default ModalComponente;
