import peixe from '../../../imagens/icons-produtos-submenu/peixes.svg'
import peixe1 from '../../../imagens/peixes/camarão 7 barbas.png'
import peixe2 from '../../../imagens/peixes/filé de tilápia.png'
import peixe3 from  '../../../imagens/peixes/merluzão.png'
import peixe4 from '../../../imagens/peixes/merluza argentina.png'
import { Link } from "react-router-dom";
import './compoPeixe.css'

export default function CompoPeixes() {


    return (
        <div className="container-produtosPeixes">
            <article className="text">
                <img src={peixe} alt="icone peixe" />
                <h1>Peixes</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={peixe1} alt="imagem peixes" />
                        </figure>
                        <article>
                            <p>Camarão 7 Barbas (Pct 5kg)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={peixe2} alt="imagem peixes" />
                        </figure>
                        <article>
                            <p>Filé de Tilapia</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={peixe3} alt="imagem peixes" />
                        </figure>
                        <article>
                            <p>Merluzão</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={peixe4} alt="imagem peixes" />
                        </figure>
                        <article>
                            <p>Merluza Argentina</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/peixes'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}