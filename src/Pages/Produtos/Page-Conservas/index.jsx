import './conservas.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import background from '../../../imagens/conservas/background.png'
import ButtonBack from '../../../components/ButtonBack'


export default function ConservasSecos(){

    const bovinosProducts = data.cardData.filter(
        (item) => item.category === 'conservas-secos'
    );

    return(
        <>
            <SubMenu/>
            <section className='conservas'>
            <figure className='imagemBackground'>
                        <img src={background} alt="Imagem conservas" />
                    </figure>
                    <ButtonBack/>

                <div className='box-produto-conservas'>
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