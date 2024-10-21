import './estrutura.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

import Ducato from '../../../imagens/estrutura/ducato.png'
import Fiorino from '../../../imagens/estrutura/fiorino.png'
import Caminhao from '../../../imagens/estrutura/caminhao.png'

import IconFrete from '../../../imagens/icons/iconFrete.png'
import IconEntrega from '../../../imagens/icons/iconEntrega.png'
import IconFrota from '../../../imagens/icons/iconFrota.png'
import IconQualidade from '../../../imagens/icons/iconQualidade.png'
import { Link } from 'react-router-dom';

export default function Estrutura() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".fiorino", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".veiculos",
                markers: false,
                start: "top 500px",
                end: "bottom 900px",
                scrub: true,

            }
        });

        return () => {
            gsap.killTweensOf(".fiorino")
        };
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".ducato", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".veiculos",
                markers: false,
                start: "top 500px",
                end: "bottom 900px",
                scrub: true,

            }
        });

        return () => {
            gsap.killTweensOf(".ducato")
        };
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".caminhao", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".veiculos",
                markers: false,
                start: "top 500px",
                end: "bottom 900px",
                scrub: true,

            }
        });

        return () => {
            gsap.killTweensOf(".caminhao")
        };
    }, [])




    return (
        <section className='estrutura'>


            <section className='conteudo'>
                <div className='veiculos'>
                    <img src={Fiorino} alt="Fiorino" className='fiorino' />
                    <img src={Ducato} alt="Ducato" className='ducato' />
                    <img src={Caminhao} alt="Caminhão" className='caminhao' />
                </div>
                <div className='texto'>
                    <article><h1>Nossa Logística</h1></article>

                    <div className='conteudoTexto'>
                        <section className='boxConteudo'>
                            <figure>
                                <img src={IconEntrega} alt='Icone entrega' />
                            </figure>

                            <article>
                                <h2>Entregas em até 24h</h2>
                                <p>Serviço de entregas rápidas e eficientes</p>
                            </article>

                        </section>

                        <section className='boxConteudo'>
                            <figure>
                                <img src={IconFrete} alt='Icone entrega' />
                            </figure>

                            <article>
                                <h2>Frete Gratuito</h2>
                                <p>Entregamos sem custo em todas as compras realizadas</p>
                            </article>

                        </section>

                        <section className='boxConteudo'>
                            <figure>
                                <img src={IconFrota} alt='Icone entrega' />
                            </figure>

                            <article>
                                <h2>Frota de Veículos Refrigerados </h2>
                                <p>(Caminhao, Ducatos, Doblôs e Fiorinos).</p>
                            </article>

                        </section>

                        <section className='boxConteudo'>
                            <figure>
                                <img src={IconQualidade} alt='Icone entrega' className='iconQualidade' />
                            </figure>

                            <article>
                                <h2>Compromisso e Qualidade</h2>
                                <p>Garantimos a entrega confiável e eficiente de produtos <br />
                                    perecíveis, ideal para produtos sensíveis à temperatura.
                                </p>
                            </article>

                        </section>


                    </div>

                    <div className='button'>
                     
                            <button className="button-view">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text"><Link to='contato'> Agregue seu veículo refrigerado</Link></span>
                                <span className="circle"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button>

                       

                    </div>

                </div>
            </section>



        </section>
    )
}