import './feijoada.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import background from '../../../imagens/feijoada/background.png'


export default function ConservasSecos(){

    const bovinosProducts = data.cardData.filter(
        (item) => item.category === 'feijoada'
    );

    return(
        <>
            <SubMenu/>
            <section className='feijoada'>
            <figure className='imagemBackground'>
                        <img src={background} alt="Imagem feijoada" />
                    </figure>

                <div className='box-produto-feijoada'>
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