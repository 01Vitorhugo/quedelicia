import "./app.css";
import RoutsPage from './router'; // Verifique se o caminho está correto
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import imgWhats from './imagens/LogoWhatsApp.svg'

function App() {
  const [heigth, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutsPage />

      {heigth > 150 && (
        <div className="arrow-top">
          <button className="button-icon-top" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z" />
            </svg>
          </button>
        </div>
      )}

      <div className='button-whats'>
        <a href="https://wa.me/551120313812?text=Olá!%20vim%20através%20do%20site%20https://quedelicia.vercel.app/,%20gostaria%20de%20mais%20informações.">
           <img src={imgWhats} alt="logo whatsapp"/>
        </a>
      </div>
    </div>
  );
}

export default App;
