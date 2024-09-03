
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
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">Produtos</NavbarLink>
                    <NavbarLink href="#">Contato</NavbarLink>
                    <NavbarLink href="#">Localização</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>

    )
}