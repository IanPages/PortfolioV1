import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const isSpanish = i18n.language === "es" || !["en", "es"].includes(i18n.language);

    const handleLanguageToggle = () => {
        i18n.changeLanguage(isSpanish ? "en" : "es");
    };

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Limpieza por si el componente se desmonta con el menú abierto
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    return (
        <header className="flex items-center justify-between md:justify-around p-4  text-white">
        <h1 className="text-2xl font-bold cursor-pointer"><a href="">&lt;IanPagés /&gt;</a></h1>
        <nav className="hidden lg:block">
    <ul className="flex space-x-4 items-center justify-center  p-2 rounded-lg px-4">
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <ScrollLink to="about" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">{t("about")}</ScrollLink></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <ScrollLink to="technologies" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">{t("technologies")}</ScrollLink></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <ScrollLink to="experience" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">{t("experience")}</ScrollLink></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <ScrollLink to="projects" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">{t("projects")}</ScrollLink></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="ml-2 cursor-pointer">{t("contact")}</ScrollLink></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline"> <a href="/Eng-IanPages-CV.pdf" download target="_blank" rel="noopener noreferrer" className="ml-2 cursor-pointer">{t("download_cv")}</a></li>
        <li className=" p-2 rounded-lg hover:scale-110 duration-400 hover:underline cursor-pointer flex items-center" onClick={handleLanguageToggle}>
            <img src={isSpanish ? "/es-flag.png" : "/uk-flag.png"} alt="flag" className="w-12 h-8 inline" />
        </li>
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
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="fixed left-0 w-full mt-4 bg-gray-700 bg-opacity-50 flex flex-col items-center text-center justify-center z-50 p-4 rounded-lg shadow-lg">
            <li><ScrollLink to="about" smooth={true} duration={600} offset={-60} className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("about")}</ScrollLink></li>
            <li><ScrollLink to="technologies" smooth={true} duration={600} offset={-60} className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("technologies")}</ScrollLink></li>
            <li><ScrollLink to="experience" smooth={true} duration={600} offset={-60} className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("experience")}</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={600} offset={-60} className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("projects")}</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={600} offset={-60} className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("contact")}</ScrollLink></li>
            <li><a href="/Eng-IanPages-CV.pdf" download target="_blank" rel="noopener noreferrer" className="block px-4 py-4 cursor-pointer duration-300 hover:underline hover:scale-110" onClick={() => setOpen(false)}>{t("download_cv")}</a></li>
            <li className="cursor-pointer px-4 py-2 duration-300 hover:underline hover:scale-110 flex items-center" onClick={() => { handleLanguageToggle(); setOpen(false); }}>
                <img src={isSpanish ? "/es-flag.png" : "/uk-flag.png"} alt="flag" className="w-12 h-8 inline" />
            </li>
        </motion.ul>
    )}
</AnimatePresence>
        </div>
        </header>
    );
}