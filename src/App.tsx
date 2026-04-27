
import Inicio from './pages/Inicio';
import NavbarCompo from './componentes/NavbarCompo';
import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios"


const App = () => {
  const [infoPat, setinfoPat] = useState<{ready:boolean,data:{
    Nombre: string,
    Edad: number,
    Estudio: string,
    FechaEstudio: string,
    Medico: string,
  }|null}>({ready:false,data:null})
  console.log(infoPat)
  useEffect(() => {
    (async () => {
  try {
    const res = await axios.get("data/nota.json");
    
    // En Axios, los datos ya vienen en la propiedad .data
    // No es una función como en la Fetch API (res.json())
    const data = res.data; 
    
    setinfoPat({ready:true,data})
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
})();
  }, [])
  if(!infoPat.ready)(<div>Cargando.......</div>)
  return (
    <div >
      <NavbarCompo /> 
   
     <Inicio data={infoPat.data}/>
    </div>
  )
}

export default App
