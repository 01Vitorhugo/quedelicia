import './estrutura.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

import Ducato from '../../../imagens/estrutura/ducato.png'
import Fiorino from '../../../imagens/estrutura/fiorino.png'
import Caminhao from '../../../imagens/estrutura/caminhao.png'

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
                <article><h1>Nossa estrutura</h1></article>

                </div>
            </section>



        </section>
    )
}