import './imageSobreNos.css';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function ImageSobreNos() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".animate", {
            x: 0,
            opacity: 1,
            rotate: 0,
            scrollTrigger:{
                trigger: ".sobreNos",
                markers: false,
                start: "top: 900px",
                end: "bottom: 200px",
                scrub: true

            }
        })

        return () => {
            gsap.killTweensOf(".animate")
        }
    }, [])

    return (
        <section className='sobreNos'>

            <article className='animate'>
                <h1>Nossa História</h1>
                <p>A Que Delícia é uma empresa familiar que teve sua origem em 1980.</p>
                <p>Desde então a Que Delícia vem se destacando no mercado com agilidade de entrega de mercadorias.
                </p>
                <p>
                    Priorizando manter sempre produtos de qualidade, preços competitivos e excelência no atendimento ao cliente.
                </p>
                <p>Considerando-se assim rapidamente no mercado, passando a atender não só
                    o pequeno, mas também o médio e o grande varejista.
                </p>
                <p>Com uma filosofia simples de trabalho, a empresa conta hoje com uma equipe
                    de colaboradores de alto padrão profissional, oferecendo um completo suporte.
                </p>

            </article>
        </section>
    )
}