
import "./navbar.css";
import { useState, useEffect } from "react";
import logo from "../../imagens/logo-sem-fundo.png";
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

import { Link } from 'react-router-dom';

export default function Menu() {
    const [isScrolled, setIsScrolled] = useState(false);


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
        <div className={`menuFixed  ${isScrolled ? 'menu scrolled' : ''}`}>
            <Navbar fluid rounded>
                <NavbarBrand href="#">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Que Delícia Logo" />
                </NavbarBrand>
                <div className="flex md:order-2">
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 
                    dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                    md:dark:hover:text-white" to="/">Home</Link>
                    <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 
                    dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                    md:dark:hover:text-white" to="/produtos">Produtos</Link>
                    <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 
                    dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                    md:dark:hover:text-white" to="/produtos">Contato</Link>
                    <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 
                    dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                    md:dark:hover:text-white" to="/produtos">Quem somos</Link>
                    <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 
                    dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent 
                    md:dark:hover:text-white" to="/produtos">Trabalhe conosco</Link>
                </NavbarCollapse>
            </Navbar>
        </div>

    )
}