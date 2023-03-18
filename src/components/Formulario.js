import React,{useState} from 'react'
import Swal from 'sweetalert2'

const Formulario = () => {

    const[persona,setPersona]=useState('')
    const[nombre,setNombre]=useState('')
    const[apellido,setApellido]=useState('')
    const[edad,setEdad]=useState('')
    const[correo,setCorreo]=useState('')
    const[lista,setLista]=useState([])


    const llenarCampos = (dato) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ` El campo: ${dato} esta vacio`,
            })
    }
        

    const guardarDatos = (e) => {
        e.preventDefault() //evita que se recargue la pagina
        if(nombre.trim()===''){
            llenarCampos('Nombre')
            return
        }
        if(apellido.trim()===''){
            llenarCampos('Apellido')
            return
        }
        if(edad.trim()===''){
            llenarCampos('Edad')
            return
        }
        if(correo.trim()===''){
            llenarCampos('Correo')
            return
        }

    //setPersona({nombre,apellido,edad,correo}) //agrega los datos al objeto persona
        setLista([
            ...lista,
            {nombre,apellido,edad,correo}]) //agrega los datos al array lista

        //limpiar campos
        e.target.reset()
        setNombre('')
        setApellido('')
        setEdad('')
        setCorreo('')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos guardados',
            showConfirmButton: false,
            timer: 1500
            })

    }

    const eliminar = (index) => { //2 parametros, el primero es el item y el segundo es el index
        
        Swal.fire({
            title: 'Estas seguro de eliminar el registro?',
            text: "No podras revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
            }).then((result) => {
            
                if (result.isConfirmed) {
                const arrayFiltrado = lista.filter((item,indexLista)=>indexLista!==index)
                setLista(arrayFiltrado)
                Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
                )
            }
            })
    }


    const editar = (item) => {
        item.preventDefault() //evita que se recargue la pagina
        if(!lista.trim()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay datos para editar',
                })
                return
        }

        const arrayEditado = lista.map((item,index)=>(
            {
                nombre: nombre ? nombre : item.nombre,
                apellido: apellido ? apellido : item.apellido,
                edad: edad ? edad : item.edad,
                correo: correo ? correo : item.correo

                
            }))
            setLista(arrayEditado)
            
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

            <button className='btn btn-primary' >Guardar Datos</button>

         </form>  

         <div className='container py-5'>
                <h1>Lista de personas</h1>
                <ul className='list-group'>
                    {
                        lista.length===0 ? (
                            <li className='list-group-item'>No hay personas Registradas..</li>
                        ) : (
                            lista.map((item,index)=>( 
                                <li className='list-group-item' key={index}>
                                    {item.nombre} - {item.apellido} - {item.edad} - {item.correo} 
                                    <button className='btn btn-danger' onClick={()=>{eliminar(index)}}>Eliminar</button> {''}
                                     <button className='btn btn-warning' onClick={()=>{editar(item)}} >Editar</button>
                                     
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>


    </div>
  )
}

export default Formulario
