import './congelados.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import background from '../../../imagens/congelados/background.png'


export default function Bovinos(){

    const bovinosProducts = data.cardData.filter(
        (item) => item.category === 'congelados'
    );

    return(
        <>
            <SubMenu/>
            <section className='congelados'>
            <figure className='imagemBackground'>
                        <img src={background} alt="Imagem congelados" />
                    </figure>

                <div className='box-produto-congelados'>
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