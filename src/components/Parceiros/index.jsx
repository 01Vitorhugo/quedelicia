import './parceiros.css'
import Slider from "react-slick";
import Maria from '../../imagens/parceiros/Logo3Marias.png'
import Angelilli from '../../imagens/parceiros/LogoAngelilli.png'
import Aurora from '../../imagens/parceiros/LogoAurora.png'
import BemBrasil from '../../imagens/parceiros/LogoBemBrasil.webp'
import Friboi from '../../imagens/parceiros/LogoFriboi.png'
import Friella from '../../imagens/parceiros/LogoFriella.webp'
import Marba from '../../imagens/parceiros/LogoMarba.png'
import Perdigao from '../../imagens/parceiros/LogoPerdigao.png'
import Sadia from '../../imagens/parceiros/LogoSadia.png'

export default function Parceiros() {

  var settings = {
    dots: true,
    infinite: false,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='parceiros' >
      <article>
       <h1>Vitrine de Parceiros</h1> 
      </article>

      <div className='box-parceiros'>

        <div className="slider-container">
          <Slider {...settings}>
            <div className='img-parceiro'>
              <img src={Angelilli} alt="Logo Angelilli" title='Angelelli' />
            </div>

            <div className='img-parceiro'>
              <img src={Aurora} alt="Logo Aurora" title='Aurora'/>
            </div>

            <div className='img-parceiro'>
              <img src={BemBrasil} alt="Logo Bem Brasil" title='Bem Brasil'/>
            </div>

            <div className='img-parceiro'>
              <img src={Friboi} alt="Logo Friboi" title='Friboi' />
            </div>

            <div className='img-parceiro'>
              <img src={Friella} alt="Logo Friella" title='Friella' />
            </div>

            <div className='img-parceiro'>
              <img src={Marba} alt="Logo Marba" id='logoMarba' title='Marba'/>
            </div>

            <div className='img-parceiro'>
              <img src={Maria} alt="Logo Maria" title='QueIjos Três Maria' />
            </div>

            <div className='img-parceiro'>
              <img src={Perdigao} alt="Logo Perdigão" title='Perdigão' />
            </div>

            <div className='img-parceiro'>
              <img src={Sadia} alt="Logo Sadia" title='Sadia' />
            </div>
          </Slider>
        </div>

      </div>

    </section >
  )
}