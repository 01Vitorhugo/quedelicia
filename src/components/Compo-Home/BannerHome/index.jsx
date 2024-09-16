import "./bannerHome.css";
import banner2 from "../../../imagens/teste2.png"
import { Carousel } from "flowbite-react";


export default function BannerLogo() {


    return (

        <section className="imgageCarousel" >
            <Carousel className="car">
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" style={{ borderRadius: '0' }}/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." style={{ borderRadius: '0' }}/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." style={{ borderRadius: '0' }}/>
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." style={{ borderRadius: '0' }}/>
            </Carousel>

        </section>

    )
}