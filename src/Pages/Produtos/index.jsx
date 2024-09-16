import './pageProdutos.css'
import { Card } from "flowbite-react";
import back from '../Produtos/imagens/backgroundBovina.jpg'


export default function PageProdutos() {

    const produtosSuinos = [
        { name: 'Suinos', back: back}
     
    ]

    return (
        <section className="pageProdutos">
            <h1>Produtos</h1>

            {produtosSuinos.map((list) => {
                return (
                    <section className='listProdutos'>
                        <div className='background'>
                            <img src={list.back} alt="Foto Capa" />
                            <article>{list.name}</article>
                        </div>

                        <div className='cardProdutos'>
                            <Card
                                className="max-w-sm"
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={list.back}
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>

                         

                        </div>
                    </section>
                )


            })}

        </section>
    )
}