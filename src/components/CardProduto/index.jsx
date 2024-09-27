import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './cardproduto.css';

const CardProduto = ({ produtos }) => {
  const [noOfElement, setNoOfElement] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const loadMore = () => {
    if (showAll) {
      setNoOfElement(3); 
    } else {
      setNoOfElement(produtos.length); 
    }
    setShowAll(!showAll); 
  };

  const displayedProducts = produtos.slice(0, noOfElement);

  if (!produtos || produtos.length === 0) {
    return <div>Nenhum produto disponível</div>;
  }

  return (
    <section className="CardProdutos">
      <TransitionGroup className="listing">
        <CSSTransition key="slider" timeout={500} classNames="fade">
          <div className="wrapper">
            {displayedProducts.map((item) => (
              <div className="product-area" key={item.id}>
                <div className="img-area">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="info-area">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Verifique se o botão é renderizado */}
      {produtos.length > 4 && (
        <button className="button-view" onClick={loadMore}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arr-2"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text"> {showAll ? 'ver menos' : 'ver mais'}</span>
          <span className="circle"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arr-1"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      )}
    </section>
  );
};

export default CardProduto;
