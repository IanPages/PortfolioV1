export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-4 bg-black text-white">
            <p className="text-center mb-4 mt-4 font-bold text-2xl"> © 2025 - Ian Pagés Rodríguez</p>
            <ul className="flex space-x-4">
                <li><a href="https://github.com/IanPages" className="hover:underline"><img className="w-12 h-12" src="/icons8-github-128(2).png"></img></a></li>
                <li><a href="https://www.linkedin.com/in/ian-pagés-rodríguez-a6ba07240" className="hover:underline"><img className="w-12 h-12" src="/icons8-linkedin-144.png" alt="linkedin" /></a></li>
                <li><a href="https://www.instagram.com/ianpagees_" className="hover:underline"><img src="/icons8-instagram-144.png" alt="instagram"  className="w-12 h-12"/></a></li>
            </ul>
        </footer>
    );
}