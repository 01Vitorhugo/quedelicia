
import "./navbar.css";
import { useState, useEffect } from "react";
import logo from "../../imagens/logo-sem-fundo.png";
import {
    Navbar,
    NavbarCollapse,
    NavbarToggle,
} from "flowbite-react";

import { Link } from 'react-router-dom';

export default function Menu() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Fecha o menu quando um link é clicado
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        return (
        <div className={`menuFixed ${isScrolled ? 'menu scrolled' : ''}`}>
            <Navbar fluid rounded>
                <Link to="/">
                    <img src={logo} className="mr-3 h-6 sm:h-9 " alt="Que Delícia Logo"  />
                </Link>
                <div className="flex md:order-2">
                    <NavbarToggle onClick={handleToggleMenu} />
                </div>
                <NavbarCollapse isOpen={isOpen}  className={isOpen ? 'block' : 'hidden'}>
                    <Link
                        className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50
                            dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0
                            md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                            md:dark:hover:text-white"
                        to="/"
                        onClick={handleLinkClick}
                    >
                        Home
                    </Link>
                    <Link
                        className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50
                            dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0
                            md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                            md:dark:hover:text-white"
                        to="/produtos"
                        onClick={handleLinkClick}
                    >
                        Produtos
                    </Link>
                    <Link
                        className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50
                            dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0
                            md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                            md:dark:hover:text-white"
                        to="/contato"
                        onClick={handleLinkClick}
                    >
                        Contato
                    </Link>
                    <Link
                        className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50
                            dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0
                            md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                            md:dark:hover:text-white"
                        to="/quem-somos"
                        onClick={handleLinkClick}
                    >
                        Quem somos
                    </Link>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
        

    
}