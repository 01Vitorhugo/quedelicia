import './footer.css'
import Logo from '../../imagens/logo-sem-fundo.png'
import { Footer, FooterBrand, FooterCopyright,
     FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";


export default function FooterMain(){

  var date = new Date();
  const year = date.getFullYear();
  // console.log(year);

    return(
        <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            src={Logo}
            alt="Que Delícia Logo"
            name="Que Delícia"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Que Delícia" year={year} />
      </div>
    </Footer>
    )
}