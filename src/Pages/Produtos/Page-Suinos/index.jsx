import './suinos.css'
import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import data from '../../../components/Compo-Produtos/CardProduto/data';
import background from '../../../imagens/suinos/background.png'

export default function Suinos(){

    const suinosProducts = data.cardData.filter(
        (item) => item.category === 'suinos'
    );

    return(
        <>
            <SubMenu/>
            <section className='suinos'>
            <figure className='imagemBackground'>
                        <img src={background} alt="Imagem suinos" />
                    </figure>

                <div className='box-produto-suinos'>
                    {
                        suinosProducts.map((item) => {
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