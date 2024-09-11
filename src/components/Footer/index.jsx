import "./footer.css";
import Logo from "../../imagens/logo-sem-fundo.png";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function FooterMain() {
  var date = new Date();
  const year = date.getFullYear();
  // console.log(year);

  return (
    
    <footer>
    <div className="container">
      <div className="wrapper">
        <div className="footer-widget">
        <FooterBrand src={Logo} alt="Que Delícia Logo" name="Que Delícia" style={{ width: '50px', height: 'auto' }} />
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            deserunt magni recusandae ut! Natus?
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <i></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-widget">
          <h6>Quick Link</h6>
          <ul className="links">
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
          </ul>
        </div>
      </div>
      <FooterDivider />
      <div className="copyright-wrapper">
        <FooterCopyright href="#" by="Que Delícia" year={year} />
      </div>
    </div>
  </footer>
  );
}
