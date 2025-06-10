import { motion } from 'framer-motion';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import emailjs from 'emailjs-com';
import { FaEnvelopeOpenText, FaGraduationCap, FaProjectDiagram, FaTools } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import AnimatedBg from './components/AnimatedBg';
import { Link as ScrollLink } from 'react-scroll';

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

  const projects = [
    {
      inprogress: false,
      name: 'Cinema App',
      description: 'Proyecto grupal de cine con gestión de salas y películas con futuras emisiones, desarrollado con Spring Boot, React.js, Tailwind CSS, Stripe y Cloudinary.',
      img: '/cinema-app.png',
      link1: 'https://github.com/emmanuelbg-10/Cine-Back.git',
      link2: 'https://github.com/emmanuelbg-10/Cine-Front.git'
    },
    {
      inprogress: false,
      name: 'Ticketflow',
      description: 'Proyecto de fin de grado sobre venta de tickets para eventos indoor y outdoor, desarrollado con Spring Boot, Angular, Tailwind CSS, Stripe y Cloudinary.',
      img: '/ticketflow.png',
      link1: 'https://github.com/IanPages/TicketFlowBack.git',
      link2: 'https://github.com/IanPages/TicketFlowFront.git'
    },
    {
      inprogress: true,
      name: 'SkillHub | In Progress',
      description: 'Aplicación para freelancers y empresas para encontrar a profesionales y proyectos nuevos, desarro sobre Spring Boot, React.js, Tailwind CSS, Stripe y Cloudinary.',
      img: '/skillhub.png',
      link1: '',
      link2: ''
    }
    
  ]

  const [formErrors, setFormErrors] = React.useState<{ name?: string; email?: string; message?: string }>({});
  const formRef = React.useRef<HTMLFormElement>(null);

  const validateForm = (form: HTMLFormElement) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    const nameInput = form.elements.namedItem('name') as HTMLInputElement | null;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement | null;

    if (!nameInput || !nameInput.value.trim()) errors.name = "El nombre es obligatorio";
    if (!emailInput || !emailInput.value.trim()) errors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(emailInput.value)) errors.email = "Email no válido";
    if (!messageInput || !messageInput.value.trim()) errors.message = "El mensaje es obligatorio";
    return errors;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errors = validateForm(form);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    emailjs.sendForm('service_wl4lafq', 'template_4p075a5', form, 'dXQ1ADco9fFVpqLwz')
      .then(() => {
        toast.success('¡Correo enviado satisfactoriamente!');
        setFormErrors({});
        form.reset();
      }, () => {
        toast.error('Error enviando el correo. Inténtalo de nuevo.');
      });
  };

  return (
    <div className=" text-white min-h-screen scroll-smooth flex flex-col ">
      <AnimatedBg />
      <Header />
      <motion.div
        id="about"
        className='py-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='bg-gradient-to-br from-gray-700 to-gray-900 rounded  flex flex-col items-center justify-center text-center py-12 space-y-4 max-w-4xl mx-auto'>
          <img src="/ian.jpg" alt="Ian Pagés Rodríguez" className='w-32 h-32 rounded-full shadow-lg mb-4' />
          <h1>Ian Pagés Rodríguez</h1>
          <p>FullStack developer apasionado y curioso por las nuevas tecnologías</p>
          <button className='bg-red-500 hover:bg-red-800 duration-500 p-2 rounded shadow-md font-semibold'>
        <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="block px-4 py-2 cursor-pointer">Contactar</ScrollLink>
          </button>
        </div>
      </motion.div>
      <motion.div id="technologies" className='py-12' initial={{ opacity: 0, y: 40}}
      whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount:0.3 }}>
        <div className="flex items-center justify-center mb-8">
         
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
            <FaTools className="text-3xl sm:text-4xl text-yellow-400 mr-1 sm:mr-2" />
            Tecnologías y Herramientas
          </h2>
        </div>
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
      </motion.div>
      <motion.div id="experience" className='py-12' initial={{ opacity: 0, y: 40}}
      whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount:0.3  }}>
        <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3'>
          <FaGraduationCap className="text-4xl text-yellow-400 mr-2" />
          Experiencia y Estudios</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <div>
            <h3 className='text-xl font-semibold mb-6 ml-6'>Experiencia Laboral</h3>
            <ul className='space-y-6'>
              {experience.map((exp,id) => {
                return (
                  <li key={id} className='border-l-4 border-red-500 pl-4'>
                    <h4 className='font-bold'>{exp.title}</h4>
                    <span className='text-sm text-red-400'>{exp.company} | {exp.date}</span>
                    <p className='text-gray-300 text-m'>{exp.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-6 ml-6'>Educación</h3>
            <ul className='space-y-6'>
              {education.map((edu,id) => {
                return (
                  <li key={id} className='border-l-4 border-blue-500 pl-4'>
                    <h4 className='font-bold'>{edu.title}</h4>
                    <span className='text-sm text-blue-400'>{edu.college} | {edu.date}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        
      </motion.div>
      <motion.div id="projects" className='py-12' initial={{ opacity: 0, y: 40}}
      whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount:0.3  }}>
        <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3'>
          <FaProjectDiagram className="text-4xl text-yellow-400 mr-2" />
          Proyectos</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {projects.map((project,id) => {
            return (
              <div key={id} className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${project.inprogress ? 'opacity-50' : ''}`}>
                <img src={project.img} alt={project.name} className='' />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex space-x-4'>
                    {project.link1 && (
                      <a href={project.link1} target="_blank" rel="noopener noreferrer" className='text-yellow-300 hover:underline'> Código Back </a> )}
                    {project.link2 && (
                      <a href={project.link2} target="_blank" rel="noopener noreferrer" className='text-yellow-500 hover:underline'> Código Front </a>)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
      
      <motion.div id="contact" className='py-12' initial={{ opacity: 0, y: 40}}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true , amount:0.3 }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
          <FaEnvelopeOpenText className="text-3xl sm:text-4xl text-yellow-400 mr-1 sm:mr-2" />
          Contacto
        </h2>
        <form ref={formRef} className='flex flex-col space-y-4 max-w-xl mx-auto bg-gray-800 p-4 rounded' onSubmit={sendEmail} noValidate>
          <label>Nombre</label>
          <input type="text" name="name" className='p-2 rounded bg-gray-700 text-white' />
          {formErrors.name && <span className="text-red-400 text-sm">{formErrors.name}</span>}

          <label>Email</label>
          <input type="email" name="email" className='p-2 rounded bg-gray-700 text-white' />
          {formErrors.email && <span className="text-red-400 text-sm">{formErrors.email}</span>}

          <label>Mensaje</label>
          <textarea name="message" className='p-2 rounded text-white bg-gray-700 h-32'></textarea>
          {formErrors.message && <span className="text-red-400 text-sm">{formErrors.message}</span>}

          <button type="submit" className='bg-red-500 hover:bg-red-800 duration-500 p-2 cursor-pointer rounded shadow-md font-semibold'>Enviar</button>
        </form>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </motion.div>
      
      <Footer />
    </div>
  )
}

export default App
