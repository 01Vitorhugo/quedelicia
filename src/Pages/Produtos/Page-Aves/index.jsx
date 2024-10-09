import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import './aves.css'
import background from '../../../imagens/aves/background.png'
import data from '../../../components/Compo-Produtos/CardProduto/data'


export default function Aves() {

    const avesProducts = data.cardData.filter(
        (item) => item.category === 'aves'
    );

    return (
        <>
            <SubMenu />
            <section className='aves'>
                    <figure className='imagemBackground'>
                        <img src={background} alt="Imagem aves" />
                    </figure>

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