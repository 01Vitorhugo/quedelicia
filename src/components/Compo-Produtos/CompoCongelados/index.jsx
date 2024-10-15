import { Link } from 'react-router-dom'
import congelados from '../../../imagens/icons-produtos-submenu/congelados.png'
import congelados1 from '../../../imagens/congelados/Couve flor.png'
import congelados2 from '../../../imagens/congelados/anel de cebola.png'
import congelados3 from '../../../imagens/congelados/batata bem brasil.png'
import congelados4 from '../../../imagens/congelados/batata lamb weston.png'
import './compoCongelados.css'


export default function CompoCongelados() {
    return (
        <div className="container-produtosCongelados">
            <article className="text">
                <img src={congelados} alt="icone congelados" />
                <h1>Congelados</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={congelados1} alt="imagem congelados" />
                        </figure>
                        <article>
                            <p>Couve Flor</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={congelados2} alt="imagem congelados" />
                        </figure>
                        <article>
                            <p>Anel de Cebola Bem Brasil (Pct 1,05kg)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={congelados3} alt="imagem congelados" />
                        </figure>
                        <article>
                            <p>Batata Bem Brasil (Pct 1,05kg)</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={congelados4} alt="imagem congelados" />
                        </figure>
                        <article>
                            <p>Batata Lamb Weston Stealth Fries (Pct 2kg)</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/congelados'>Veja Mais</Link></p>
                        
                    </button>
                </div>

            </section>
        </div>

    )

}

