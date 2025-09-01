import './i18n';
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
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const tech = [
    { name: 'React', img: '/icons8-react-160.png' },
    { name: 'TypeScript', img: '/icons8-typescript-144.png' },
    { name: 'Tailwind CSS', img: '/icons8-viento-de-cola-144.png' },
    { name: 'Spring Boot', img: '/icons8-spring-boot-144.png' },
    { name: 'Java', img: '/icons8-java-144.png' },
    { name: 'Asp.NET', img: '/net.png' },
    { name: 'C#', img: '/cSharp.png' },
    { name: 'Figma', img: '/icons8-figma-144.png' },
    { name: 'Git', img: '/icons8-git-144.png' },
    { name: 'Stripe', img: '/icons8-raya-160.png' }
  ];

  const experience = [
    {
      title: t('exp1_title'),
      company: 'Eviden',
      date: '02-2025 / 05-2025',
      description: t('exp1_desc')
    },
    {
      title: t('exp2_title'),
      company: 'Eviden',
      date: '03-2024 / 05-2024',
      description: t('exp2_desc')
    },
    {
      title: t('exp3_title'),
      company: 'Partner Ubezpieczenia',
      date: '03-2023 / 06-2023',
      description: t('exp3_desc')
    }
  ];

  const education = [
    {
      title: t('edu1_title'),
      college: 'CIFP César Manrique',
      date: '09-2023 / 06-2025',
    },
    {
      title: t('edu2_title'),
      college: 'That´s English',
      date: '09-2022 / 06-2023',
    },
    {
      title: t('edu3_title'),
      college: 'CIFP César Manrique',
      date: '09-2021 / 06-2023',
    }
  ];

  const projects = [
    {
      inprogress: false,
      name: t('proj1_name'),
      description: t('proj1_desc'),
      img: '/cinema-app.png',
      link1: 'https://github.com/emmanuelbg-10/Cine-Back.git',
      link2: 'https://github.com/emmanuelbg-10/Cine-Front.git'
    },
    {
      inprogress: false,
      name: t('proj2_name'),
      description: t('proj2_desc'),
      img: '/ticketflow.png',
      link1: 'https://github.com/IanPages/TicketFlowBack.git',
      link2: 'https://github.com/IanPages/TicketFlowFront.git'
    },
    {
      inprogress: true,
      name: t('proj3_name'),
      description: t('proj3_desc'),
      img: '/skillhub.png',
      link1: '',
      link2: ''
    },
    {
      inprogress: false,
      name: t('proj4_name'),
      description: t('proj4_desc'),
      img: '/MultiToolHelper.png',
      link1: '',
      link2: 'https://github.com/IanPages/MultiToolHelper.git',
      liveDemo: 'https://multi-tool-helper-dsg5.vercel.app'
    }
  ];

  const [formErrors, setFormErrors] = React.useState<{ name?: string; email?: string; message?: string }>({});
  const formRef = React.useRef<HTMLFormElement>(null);

  const validateForm = (form: HTMLFormElement) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    const nameInput = form.elements.namedItem('name') as HTMLInputElement | null;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement | null;

    if (!nameInput || !nameInput.value.trim()) errors.name = t('form_error_name');
    if (!emailInput || !emailInput.value.trim()) errors.email = t('form_error_email');
    else if (!/\S+@\S+\.\S+/.test(emailInput.value)) errors.email = t('form_error_email_invalid');
    if (!messageInput || !messageInput.value.trim()) errors.message = t('form_error_message');
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
        toast.success(t('form_success'));
        setFormErrors({});
        form.reset();
      }, () => {
        toast.error(t('form_error'));
      });
  };

  return (
    <div className=" text-white min-h-screen scroll-smooth flex flex-col ">
      <AnimatedBg />
      <Header />
      <motion.div id="about" className='py-12' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className='bg-gradient-to-br from-gray-700 to-gray-900 rounded  flex flex-col items-center justify-center text-center py-12 space-y-4 max-w-4xl mx-auto'>
          <img src="/ian.jpg" alt="Ian Pagés Rodríguez" className='w-32 h-32 rounded-full shadow-lg mb-4' />
          <h1>Ian Pagés Rodríguez</h1>
          <p>{t('about_me')}</p>
          <button className='bg-red-500 hover:bg-red-800 duration-500 p-2 rounded shadow-md font-semibold'>
            <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="block px-4 py-2 cursor-pointer">{t('contact_button')}</ScrollLink>
          </button>
        </div>
      </motion.div>
      <motion.div
        id="technologies"
        className="py-12"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.01 }}
      >
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
            <FaTools className="text-3xl sm:text-4xl text-yellow-400 mr-1 sm:mr-2" />
            {t('technologies_tools')}
          </h2>
        </div>
        <div className='bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-8 max-w-4xl mx-auto'>
          <div className="overflow-hidden relative group h-auto" >
            <motion.div
              className="flex gap-8 w-max"
              style={{ willChange: 'transform' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 12, ease: 'linear', }}>
              {[...tech, ...tech].map((item, idx) => (
                <div key={item.name + idx} className='relative group flex flex-col items-center cursor-pointer'>
                  <img src={item.img} alt={item.name}
                    className='w-12 h-12 lg:h-20 lg:w-20 shadow-lg' /></div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div id="experience" className='py-12' initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}>
        <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3'>
          <FaGraduationCap className="text-4xl text-yellow-400 mr-2" />
          {t('experience_education')}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <div>
            <h3 className='text-xl font-semibold mb-6 ml-6'>{t('work_experience')}</h3>
            <ul className='space-y-6'>
              {experience.map((exp, id) => {
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
            <h3 className='text-xl font-semibold mb-6 ml-6'>{t('education')}</h3>
            <ul className='space-y-6'>
              {education.map((edu, id) => {
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
      <motion.div id="projects" className='py-12' initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}>
        <h2 className='text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3'>
          <FaProjectDiagram className="text-4xl text-yellow-400 mr-2" />
          {t('projects')}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {projects.map((project, id) => {
            return (
              <div key={id} className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${project.inprogress ? 'opacity-50' : ''}`}>
                <img src={project.img} alt={project.name} className='' />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex space-x-4'>
                    {project.link1 && (
                      <a href={project.link1} target="_blank" rel="noopener noreferrer" className='text-yellow-300 hover:underline'>{t('code_back')}</a>)}
                    {project.link2 && (
                      <a href={project.link2} target="_blank" rel="noopener noreferrer" className='text-yellow-500 hover:underline'>{t('code_front')}</a>)}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className='text-green-400 hover:underline'>{t('live_demo')}</a>)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      <motion.div id="contact" className='py-12' initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.3 }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
          <FaEnvelopeOpenText className="text-3xl sm:text-4xl text-yellow-400 mr-1 sm:mr-2" />
          {t('contact')}
        </h2>
        <form ref={formRef} className='flex flex-col space-y-4 max-w-xl mx-auto bg-gray-800 p-4 rounded' onSubmit={sendEmail} noValidate>
          <label>{t('form_name')}</label>
          <input type="text" name="name" className='p-2 rounded bg-gray-700 text-white' />
          {formErrors.name && <span className="text-red-400 text-sm">{formErrors.name}</span>}

          <label>{t('form_email')}</label>
          <input type="email" name="email" className='p-2 rounded bg-gray-700 text-white' />
          {formErrors.email && <span className="text-red-400 text-sm">{formErrors.email}</span>}

          <label>{t('form_message')}</label>
          <textarea name="message" className='p-2 rounded text-white bg-gray-700 h-32'></textarea>
          {formErrors.message && <span className="text-red-400 text-sm">{formErrors.message}</span>}

          <button type="submit" className='bg-red-500 hover:bg-red-800 duration-500 p-2 cursor-pointer rounded shadow-md font-semibold'>{t('form_send')}</button>
        </form>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </motion.div>

      <Footer />
    </div>
  )
}

export default App