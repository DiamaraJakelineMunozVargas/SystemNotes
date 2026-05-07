import ModalComponente from "../componentes/ModalComponente";
import TablaInicio from "../componentes/TablaInicio";



const Inicio = ({data}) => {
  return (
    <div >
      
    <TablaInicio></TablaInicio>
      <ModalComponente data={data}/>
     
    </div>
  )
}

export default Inicio
