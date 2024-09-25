import './slide-produtos.css'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules"; 
import Frango from "../../../imagens/produtos/frango.png";

const SlideProdutos = () => {
  const products = [
    { id: 1, name: "Frango resfriado", image: Frango },
    { id: 2, name: "Frango resfriado", image: Frango },
    { id: 3, name: "Frango resfriado", image: Frango },
    { id: 4, name: "Frango resfriado", image: Frango },
    { id: 5, name: "Frango resfriado", image: Frango },
  ];

  return (
    <div className="container swiper" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        loop={true} 
        className="slide-container"
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card">
              <div className="image-box">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <div className="name-product">
                  <h3 className="name">{product.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SlideProdutos;
