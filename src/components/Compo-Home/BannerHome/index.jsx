import "./bannerHome.css";
import banner1 from "../../../imagens/bannerFood.png"
import banner2 from "../../../imagens/bannerAlimentos.png"
import { Carousel } from "flowbite-react";


export default function BannerLogo() {


    return (

        <section className="imgageCarousel" >
            <Carousel className="car">
                <img src={banner1} alt="Banner Atendimento" id="imageCarousel" />
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                {/* <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />
                <img src={banner2} alt="Banner Atendimento" id="imageCarousel" />  */}
            </Carousel>

        </section>

    )
}