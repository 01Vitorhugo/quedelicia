import './estrutura.css';
import Fiorino from '../../imagens/estrutura/fiorino.png'
import Caminhao from '../../imagens/estrutura/caminhao.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function Estrutura() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".fiorino", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".estrutura",
                markers: false,
                start: "top: 900px",
                end: "bottom: 700px",
                scrub: true

            }
        })

        return () => {
            gsap.killTweensOf(".fiorino")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".caminhao", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".estrutura",
                markers: false,
                start: "top: 900px",
                end: "bottom: 700px",
                scrub: true

            }
        })

        return () => {
            gsap.killTweensOf(".caminhao")
        }
    }, [])




    return (
        <section className='estrutura'>
            <article>
                <h1>Nossa estrutura</h1>
            </article>

            <div className='fiorino'>
                <img src={Fiorino} alt="estrutura fiorino" />
                <article>
                    <h2>Frotas - Carros pequenos</h2>
                    <h3>Fiorinos</h3>
                    <h3>Doblos</h3>
                </article>
            </div>

            <div className='caminhao'>
                <article>
                    <h2>Frotas - Carros Grandes</h2>
                    <h3>Caminhões</h3>
                </article>
                <img src={Caminhao} alt="estrutura caminhão" />
            </div>

                <button><a href="#">Agregue seu veículo </a></button>
        </section>
    )
}