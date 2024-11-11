import './bovinos.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import background from '../../../imagens/bovinos/backgroung.png'
import ButtonBack from '../../../components/ButtonBack'


export default function Bovinos() {

    const bovinosProducts = data.cardData.filter(
        (item) => item.category === 'bovinos'
    );

    return (
        <>
            <SubMenu />
            <section className='bovinos'>
                <figure className='imagemBackground'>
                    <img src={background} alt="Imagem bovinos" />
                </figure>
                <ButtonBack/>

                <div className='box-produto-bovinos'>
                    {
                        bovinosProducts.map((item) => {
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