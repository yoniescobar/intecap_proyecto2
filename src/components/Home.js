import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const Home = ({Autos,nombre,setAppClicked}) => {
// const, funciones y variables
    const [clicked, setCliked] = useState(false) //useState es un hook que nos permite usar el estado en un componente funcional

    useEffect(() => {
        console.log('Se montó el componente',clicked)
    }, [clicked]) //useEffect es un hook que nos permite ejecutar código cuando algo sucede en nuestro componente (cuando se monta, cuando se actualiza, cuando se desmonta, etc)

    useEffect(() => {
        console.log('Mi otra tarea');
    }, [clicked])

  return (
    <div className='container my-5'>

        <h1 className='text-primary' >{nombre}</h1>
        <button className='btn btn-primary' onClick={()=>setCliked(!clicked)}>Dame un click {JSON.stringify(clicked)}</button>

        <br/>
        <br/>
        <button className='btn btn-danger' onClick={setAppClicked}>Dame un click en App para modificar</button>
        <br/>
        <br/>

        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {Autos.map((auto,index)=>{
                    return(<tr key={index}>
                            <td>{auto.marca}</td>
                            <td>{auto.modelo}</td>
                            <td>{auto.color}</td>
                            <td>{auto.precio}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>

    </div>
  )

}

export default Home


//props: Son las propiedades que le pasamos a un componente. Son los atributos que le pasamos a un elemento HTML. Por ejemplo, si tenemos un componente <Button color="red" />, el componente Button recibirá la propiedad color con el valor "red".

//Hooks: Es una función que nos permite usar el estado y otros recursos de React sin escribir una clase (componente de clase)
//useEffect: Es un hook que nos permite ejecutar código cuando el componente se monta, se actualiza o se desmonta (se desmonta cuando se cierra la página)
//useState: Es un hook que nos permite usar el estado en un componente funcional
//UseEffect es un hook que nos permite ejecutar código cuando algo sucede en nuestro componente (cuando se monta, cuando se actualiza, cuando se desmonta, etc)
//useEffect recibe dos parámetros: una función y un array de dependencias. La función se ejecutará cuando el componente se monte y cuando el array de dependencias cambie.
//Si el array de dependencias está vacío, la función se ejecutará solo cuando el componente se monte.
//Si no le pasamos el array de dependencias, la función se ejecutará cada vez que el componente se actualice.
//EventListeners: es cuchar el evento y ejecutar una función cuando sucede.

//JSX: Es una extensión de JavaScript que nos permite escribir código HTML dentro de JavaScript. Es decir, podemos escribir código HTML dentro de un archivo .js


