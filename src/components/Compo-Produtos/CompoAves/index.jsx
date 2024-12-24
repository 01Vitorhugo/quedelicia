import aves from '../../../imagens/icons-produtos-submenu/ave.svg'
import aves1 from '../../../imagens/aves/File-de-Frango.png'
import aves2 from '../../../imagens/aves/frango-inteiro.png'
import aves3 from '../../../imagens/aves/file-de-coxa.png'
import aves4 from '../../../imagens/aves/meio-da-asa.png'
import { Link } from "react-router-dom";
import './compoAves.css'

export default function CompoAves() {


    return (
        <div className="container-produtosAves">
            <article className="text">
                <img src={aves} alt="icone ave" />
                <h1>Aves</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={aves1} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Frango (peito s/ osso)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={aves2} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Frango Resfriado</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={aves3} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Coxa</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={aves4} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Meio da asa</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/aves'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}