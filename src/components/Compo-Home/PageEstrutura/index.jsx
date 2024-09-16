import './estrutura.css';

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
            <h1>Componente ESTRUTURA</h1>
          
          
        </section>
    )
}