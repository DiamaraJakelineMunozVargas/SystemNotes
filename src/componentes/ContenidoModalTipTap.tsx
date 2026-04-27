
import Tiptap from "./Tiptap";

 const JSONaHTML = (data) =>{
  return `
     <table border="1">
     <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Estudio</th>
          <th>FechaEstudio</th>
          <th>Medico</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>${data.Nombre}</td>
            <td>${data.Edad}</td>
            <td>${data.Estudio}</td>
            <td>${data.FechaEstudio}</td>
            <td>${data.Medico}</td>
        </tr>
        </tbody>
    </table>
  `
}
function ContenidoModalTipTap ({data}){
    const contenido = JSONaHTML(data)
    return (
        <div>
      <Tiptap content={contenido} />
    </div>
    )
   
 
   
}
export default ContenidoModalTipTap;