import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center justify-between lg:justify-around p-4  text-white">
        <h1 className="text-2xl font-bold cursor-pointer"><a href="">&lt;IanPagés /&gt;</a></h1>
        
        <nav className="hidden lg:block">
    <ul className="flex space-x-4 bg-black p-2 rounded-lg px-4">
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">
            // <ScrollLink to="about" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">Sobre Mí</ScrollLink>
        </li>
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">
            // <ScrollLink to="technologies" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">Tecnologías</ScrollLink>
        </li>
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">
            // <ScrollLink to="experience" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">Experiencia</ScrollLink>
        </li>
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">
            // <ScrollLink to="projects" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">Proyectos</ScrollLink>
        </li>
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">
            // <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">Contacto</ScrollLink>
        </li>
        {/*Añadir la descarga del CV */}
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline">Descargar CV</li>
        <li className="bg-gray-800 p-2 rounded-lg hover:scale-110 duration-400 hover:underline cursor-pointer">Idioma</li>
    </ul>
</nav>
        
        <div className="lg:hidden relative">
            <button 
            onClick={()=> setOpen(!open)}
            aria-label="Abrir Menú" className="focus:outline-none">
                {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
            <AnimatePresence>
    {open && (
        <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 w-full mt-4 bg-gray-900 bg-opacity-50 flex flex-col items-center text-center justify-center z-50"
        >
            <li>
                <ScrollLink to="about" smooth={true} duration={600} offset={-60} className="block px-4 py-2 hover:bg-gray-700" onClick={() => setOpen(false)}>
                    Sobre Mí
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="technologies" smooth={true} duration={600} offset={-60} className="block px-4 py-2 hover:bg-gray-700" onClick={() => setOpen(false)}>
                    Tecnologías
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="experience" smooth={true} duration={600} offset={-60} className="block px-4 py-2 hover:bg-gray-700" onClick={() => setOpen(false)}>
                    Experiencia
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="projects" smooth={true} duration={600} offset={-60} className="block px-4 py-2 hover:bg-gray-700" onClick={() => setOpen(false)}>
                    Proyectos
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="block px-4 py-2 hover:bg-gray-700" onClick={() => setOpen(false)}>
                    Contacto
                </ScrollLink>
            </li>
        </motion.ul>
    )}
</AnimatePresence>
        </div>
        </header>
    );
}