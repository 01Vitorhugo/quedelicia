import "./bannerHome.css";
import banner2 from "../../../imagens/teste2.png"
import { Carousel } from "flowbite-react";


export default function BannerLogo() {


    return (

        <section className="imgageCarousel" >
            <Carousel className="car">
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
            </Carousel>

        </section>

    )
}