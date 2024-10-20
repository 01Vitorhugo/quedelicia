import muidos from '../../../imagens/icons-produtos-submenu/boi.svg'
import muidos1 from '../../../imagens/miudos/Bofe Bovino.png'
import muidos2 from '../../../imagens/miudos/Lingua Bovina.png'
import muidos3 from '../../../imagens/miudos/Passarinha.png'
import muidos4 from '../../../imagens/miudos/Fressura suina.png'
import { Link } from "react-router-dom";
import './compoMuidos.css'

export default function CompoMuidos() {


    return (
        <div className="container-produtosMuidos">
            <article className="text">
                <img src={muidos} alt="icone muidos" />
                <h1>Muidos</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={muidos1} alt="imagem muidos" />
                        </figure>
                        <article>
                            <p>Bofe Bovino</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={muidos2} alt="imagem muidos" />
                        </figure>
                        <article>
                            <p>Língua Bovina</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={muidos3} alt="imagem muidos" />
                        </figure>
                        <article>
                            <p>Passarinha</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={muidos4} alt="imagem muidos" />
                        </figure>
                        <article>
                            <p>Fressura Suina</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/muidos'>Veja Mais</Link></p>
                    </button>
                </div>

            </section>
        </div>
    )
}