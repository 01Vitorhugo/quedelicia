import { Link } from 'react-router-dom'
import suinos from '../../../imagens/icons-produtos-submenu/suinos.svg'
import suinos1 from '../../../imagens/suinos/Pernil.png'
import suinos2 from '../../../imagens/suinos/Sobre Paleta.png'
import suinos3 from '../../../imagens/suinos/bisteca.png'
import suinos4 from '../../../imagens/suinos/papada.png'
import './compoSuinos.css'


export default function CompoSuinos() {
    return (
        <div className="container-produtosSuinos">
            <article className="text">
                <img src={suinos} alt="icone suinos" />
                <h1>Suinos</h1>
            </article>

            <section className="box-produto">
                <section className="container">

                    <div className="card-produto">
                        <figure>
                            <img src={suinos1} alt="imagem suinos" />
                        </figure>
                        <article>
                            <p>Pernil c/ osso c/ pele</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={suinos2} alt="imagem suinos" />
                        </figure>
                        <article>
                            <p>Sobre Paleta c/ Osso</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={suinos3} alt="imagem suinos" />
                        </figure>
                        <article>
                            <p>Bisteca</p>
                        </article>
                    </div>

                    <div className="card-produto">
                        <figure>
                            <img src={suinos4} alt="imagem suinos" />
                        </figure>
                        <article>
                            <p>Papada c/ Pele</p>
                        </article>
                    </div>

                </section>

                <div className="button">
                    <button>
                        <p><Link to='/produtos/suinos'>Veja Mais</Link></p>
                        
                    </button>
                </div>

            </section>
        </div>

    )

}

