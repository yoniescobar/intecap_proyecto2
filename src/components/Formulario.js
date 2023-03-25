import React,{useState} from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'

const Formulario = () => {

    const[codigo,setCodigo]=useState('')
    const[nombre,setNombre]=useState('')
    const[apellido,setApellido]=useState('')
    const[edad,setEdad]=useState('')
    const[correo,setCorreo]=useState('')
    const[lista,setLista]=useState([])
    const[modoEdicion,setModoEdicion]=useState(false)


    const generarId=()=>{
        return Math.floor(Math.random()*100000000)
    }

    const llenarCampos = (dato) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ` El campo: ${dato} esta vacio`,
            })
    }
        

    const agregarUsuario = (e) => {

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
       const usuario = {codigo:generarId(), nombre,apellido,edad,correo}
         setLista([...lista,usuario])

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


    const editar = (persona) => { // 1 parametro, el item
        setCodigo(persona.codigo)
        setNombre(persona.nombre)
        setApellido(persona.apellido)
        setEdad(persona.edad)
        setCorreo(persona.correo)
        setModoEdicion(true)

    }
    
    const guardarCambios=(e)=>{
        e.preventDefault()
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

        const editado = lista.map(persona => persona.codigo === codigo ? {codigo,nombre,apellido,edad,correo} : persona)
        setLista(editado)
        setModoEdicion(false)

        setNombre('')
        setApellido('')
        setEdad('')
        setCorreo('')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos Actualizados',
            showConfirmButton: false,
            timer: 1500
            })
    }
    

    const eliminar = (codigo) => { //2 parametros, el primero es el item y el segundo es el index      
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
                const filtro = lista.filter((persona)=>persona.codigo!==codigo) //filtra el array y devuelve un nuevo array con los elementos que cumplan la condiciones de la funcion de callback
                setLista(filtro)
                debugger
                Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
                )
            }
            })
    }



   

  return (
    <div className='container py-5'>
      <h1>Formulario</h1>
        <form className='form-group' >
            <input
                type="text" 
                placeholder='Nombre'
                className='form-control mb-3'
                value={nombre}
                onChange={(e)=>{setNombre(e.target.value)}} //e.target.value es el valor que se ingresa en el input
                />
            <input
                type="text"
                placeholder='Apellido'
                className='form-control mb-3'
                value={apellido}
                onChange={(e)=>{setApellido(e.target.value)}}
                />
            <input
                type="number"
                min={0}
                max={100}
                placeholder='Edad'
                className='form-control mb-3'
                value={edad}
                onChange={(e)=>{setEdad(e.target.value)}}
                />
            <input
                type="email"
                placeholder='Correo'
                className='form-control mb-3'
                value={correo}
                onChange={(e)=>{setCorreo(e.target.value)}}
                />

              {
                    modoEdicion ? 
                    (<button className='btn btn-warning btn-block' 
                      onClick={(e)=>{guardarCambios(e)}} type="submit">Guardar Cambios</button>):
                    (<button className='btn btn-primary btn-block' 
                    onClick={(e)=>{agregarUsuario(e)}} type="submit"><i className="bi bi-plus-circle-fill"></i> Agregar Usuario</button>)

              }      

             

         </form>  

         <div className='container py-5'>
                <h1>Lista de personas</h1>
                <DataTable
                    columns={[
                        {
                            name: 'codigo',
                            selector: (row) => row.codigo,
                            sortable: true,
                        },
                        {
                            name: 'Nombre',
                            selector: (row) => row.nombre,
                            sortable: true,
                        },
                        {
                            name: 'Apellido',
                            selector: (row) => row.apellido,
                            sortable: true,
                        },
                        {
                            name: 'Edad',
                            selector: (row) => row.edad,
                            sortable: true,
                        },
                        {
                            name: 'Correo',
                            selector: (row) => row.correo,
                            sortable: true,
                        },
                        {
                            name: 'Acciones',
                            cell: (row) => (<div>
                                <button className='btn btn-primary' onClick={()=>{editar(row)}}><i className="bi bi-pencil-square"></i></button>
                                <button className='btn btn-danger' onClick={()=>{eliminar(row.codigo)}}><i className="bi bi-trash"></i></button>
                            </div>
                            ),
                        }
                    ]}


                    data={lista}
                    pagination
                    paginationComponentOptions={{
                        rowsPerPageText: 'Filas por pagina:',
                        rangeSeparatorText: 'de',
                        noRowsPerPage: false,
                        selectAllRowsItem: true,
                        selectAllRowsItemText: 'Todos'
                    }}
                    highlightOnHover  //resalta la fila al pasar el mouse
                    pointerOnHover    //cambia el cursor al pasar el mouse
                    fixedHeader

                />
                
        </div>


    </div>
  )
}

export default Formulario
