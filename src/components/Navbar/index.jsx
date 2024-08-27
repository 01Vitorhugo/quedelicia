
import "./navbar.scss";
import { useState, useEffect } from "react";
import logo from "../../imagens/logo-sem-fundo.png";
import {
    CNavbar, CNavbarBrand, CContainer, CNavbarToggler, COffcanvas, COffcanvasHeader,
    CCloseButton, COffcanvasBody, CNavbarNav, CNavItem, CNavLink
} from '@coreui/react';

export default function Navbar() {

    const [visible, setVisible] = useState(false);
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
            <CNavbar expand="xxl">
                <CContainer fluid>
                    <CNavbarBrand><img src={logo} alt="logo empresa" /></CNavbarBrand>
                    <CNavbarToggler
                        aria-controls="offcanvasNavbar2"
                        aria-label="Toggle navigation"
                        onClick={() => setVisible(!visible)}
                    />
                    <COffcanvas id="offcanvasNavbar2" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
                        <COffcanvasHeader>
                            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                        </COffcanvasHeader>
                        <COffcanvasBody>
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="#">
                                        Home
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#" >
                                        Produtos
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">Contato</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">
                                        Localização
                                    </CNavLink>
                                </CNavItem>
                            </CNavbarNav>
                        </COffcanvasBody>
                    </COffcanvas>
                </CContainer>
            </CNavbar>
        </div>

    )
}