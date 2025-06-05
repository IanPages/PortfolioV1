import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { li } from 'framer-motion/client'

function App() {

  const tech = [
    { name: 'React', img: '/icons8-react-160.png' },
    {name: 'TypeScript', img: '/icons8-typescript-144.png' },
    { name: 'Tailwind CSS', img: '/icons8-viento-de-cola-144.png' },
    { name: 'Spring Boot', img: '/icons8-spring-boot-144.png' },
    { name: 'Java', img: '/icons8-java-144.png'},
    { name: 'Asp.NET', img: '/net.png'},
    { name: 'C#', img: '/cSharp.png'},
    { name: 'Figma', img: '/icons8-figma-144.png'},
    { name: 'Git', img:'/icons8-git-144.png'},
    { name: 'Stripe', img: '/icons8-raya-160.png'}
  ]

  const experience = [
    {
      title: 'Internship',
      company: 'Eviden',
      date: '02-2025 / 05-2025',
      description: ' Desarrollo de aplicación completamente funcional para un cine con gestión de salas y películas con gestión de futuras emisiones con Spring Boot, React.js, Stripe y Tailwind CSS.'

    },
    {
      title: 'Internship',
      company: 'Eviden',
      date: '03-2024 / 05-2024',
      description: 'Participación en bootcamp sobre Angular, Next.js y SQL. Desarrollo de aplicación completamente funcional y escalable sobre un concesionario de vehículos de segunda mano con pasarela de pago con Angular, Next.js y Paypal.'
    },
    {
      title: 'Internship',
      company: 'Partner Ubezpieczenia',
      date: '03-2023 / 06-2023',
      description: 'Desarrollo de proyecto sobre Linux Server, realizando el host de su aplicación para un total de 30 usuarios con gestión sobre NextCloud. Mantenimiento de material y dispositivos de la empresa.'
    }
  ]

  const education = [
    {
      title: 'CFGS Desarrollo de Aplicaciones Web',
      college: 'CIFP César Manrique',
      date: '09-2023 / 06-2025',
    },
    {
      title: 'English B1 Certificate',
      college: 'That´s English',
      date: '09-2022 / 06-2023',
    },
    {
      title: 'CFGM Sistemas Microinformáticos y Redes',
      college: 'CIFP César Manrique',
      date: '09-2021 / 06-2023',
    }
  ]

  return (
    <div className='bg-gray-900 text-white min-h-screen scroll-smooth flex flex-col'>
      <Header />
      <div id="about" className='py-12'>
        <div className='bg-gradient-to-br from-gray-700 to-gray-900 rounded  flex flex-col items-center justify-center text-center py-12 space-y-4 max-w-4xl mx-auto'>
          <img src="/ian.jpg" alt="Ian Pagés Rodríguez" className='w-32 h-32 rounded-full shadow-lg mb-4' />
          <h1>Ian Pagés Rodríguez</h1>
          <p>FullStack developer apasionado y curioso por las nuevas tecnologías</p>
          <button className='bg-red-500 hover:bg-red-800 duration-500 p-2 rounded shadow-md font-semibold'><a href="#contact">Contactar</a></button>
        </div>
        
        
      </div>
      <div id="technologies" className='py-12'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Tecnologías y Herramientas</h2>
        <div className='bg-gradient-to-br from-gray-700  to-gray-900 rounded-xl shadow-lg p-8 max-w-4xl mx-auto'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {tech.map((item) => {
            return (
              <div key={item.name} className='relative group flex flex-col items-center'>
                <img src={item.img} alt={item.name} className='w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg' />
                <span className='absolute -top-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10'>
                  {item.name}
                </span>
              </div>
              
            )
          })}  
          </div>
        </div>
      </div>
      <div id="experience" className='py-12'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Experiencia y Estudios</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <div>
            <h3 className='text-xl font-semibold mb-6'>Experiencia Laboral</h3>
            <ul className='space-y-6'>
              {experience.map((exp,id) => {
                return (
                  <li key={id} className='border-l-4 border-red-500 pl-4'>
                    <h4 className='font-bold'>{exp.title}</h4>
                    <span className='text-sm text-gray-400'>{exp.company} | {exp.date}</span>
                    <p className='text-gray-300 text-m'>{exp.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-6'>Educación</h3>
            <ul className='space-y-6'>
              {education.map((edu,id) => {
                return (
                  <li key={id} className='border-l-4 border-blue-500 pl-4'>
                    <h4 className='font-bold'>{edu.title}</h4>
                    <span className='text-sm text-gray-400'>{edu.college} | {edu.date}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        
      </div>
      <div id="projects">
        <h2>Proyectos</h2>
        {/*Lista de proyectos con imagen, nombre y descripción*/}
      </div>
      <div id="contact">
        <h2>Contacto</h2>
        {/*Formulario de contacto con nombre, email, mensaje y botón de enviar*/}
        {/*Investigar EmailJS o algo similar */}
      </div>
      <Footer />
    </div>
  )
}

export default App
