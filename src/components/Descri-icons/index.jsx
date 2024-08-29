import "./descri-icons.css";
import BatePapo from '../../imagens/icons/bate-papo-online.png';
import Alimento from '../../imagens/icons/alimento.png';
import Enviado from '../../imagens/icons/enviado.png';
import Qualidade from '../../imagens/icons/qualidade.png';

export default function DescriIcons() {

    return (
        <section className="descri-icons">

            <div id="title-icons">
                <figure>
                    <img src={Enviado} alt="Enviado" />
                </figure>
                <article>
                    <p>Entregas em 24h</p>
                </article>
            </div>

            <div className="alimento" id="title-icons">
                <figure>
                    <img src={Alimento} alt="Enviado" />
                </figure>
                <article>
                    <p>+500 Produtos para seu comércio</p>
                </article>
            </div>

            <div id="title-icons">
                <figure>
                    <img src={Qualidade} alt="Enviado" />
                </figure>
                <article>
                    <p>Produtos selecionados</p>
                </article>


            </div>
            <div id="title-icons">
                <figure>
                    <img src={BatePapo} alt="Enviado" />
                </figure>
                <article>
                    <p>Central de Vendas</p>
                </article>

            </div>


        </section>
    )
}