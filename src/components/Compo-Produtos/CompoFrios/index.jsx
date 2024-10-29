import frios from '../../../imagens/icons-produtos-submenu/frios e laticnios.svg'
import frios1 from '../../../imagens/lacteos/Provolone.png'
import frios2 from '../../../imagens/lacteos/3Mortadela.png'
import frios3 from '../../../imagens/lacteos/Salame.png'
import frios4 from '../../../imagens/lacteos/Apresuntado.png'
import { Link } from "react-router-dom";
import './compoFrios.css'

export default function CompoFrios() {


    return (
        <div className="container-produtosFrios">
            <article className="text">
                <img src={frios} alt="icone frios" />
                <h1>Frios</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={frios1} alt="imagem frios" />
                        </figure>
                        <article>
                            <p>Provolone</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={frios2} alt="imagem frios" />
                        </figure>
                        <article>
                            <p>Mortadela</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={frios3} alt="imagem frios" />
                        </figure>
                        <article>
                            <p>Salame</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={frios4} alt="imagem frios" />
                        </figure>
                        <article>
                            <p>Apresuntado</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/frios'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}