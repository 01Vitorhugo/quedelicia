import SubMenu from "../../../components/Compo-Produtos/SubMenuProdutos";
import './muidos.css'
import background from '../../../imagens/miudos/background.png'
import data from "../../../components/Compo-Produtos/CardProduto/data";
import ButtonBack from '../../../components/ButtonBack'


export default function Muidos() {

    const bovinosProducts = data.cardData.filter(
        (item) => item.category === 'muidos'
    );

    return (
        <>
            <SubMenu />
            <section className='muidos'>
                <figure className='imagemBackground'>
                    <img src={background} alt="Imagem muidos" />
                </figure>
                    <ButtonBack/>

                <div className='box-produto-muidos'>
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