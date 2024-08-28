import "./bannerHome.css";
import banner1 from "../../imagens/img-banner/bannerCarousel.png";
import banner2 from "../../imagens/estrutura/camaraSeco.jpg";
import banner3 from "../../imagens/estrutura/carrosGrandes.jpg";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
// import { useState } from "react";

export default function BannerLogo() {
 

    return (
             
        <section className="imgageCarousel">
            <CCarousel controls transition="crossfade">
                <CCarouselItem>
                    <CImage className="d-block w-100" src={banner1} alt="slide 1" id="imageCarousel"/>
                </CCarouselItem>
                <CCarouselItem>
                <CImage className="d-block w-100" src={banner2} alt="slide 2" id="imageCarousel"/>
                </CCarouselItem>
                <CCarouselItem>
                <CImage className="d-block w-100" src={banner3} alt="slide 3" id="imageCarousel"/>
                </CCarouselItem>
            </CCarousel>

        </section>
        
    )
}