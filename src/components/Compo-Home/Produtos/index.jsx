import "./produtos.css";
import Mocoto from "../../../imagens/produtos/mocoto.png";
import Bucho from "../../../imagens/produtos/bucho-bovino.png";
import Figado from "../../../imagens/produtos/figado.png";
import Frango from "../../../imagens/produtos/frango.png";
import Linguica from "../../../imagens/produtos/linguica.png";
import Queijo from "../../../imagens/produtos/queijo.png";
import Tilapia from "../../../imagens/produtos/tilapia.png";
import Batata from "../../../imagens/produtos/batata.png";
import Slider from "react-slick";

export default function Produtos() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="produtos">
      <article>
        <h1>Produtos em destaque</h1>
      </article>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="carrossel-produto">
            <img src={Figado} alt="" srcset="" />
            <span>Figado Bovino</span>
          </div>

          <div className="carrossel-produto">
            <img src={Bucho} alt="" srcset="" />
            <span>Bucho Bovino</span>
          </div>

          <div className="carrossel-produto" id="ajuste-foto">
            <img src={Frango} alt="" id="ajuste-foto" />
            <span>Frango Congelado</span>
          </div>

          <div className="carrossel-produto">
            <img src={Linguica} alt="" srcset="" />
            <span>Linguiça Toscana</span>
          </div>

          <div className="carrossel-produto">
            <img src={Mocoto} alt="" srcset="" />
            <span>Mocotó Bovino</span>
          </div>

          <div className="carrossel-produto">
            <img src={Queijo} alt="" srcset="" />
            <span>Queijo Mussarela</span>
          </div>

          <div className="carrossel-produto">
            <img src={Tilapia} alt="" />
            <span>Filé de Tilápia</span>
          </div>

          <div className="carrossel-produto">
            <img src={Batata} alt="" id="ajuste-foto" />
            <span>Batata Congelada</span>
          </div>
        </Slider>
      </div>

      <button className="button-verMais">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">Veja todos produtos</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
    </section>
  );
}