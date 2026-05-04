import ModalComponente from "../componentes/ModalComponente";
import Formulario from "../componentes/Formulario";



const Inicio = ({data}) => {
  return (
    <div >
      <Formulario></Formulario>
    
      <ModalComponente data={data}/>
     
    </div>
  )
}

export default Inicio
