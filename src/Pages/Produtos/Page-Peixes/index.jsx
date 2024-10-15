import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import './peixes.css'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import background from '../../../imagens/peixes/background.png'


export default function Aves() {

    const avesProducts = data.cardData.filter(
        (item) => item.category === 'peixe'
    );

    return (
        <>
            <SubMenu />
            <section className='peixes'>
                    <figure className='imagemBackground'>
                        <img src={background} alt="Imagem peixe" /> 
                    </figure>

                <div className='box-produto-peixe'>
                    {
                        avesProducts.map((item) => {
                            return (
                                <section className='box-produto' key={item.id}>
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