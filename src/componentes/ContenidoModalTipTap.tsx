import { useState, useEffect } from "react";
import type { Note } from "../types/note";


type Props = {
  selectedNote: Note | null;
  onUpdate: (id: string, updatedData: Partial<Note>) => Promise<void>;
};

function ContenidoModalTipTap({ selectedNote, onUpdate }: Props) {
  // Estado para guardar lo que el usuario escribe antes de darle a "Guardar"
  const [currentContent, setCurrentContent] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setCurrentContent(selectedNote.content);
    }
  }, [selectedNote]);

  if (!selectedNote) return <p>No hay datos seleccionados</p>;

  const fechaFormateada = new Date(selectedNote.date).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const handleSave = () => {
    onUpdate(selectedNote._id, { content: currentContent });
  };

  return (
    <div className="reporte-documento p-8 bg-white shadow-inner">
      {/* --- ENCABEZADO FIJO (No editable) --- */}
      <div className="reporte-header text-center mb-6">
        <h1 className="text-2xl font-bold underline">REPORTE DE NOTA</h1>
        <p className="text-sm opacity-60">Fecha de emisión: {fechaFormateada}</p>
      </div>

      <hr className="mb-6" />

      <div className="reporte-seccion mb-6 space-y-2">
        <p><strong>Autor:</strong> {selectedNote.name}</p>
        <p><strong>Asunto:</strong> {selectedNote.title}</p>
      </div>

      {/* --- CAMPO EDITABLE (Aquí el usuario escribe directamente) --- */}
      <div className="reporte-contenido border-2 border-dashed border-base-300 p-4 rounded-lg hover:border-primary transition-colors">
        <h2 className="font-bold mb-2 text-accent">Contenido:</h2>

      </div>

      {/* --- PIE DE PÁGINA FIJO --- */}
      <div className="reporte-footer mt-12 text-center">
        <div className="inline-block">
          <p>__________________________</p>
          <p className="font-semibold">Firma del Responsable</p>
          <p>{selectedNote.name}</p>
        </div>
      </div>

      {/* --- BOTÓN DE ACCIÓN --- */}
      <div className="mt-8 flex justify-center">
        <button
          className="btn btn-primary btn-wide font-bold"
          onClick={handleSave}
        >
          Guardar Cambios Actualizados
        </button>
      </div>
    </div>
  );
}

export default ContenidoModalTipTap;