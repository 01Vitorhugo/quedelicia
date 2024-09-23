import "./bannerHome.css";
import banner2 from "../../../imagens/teste2.png"
import banner22 from "../../../imagens/teste22.png"
import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from 'react';


export default function BannerLogo() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const images = [banner22, banner2, banner22, banner2];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (

        <section className="imgageCarousel" >
            <Carousel className="car">

                {screenWidth <= 756 ? (
                    <>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="Banner Atendimento" id="imageCarousel" />
                        ))}
                    </>
                ) : (
                    <>
                        <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />

                        <img src={banner22} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner22} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner22} alt="Banner Atendimento" id="imageCarousel" />
                        <img src={banner22} alt="Banner Atendimento" id="imageCarousel" />
                    </>
                )}
            </Carousel>

        </section>

    )
}