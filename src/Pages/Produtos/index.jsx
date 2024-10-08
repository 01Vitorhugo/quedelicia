import "./pageProdutos.css";
import SubMenu from "../../components/Compo-Produtos/SubMenuProdutos";

import aves from '../../imagens/icons-produtos-submenu/ave.svg'
import aves1 from '../../imagens/aves/Filé-de-Frango.png'
import aves2 from '../../imagens/aves/frango-inteiro.png'
import aves3 from '../../imagens/aves/file-de-coxa.png'
import aves4 from '../../imagens/aves/meio-da-asa.png'
import { Link } from "react-router-dom";

export default function PageProdutos() {

  return (
    <>
      <SubMenu />
      <section className="pageProdutos">
        <article>
          <h1>Nossos Produtos</h1>
        </article>

        <div className="container-produtos">
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
                  <p>Filé de Frango (peito s/ osso)</p>
                </article>
              </div>

              <div className="card-produto">
                <figure>
                  <img src={aves3} alt="imagem aves" />
                </figure>
                <article>
                  <p>Filé de Frango (peito s/ osso)</p>
                </article>
              </div>

              <div className="card-produto">
                <figure>
                  <img src={aves4} alt="imagem aves" />
                </figure>
                <article>
                  <p>Filé de Frango (peito s/ osso)</p>
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


      </section>
    </>
  )
}
