import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import './aves.css'
import logo from '../../../imagens/icons-produtos-submenu/ave.svg'
import data from '../../../components/Compo-Produtos/CardProduto/data'


export default function Aves() {

    const avesProducts = data.cardData.filter(
        (item) => item.category === 'aves'
    );

    return (
        <>
            <SubMenu />
            <section className='aves'>
                <article>
                    <h1>Aves</h1>
                    <figure>
                        <img src={logo} alt="logo ave" />
                    </figure>
                </article>

                <div className='box-produto-aves'>
                    {
                        avesProducts.map((item) => {
                            return (
                                <section className='box-produto'>
                                    <figure>
                                        <img src={item.img} alt="imagem produto" />
                                    </figure>

                                    <article>
                                        <p>{item.title}</p>

                                    </article>
                                </section>

                            )

                        })
                    }

                </div>
            </section>
        </>
    )
}