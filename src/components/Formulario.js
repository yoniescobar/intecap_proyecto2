import React,{useState} from 'react'
import Swal from 'sweetalert2'

const Formulario = () => {

    const[persona,setPersona]=useState('')
    const[nombre,setNombre]=useState('')
    const[apellido,setApellido]=useState('')
    const[edad,setEdad]=useState('')
    const[correo,setCorreo]=useState('')
    const[lista,setLista]=useState([])


    const llenarCampos = (campo) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ` El campo: ${campo} esta vacio`,
            })
    }
        

    const guardarDatos = (e) => {
        e.preventDefault() //evita que se recargue la pagina
        
        if(!nombre.trim()){ //trim() elimina espacios en blanco
            llenarCampos(nombre)
        }if(!apellido.trim()){
            llenarCampos()
        }
        if(!edad.trim()){
            llenarCampos()
        }
        if(!correo.trim()){
            llenarCampos()
        }
    //setPersona({nombre,apellido,edad,correo}) //agrega los datos al objeto persona
        setLista([...lista,{nombre,apellido,edad,correo}]) //agrega los datos al array lista

        //limpiar campos
        e.target.reset()
        setNombre('')
        setApellido('')
        setEdad('')
        setCorreo('')

    }


   

  return (
    <div className='container py-5'>
      <h1>Formulario</h1>
        <form onSubmit={guardarDatos}>
            <input
                type="text" 
                placeholder='Nombre'
                className='form-control mb-3'
                onChange={(e)=>{setNombre(e.target.value)}} //e.target.value es el valor que se ingresa en el input
                />
            <input
                type="text"
                placeholder='Apellido'
                className='form-control mb-3'
                onChange={(e)=>{setApellido(e.target.value)}}
                />
            <input
                type="number"
                min={0}
                max={100}
                placeholder='Edad'
                className='form-control mb-3'
                onChange={(e)=>{setEdad(e.target.value)}}
                />
            <input
                type="email"
                placeholder='Correo'
                className='form-control mb-3'
                onChange={(e)=>{setCorreo(e.target.value)}}
                />

            <button className='btn btn-primary' >Enviar</button>

         </form>  

         <div className='container py-5'>
                <h1>Lista de personas</h1>
                <ul className='list-group'>
                    {
                        lista.map((item,index)=>( 
                            <li className='list-group-item' key={index}>
                                {item.nombre} - {item.apellido} - {item.edad} - {item.correo}
                            </li>
                        ))
                    }
                </ul>
            </div>


    </div>
  )
}

export default Formulario
