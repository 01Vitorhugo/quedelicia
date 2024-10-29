import './frios.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import background from '../../../imagens/lacteos/background.png'
import data from '../../../components/Compo-Produtos/CardProduto/data';

export default function Frios(){
    const friosProducts = data.cardData.filter(
        (item) => item.category === 'frios'
    );

    return(
        <>
            <SubMenu/>
            <section className='frios'>
            <figure className='imagemBackground'>
                        <img src={background} alt="Imagem frios" />
                    </figure>

                <div className='box-produto-frios'>
                    {
                        friosProducts.map((item) => {
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