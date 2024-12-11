import './misVisVal.css'
import missao from '../../../imagens/icons/missao.png'
import visao from '../../../imagens/icons/visao.png'
import valor from '../../../imagens/icons/valores.png'

export default function MisVisVal() {

    return (
        <section className='missEmpresa'>

            <div className='missao'>
                <figure>
                    <img src={missao} alt="" />
                    <h1>Missão</h1>
                </figure>
                <p>
                    Oferecer o melhor custo beneficio, fazendo assim com que o seu comercio lucre ainda mais.
                </p>
            </div>

            <div className='visao'>
                <figure>
                    <img src={visao} alt="" />
                    <h1>visão</h1>
                </figure>
                <p>
                    Expandir a qualidade de serviço sendo referencia em atendimento ao cliente e tempo de
                    entrega em até 24hrs
                </p>
            </div>

            <div className='valor'>
                <figure>
                    <img src={valor} alt="" />
                    <h1>valores</h1>
                </figure>
                <p>
                    Trabalhando com transparência e responsabilidade para com os nossos clientes, alinhando
                    sempre qualidade e prazo de entregas.
                </p>

            </div>

        </section>
    )
}