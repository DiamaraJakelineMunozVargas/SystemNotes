
import Inicio from './pages/Inicio';
import NavbarCompo from './componentes/NavbarCompo';
import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios"


const App = () => {
  const [infoPat, setinfoPat] = useState<{ready:boolean,data:{
    name: string,
    title: string,
    content: string,
    date: Date,
    
  }|null}>({ready:false,data:null})
  console.log(infoPat)
  useEffect(() => {
    (async () => {
  try {
    const res = await axios.get("http://localhost:3000/notas");
    
  
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
