import SubMenu from '../../../components/Compo-Produtos/SubMenuProdutos'
import './aves.css'
import background from '../../../imagens/aves/background.png'
import data from '../../../components/Compo-Produtos/CardProduto/data'
import ButtonBack from '../../../components/ButtonBack'


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
                    <ButtonBack/>

                <div className='box-produto-aves'>
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