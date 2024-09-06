import "./descri-icons.css";
import BatePapo from "../../imagens/icons/bate-papo-online2.png";
import Alimento from "../../imagens/icons/alimento.png";
import Enviado from "../../imagens/icons/enviado.png";
import Qualidade from "../../imagens/icons/qualidade.png";

export default function DescriIcons() {
  return (
    <section className="descri-icons">
      <div id="title-icons">
        <figure>
          <div className="img-container">
            <img src={Enviado} alt="Enviado" />
          </div>
        </figure>
        <article>
          <p>Entregas em 24h</p>
        </article>
      </div>

      <div className="alimento" id="title-icons">
        <figure>
          <div className="img-container">
            <img src={Alimento} alt="Enviado" />
          </div>
        </figure>
        <article>
          <p>+500 Produtos para seu comércio</p>
        </article>
      </div>

      <div id="title-icons">
        <figure>
          <div className="img-container">
            <img src={Qualidade} alt="Enviado" />
          </div>
        </figure>
        <article>
          <p>Produtos selecionados</p>
        </article>
      </div>
      <div id="title-icons">
        <figure>
          <div className="img-container">
            <img src={BatePapo} alt="Enviado" />
          </div>
        </figure>
        <article>
          <p>Central de Vendas</p>
        </article>
      </div>
    </section>
  );
}
