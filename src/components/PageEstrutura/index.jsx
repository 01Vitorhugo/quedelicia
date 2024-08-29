import './estrutura.css';
import ImagePhone from '../../imagens/estrutura/imgPhone.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function Estrutura() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#box-box1", {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".estrutura",
                markers: false,
                start: "top: 400px",
                end: "bottom: 700px",
                scrub: true

            }
        })

        return () => {
            gsap.killTweensOf("#box-box1")
        }
    }, [])

    return (
        <section className='estrutura'>

            <div className='box-estrutura'>
                <div className='imageCarroGrande' id='box-box1'>
                    <aside>Frota - Carros Grandes</aside>
                </div>

                <div className='imageFiorino' id='box-box1'>
                    <aside>Frota - Fiorinos</aside>
                </div>
            </div>

            <div className='box-estrutura'>
                <aside className='box-central'>
                    <h1>Estrutura</h1>
                    <p>Frotas - Câmaras Frigorificas</p>
                </aside>

                <figure className='animation-central'>
                    <img src={ImagePhone} alt="Imagem telefone" />
                </figure>

            </div>
            <div className='box-estrutura'>
                <div className='imageCamara animate' id='box-box1'>
                    <aside>Câmara de Congelados</aside>
                </div>

                <div className='imageCamaraSeco animate' id='box-box1'>
                    <aside>Câmara de Seco</aside>
                </div>


            </div>

        </section>
    )
}