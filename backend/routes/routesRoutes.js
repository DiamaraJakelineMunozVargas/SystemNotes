import express from "express";
import Note from "../model/noteModel.js";
import { error } from "console";

const router = express.Router();

// obtener todas las notas 
router.get('/', async (req, res) => {
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
        console.log('obteniendo todas las notas')
    }
    catch(error){
        console.error(error)
    }

})
// obtener una nota por id 
router.get('/:id', async (req, res)=> {
    try{
        const id = req.params.id
        const note = await Note.findById(id)
        console.log(note)
        if(!note) return res.status(404).json({error: 'No se encontro'})
            res.status(200).json(note)
        console.log('Obtener nota por id')
    }
    catch(error){
       console.error(error)
    }
    
})
// crear una nota 
router.post('/', async (req,res) => {
    try{
        const {title, content} = req.body
        const newNote = new Note({title, content}) // para crear una nota 
        const savedNote =  await newNote.save(); // espera el inicio de guardado en la BD
        res.status(201).json({mensaje: 'Nota creada exitosamente', nota: savedNote}) // muestrta un estado de la respuesta y su mensaje 
         console.log('Creando una nota')

    } catch(error){
        console.error(error)

    }
   
})
// eliminar una nota 
router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const ddeleteNote = await Note.findByIdAndDelete(id)
        if(!ddeleteNote) return res.status(404).json({error: 'dato no encontrado'})
            res.status(200).json(ddeleteNote)
          console.log('eliminando una nota')
    }
    catch(error){
        console.error(error)
    }
  
})

// actualizar una nota 
router.put('/:id',async (req, res) => {
    try{
        const id = req.params.id
        const updateNote = await Note.findByIdAndUpdate(id, req.body, {new: true})
        if(!updateNote) return res.status(404).json({error: 'dato no encontrado'})
            res.status(200).json(updateNote)
    }
    catch(error){
        console.error(error)
    }
})
export default router;