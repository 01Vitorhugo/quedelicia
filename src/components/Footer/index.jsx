import "./footer.css";
import Logo from "../../imagens/logoNeon.png";
import { Link } from "react-router-dom";
import facebook from '../../imagens/icons/facebook.png'
import instagram from '../../imagens/icons/instagram.png'



export default function FooterMain() {


  return (
    <footer>
      <section className="atendimentoAndEntrega" id="border">
        <h1>Atendimento</h1>
        <p>Segunda a Quinta das 8h às 18h</p>
        <p>Sexta-Feira das 8h às 17h</p>

        <h1 className="top">Entregas</h1>
        <p>Segunda a Sábado das 8h às 18h</p>


      </section>

      <section className="links" id="border">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/quem-somos">Quem Somos</Link>

      </section>

      <section className="televendas" id="border">
        <h1>Televendas</h1>
        <a href="tel:551120325793">(11) 2032-5793</a>
        <a href="tel:551120337339">(11) 2033-7339</a>
        <a href="tel:551120313812">(11) 2031-3812</a>

      </section>

      <section className="logo">
        <img src={Logo} alt="logo" />
        <p>Acompanhe nossas redes sociais</p>

        <figure>
          <a href="https://www.facebook.com/quedeliciaalimentos">
            <img src={facebook} alt="" />
          </a>

          <a href="https://www.instagram.com/quedeliciaalimentos/profilecard/?igsh=MThndWVmY2s0bWd5dg==">
            <img src={instagram} alt="" />
          </a>
        </figure>

      </section>

    </footer>
  );
}
