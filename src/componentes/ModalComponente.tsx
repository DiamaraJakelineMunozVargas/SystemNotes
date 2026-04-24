import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tiptap from './Tiptap';




function ModalComponente() {


  const [disabled, setDisabled] = useState(true); // para cambiar el comportamiento del mouse al momento de mover el modal
  const [show, setShow] = useState(false);  //para mostrar el modal 
  const close = () => setShow(false);  // para cerrarlo 
  const open = () => setShow(true); // para abrir el modal 

  return (
    <>
      <Button variant="success" onClick={open}>
        Modal 
      </Button>
    
  <Modal show={show} onHide={close} >
     
            <Modal.Header  
            closeButton
              style= {{ width: '100%', cursor: 'move' }}
            onMouseOver={() => { if (disabled) setDisabled(false); }}
            onMouseOut={() => setDisabled(true)} >
                        <Modal.Title>Modal heading</Modal.Title>
                      
            </Modal.Header>
    
       
        <Modal.Body>
            <Tiptap/> 
         </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Close
            </Button>
         
            <Button variant="primary" onClick={close}>
               Guardar Cambios
            </Button>
        </Modal.Footer>
 
          
        
        
    </Modal>
   
  
     
     
    </>
  );
}

export default ModalComponente;