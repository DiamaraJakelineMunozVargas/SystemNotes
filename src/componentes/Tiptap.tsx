import { useEditor, EditorContent, EditorContext } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { useMemo, useEffect } from 'react' 
import "../styles/styletiptap.css";

type Props = {
  content: string;
  editable: boolean; // Nueva prop
  onChange?: (html: string) => void; // Nueva prop para capturar cambios
};
const Tiptap = ({ content, editable, onChange }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit], 
    content: content, 
    editable: editable, 
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML()); // Enviamos el HTML al padre
      }
    },
  });
useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editable, editor]);
 
  useEffect(() => {
    if (editor && content) {
      
      editor.commands.setContent(content);
    }
  }, [content, editor]); 

  const providerValue = useMemo(() => ({ editor }), [editor])

  if (!editor) return null; 

  return (
    <EditorContext.Provider value={providerValue}>
   <div className="reporte-container">
      <EditorContent editor={editor} />
    </div>
     
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </EditorContext.Provider>
  )
}

export default Tiptap