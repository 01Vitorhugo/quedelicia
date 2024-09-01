import "./bannerHome.css";
import banner1 from "../../imagens/img-banner/bannerCarousel.png";
import banner2 from "../../imagens/estrutura/camaraSeco.jpg";
import banner3 from "../../imagens/estrutura/carrosGrandes.jpg";
import { Carousel } from "flowbite-react";


export default function BannerLogo() {


    return (

        <section className="imgageCarousel h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>


        </section>

    )
}