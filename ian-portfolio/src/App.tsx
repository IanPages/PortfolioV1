import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-black text-white min-h-screen'>
      <Header />
      <div>
         <h1>Ian Pagés Rodríguez</h1>
         <p>FullStack developer apasionado y curioso por las nuevas tecnologías</p>
        <button>Contactar</button>
      </div>
      <div>
        <h2>Tecnologías y Herramientas</h2>
        {/*Fotos de las tecnologias en div y on hover placeholder */}
      </div>
      <div>
        <h2>Experiencia Laboral</h2>
        <h2>Educación</h2>
        {/*Lista de experiencias laborales y educación con nombre, fecha y descripción*/}
        {/* lg: dos grid con trabajo y estudio y md y sm, 1 grid  */}
      </div>
      <div>
        <h2>Proyectos</h2>
        {/*Lista de proyectos con imagen, nombre y descripción*/}
      </div>
      <div>
        <h2>Contacto</h2>
        {/*Formulario de contacto con nombre, email, mensaje y botón de enviar*/}
        {/*Investigar EmailJS o algo similar */}
      </div>
      <Footer />
    </div>
  )
}

export default App
