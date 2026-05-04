import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";




function BasicFuncion(){
    const [nombree, setnombree] = useState("");
    return (
        <>
        <InputGroup className="mb-3" >
        <FormControl 
        placeholder="Escribe tu nombre..."
        value={nombree}
        onChange={(e) => setnombree(e.target.value)}>

        </FormControl>
           
        </InputGroup>
        <h2>Hola {nombree}</h2>
        </>
    )
}
export default BasicFuncion;