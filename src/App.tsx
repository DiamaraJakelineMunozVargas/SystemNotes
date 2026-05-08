
import Inicio from './pages/HomePage';
import CrearNote from './pages/CreateNote';
import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios"
import { Routes, Route } from 'react-router-dom';

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
    <div className='w-full max-w-[1540px] mx-auto ' >
      <Routes>
        <Route path='/' element={ <Inicio data={infoPat.data}/>}></Route>
        <Route path='/createNote' element={ <CrearNote />}></Route>
      </Routes>
    
   
    
    </div>
  )
}

export default App
