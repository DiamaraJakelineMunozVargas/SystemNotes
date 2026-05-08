
import { createRoot } from 'react-dom/client';

import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import NavbarCompo from './componentes/NavbarCompo';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NavbarCompo /> 
    <App />
  </BrowserRouter>
  
  
)
