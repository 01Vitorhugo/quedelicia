import conserva from '../../../imagens/icons-produtos-submenu/conservas e secos.svg'
import conserva1 from '../../../imagens/conservas/champignon fatiado.png'
import conserva2 from '../../../imagens/conservas/Ovo de codorna.png'
import conserva3 from '../../../imagens/conservas/palmito picado.png'
import conserva4 from '../../../imagens/conservas/Tomate Seco.png'
import { Link } from "react-router-dom";
import './compoConserva.css'

export default function CompoConservas() {


    return (
        <div className="container-produtosConserva">
            <article className="text">
                <img src={conserva} alt="icone conserva" />
                <h1>Conservas</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={conserva1} alt="imagem conserva" />
                        </figure>
                        <article>
                            <p>Champignon Fatiado</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={conserva2} alt="imagem conserva" />
                        </figure>
                        <article>
                            <p>Ovo de Codorna</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={conserva3} alt="imagem conserva" />
                        </figure>
                        <article>
                            <p>Palmito Picado</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={conserva4} alt="imagem conserva" />
                        </figure>
                        <article>
                            <p>Tomate Seco</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/conservas'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}