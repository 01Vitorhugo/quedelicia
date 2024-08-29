import './produtos.css';
import Mocoto from '../../imagens/produtos/mocoto.png';
import Bucho from '../../imagens/produtos/bucho-bovino.png';
import Figado from '../../imagens/produtos/figado.png';
import Frango from '../../imagens/produtos/frango.png';
import Linguica from '../../imagens/produtos/linguica.png';
import Queijo from '../../imagens/produtos/queijo.png';
import Tilapia from '../../imagens/produtos/tilapia.png';
import Batata from '../../imagens/produtos/batata.png';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';


export default function Produtos() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".prod", {
            x: 0,
            opacity: 1,
            rotate: 0,
            scrollTrigger:{
                trigger: ".descri-produtos",
                markers: false,
                start: "top: 900px",
                end: "bottom: 200px",
                scrub: true

            }
        })

        return () => {
            gsap.killTweensOf(".prod")
        }
    }, [])

    function mensage(){
        alert('Colocar todos os produtos da página de PRODUTOS');
    }

    return (
        <section className='produtos'>
            <article>
                <h1>Principais Produtos</h1>
            </article>

            <div className='descri-produtos'>
                <section>
                    <div className='prod'>
                        <figure>
                            <img src={Mocoto} alt="Mocotó Bovino" />
                        </figure>
                        <article>
                            <h1>Mocotó Bovino</h1>
                        </article>

                    </div>

                    <div className='prod'>
                        <figure>
                            <img src={Bucho} alt="Bucho Bovino" id='style-image' />
                        </figure>
                        <article>
                            <h1>Bucho Bovino</h1>
                        </article>
                    </div>
                    <div className='prod'>
                        <figure>
                            <img src={Figado} alt="Figado Bovino" />
                        </figure>
                        <article>
                            <h1>Figado Bovino</h1>
                        </article>
                    </div>
                    <div className='prod'>
                        <figure>
                            <img src={Frango} alt="Frango Congelado" id='style-image' />
                        </figure>
                        <article>
                            <h1>Frango Congelado</h1>
                        </article>
                    </div>

                </section>

                    {/* Segundo linha dos itens */}

                <section>
                    <div className='prod'>
                        <figure>
                            <img src={Linguica} alt="Linguiça Toscana" />
                        </figure>
                        <article>
                            <h1>Linguiça Toscana</h1>
                        </article>

                    </div>

                    <div className='prod'>
                        <figure>
                            <img src={Queijo} alt="Queijo Mussarela" />
                        </figure>
                        <article>
                            <h1>Queijo Mussarela</h1>
                        </article>
                    </div>
                    <div className='prod'>
                        <figure>
                            <img src={Tilapia} alt="Filé de Tilapia" id='style-image' />
                        </figure>
                        <article>
                            <h1>Filé de Tilápia</h1>
                        </article>
                    </div>
                    <div className='prod'>
                        <figure>
                            <img src={Batata} alt="Batata Congelada" id='style-image'/>
                        </figure>
                        <article>
                            <h1>Batata Congelada</h1>
                        </article>
                    </div>

                </section>

            </div>

            <section className='button'>
                <button onClick={mensage}>Ver mais</button>
            </section>


        </section>
    )
}