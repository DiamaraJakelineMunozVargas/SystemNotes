
import { EditorRegex } from '../componentes/Editor-Regex'
import axios from "axios";

const CreateNote = () => {
  const variables = [
    {
      label: "Nombre",
      value: "{{usuarios.name}}"
    },
    {
      label: "Email",
      value: "{{usuarios.email}}"
    }
  ];


  const handleSave = async (html) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/notas",
        {
          content: html,
        }
      );

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>

      <EditorRegex variables={variables} onSave={handleSave}></EditorRegex>
    </div>
  )
}

export default CreateNote
