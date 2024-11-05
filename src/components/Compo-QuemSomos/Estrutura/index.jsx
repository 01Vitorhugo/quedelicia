import './nossaEstrutura.css'
import camara from '../../../imagens/quemSomos/camara.jpeg'
import camaraSeco from '../../../imagens/quemSomos/camaraSeco.jpg'
import resfriada from '../../../imagens/quemSomos/resfriada.jpg'


export default function NossaEstrutura() {

    return (
        <section className='nossaEstrutura'>
            <article>
                <h1>Nossa Estrutura</h1>
            </article>

            <section className='boxEstrutura'>

                <div className='box1'>
                    <h1>Câmara Refriada</h1>

                    <p>
                        Renovamos nossas instalações, ampliação de câmaras frigoríficas, para melhorar ainda mais
                        nosso atendimento.
                    </p>

                    <figure>
                        <img src={resfriada} alt="Câmara Resfriada" />

                    </figure>
                </div>

                <div className='box2'>
                    <figure>
                        <img src={camara} alt="Câmara Congelada" />
                    </figure>

                    <h1>Câmara Congelada</h1>

                    <p>
                        As câmaras frias são responsáveis por manter a temperatura dos produtos congelados,
                        preservando a conservação de alimentos perecíveis. Dessa maneira não há espaços para
                        oscilações de temperatura, garantindo excelência.
                    </p>

                </div>

                <div className='box3'>
                    <h1>Câmara Seca</h1>

                    <p>
                    Concentra-se o nosso estoque de produtos para mercearia.Mantendo o ambiente seco, limpo
                    e organizado para não ocorrer avarias, na qualidade do produto.
                    </p>

                    <figure>
                        <img src={camaraSeco} alt="Câmara Resfriada" />
                    </figure>

                </div>

            </section>

        </section>
    )
}