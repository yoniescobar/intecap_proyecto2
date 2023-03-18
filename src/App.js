import React,{useState,useEffect} from 'react'
import Formulario from './components/Formulario'
import Home from './components/Home'
import Listas from './components/Listas'
import Navbar from './components/Navbar'
import Rickandmorty from './components/Rickandmorty'

const App = () => {

  const Autos =[{
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Azul',
    precio: 150000
  },
{
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    precio: 100000
},
{
    marca: 'Chevrolet',
    modelo: 'Cruze',
    color: 'Amarillo',
    precio: 200000 
}
]

let nombre = 'Juan estudia en intecap'

const [appClicked, setAppClicked] = useState(false)

useEffect(() => {
  console.log('Ejecutando UseEffect en APP ',appClicked)
}, [appClicked])


  return (
    <div>

      {/* <Navbar/> */}
      {/* <Home Autos={Autos}  nombre={nombre} setAppClicked ={()=>setAppClicked(state=>!state)}/> */}
      {/* <Rickandmorty/> */}
      {/* <Listas/> */}
      <Formulario/>

    </div>
  )
}

export default App
