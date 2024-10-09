import bovinos from '../../../imagens/icons-produtos-submenu/boi.svg'
import bovinos1 from '../../../imagens/bovinos/peito-bovino.png'
import bovinos2 from '../../../imagens/bovinos/capa-de-filé.png'
import bovinos3 from '../../../imagens/bovinos/acem.png'
import bovinos4 from '../../../imagens/bovinos/costela-bovina.png'
import { Link } from "react-router-dom";
import './compoBovinos.css'

export default function CompoBovinos() {


    return (
        <div className="container-produtosBovinos">
            <article className="text">
                <img src={bovinos} alt="icone ave" />
                <h1>Bovinos</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={bovinos1} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Frango (peito s/ osso)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={bovinos2} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Frango (peito s/ osso)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={bovinos3} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Frango (peito s/ osso)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={bovinos4} alt="imagem aves" />
                        </figure>
                        <article>
                            <p>Filé de Frango (peito s/ osso)</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/bovinos'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}