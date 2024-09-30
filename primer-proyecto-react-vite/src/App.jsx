import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='titulo'>¡Bienvenidos a mi aplicación de React!</p>
      <div className='contenedor'>
        <p className='subtitulo'>Lista de cosas por hacer:</p>
        <ul className='pendientes'>
          <li>Aprender React</li>
          <li>Practicar con Vite</li>
          <li>Construir proyectos increíbles</li>
        </ul>
      </div>
    </>
  )
}

export default App