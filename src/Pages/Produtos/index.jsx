import './pageProdutos.css';

import { Card, Spinner } from "flowbite-react";
import backBovina from '../Produtos/imagens/backgroundBovina.jpg'
import backSuina from '../Produtos/imagens/backgroundSuina.jpg'
import backFrango from '../Produtos/imagens/backgroundFrango.jpg'
import backLactio from '../Produtos/imagens/backgroundLactio.jpg'
import backPeixe from '../Produtos/imagens/backgroundPeixe.jpg'
import { useState, useEffect } from 'react';
import SlideProdutos from '../../components/SliderProdutos/Produtos';

export default function PageProdutos() {

    const [loading, setLoading] = useState(true);
    const [frango, setFrango] = useState([]);
    const [peixe, setPeixe] = useState([]);
    const [lactio, setLactio] = useState([]);
    const [suino, setSuino] = useState([]);
    const [bovino, setBovino] = useState([]);


    const Produtos = async () => {
        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const prodFrango = [
                { name: 'Frangos', back: backFrango }
            ];
            setFrango(prodFrango);

            const prodPeixe = [
                { name: 'Peixes', back: backPeixe }
            ];
            setPeixe(prodPeixe);

            const prodLactio = [
                { name: 'Lactios', back: backLactio }
            ];
            setLactio(prodLactio);

            const prodBovino = [
                { name: 'Bovinos', back: backBovina }
            ];
            setBovino(prodBovino);

            const prodSuino = [
                { name: 'Suinos', back: backSuina }
            ];
            setSuino(prodSuino);

        } catch (error) {
            // setError('Ocorreu um erro ao carregar os produtos.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        Produtos();
    }, []);


    if (loading) {
        return <div className='loading'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>;
    }


    return (
        <section className="pageProdutos">

            <article>
                <h1>Nossos Produtos</h1>
            </article>

            {frango.map((list) => {
                return (
                    <>
                        <section className='boxProdutos'>
                            <figure>
                                <img src={list.back} alt="Capa Frango" />

                                <article>{list.name}</article>
                            </figure>

                        </section>
                        <SlideProdutos/>
                    </>

                )
            })}

            {peixe.map((list) => {
                return (
                    <>
                        <section className='boxProdutos'>
                            <figure>
                                <img src={list.back} alt="Capa Frango" />

                                <article>{list.name}</article>
                            </figure>

                        </section>
                    </>

                )
            })}

            {bovino.map((list) => {
                return (
                    <>
                        <section className='boxProdutos'>
                            <figure>
                                <img src={list.back} alt="Capa Frango" />

                                <article>{list.name}</article>
                            </figure>

                        </section>
                    </>

                )
            })}

            {suino.map((list) => {
                return (
                    <>
                        <section className='boxProdutos'>
                            <figure>
                                <img src={list.back} alt="Capa Frango" />

                                <article>{list.name}</article>
                            </figure>

                        </section>
                    </>

                )
            })}

            {lactio.map((list) => {
                return (
                    <>
                        <section className='boxProdutos'>
                            <figure>
                                <img src={list.back} alt="Capa Frango" />

                                <article>{list.name}</article>
                            </figure>

                        </section>
                    </>

                )
            })}


        </section>
    )
}