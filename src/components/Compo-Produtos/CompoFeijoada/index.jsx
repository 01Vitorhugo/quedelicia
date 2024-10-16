import feijoada from '../../../imagens/icons-produtos-submenu/pertences de feijoada.svg'
import feijoada1 from '../../../imagens/feijoada/background.png'
import feijoada2 from '../../../imagens/feijoada/background.png'
import feijoada3 from '../../../imagens/feijoada/background.png'
import feijoada4 from '../../../imagens/feijoada/background.png'
import { Link } from "react-router-dom";
import './compoFeijoada.css'

export default function CompoFeijoada() {


    return (
        <div className="container-produtosFeijoada">
            <article className="text">
                <img src={feijoada} alt="icone feijoada" />
                <h1>Feijoada</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={feijoada1} alt="imagem feijoada" />
                        </figure>
                        <article>
                            <p>Costela Salgada</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={feijoada2} alt="imagem feijoada" />
                        </figure>
                        <article>
                            <p>Rabo Salgado</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={feijoada3} alt="imagem feijoada" />
                        </figure>
                        <article>
                            <p>Ponta de Costela</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={feijoada4} alt="imagem feijoada" />
                        </figure>
                        <article>
                            <p>Pé Salgado</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/feijoada'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}