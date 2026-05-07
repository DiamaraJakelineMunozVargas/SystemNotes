
import Tiptap from "./Tiptap";

 const JSONaHTML = (data) =>{
  return `
     <table border="1">
     <thead>
        <tr>
          <th>Nombre</th>
          <th>Titulo</th>
          <th>Contenido</th>
          <th>Fecha</th>
      
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>${data.name}</td>
            <td>${data.title}</td>
            <td>${data.content}</td>
            <td>${data.date}</td>
           
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