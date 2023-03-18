import React,{useState} from 'react'

const Listas = () => {
// useState: es un hook que nos permite manejar el estado de un componente funcional
    const personas = [
        { id: 1, nombre: 'Juan'},
        { id: 2, nombre: 'Pedro'},
        { id: 3, nombre: 'Maria'},
        { id: 4, nombre: 'Jose'},
        { id: 5, nombre: 'Luis'},
        { id: 6, nombre: 'Ana'},
        { id: 7, nombre: 'Luisa'},
    ]

    const[list,setLista]=useState( personas);


    const agregarPersona = () => {
        const nuevaPersona = {
            id: 8,
            nombre: 'Carlos'
        }
        setLista([...list,nuevaPersona]) // ...list: es para que no se sobreescriba la lista operator spread: es para que no se sobreescriba la lista
    }

//Spread Operator: es para que no se sobreescriba la lista 

  return (
    <>
    
       <div className="container">
          <h2>Lista de personas</h2>
          {
                list.map((persona,index)=>(
                    <h4 key={index}>{persona.nombre} </h4>
                ))
          }
        </div>

        <button className="btn btn-primary" onClick={agregarPersona}>Agregar Persona</button>

    </>
  )
}

export default Listas
