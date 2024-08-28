import { useState } from "react";
import "./app.css";
import BannerLogo from './components/BannerHome';
import DescriIcons from './components/Descri-icons';
import ImageSobreNos from "./components/ImageSobreNos";
import Estrutura from "./components/PageEstrutura";
import RoutsPage from './router';
import { animateScroll as scroll } from 'react-scroll';

function App() {

  const [setaScroll, setSetaScrollY] = useState(0);

  function getScroll() {
    setSetaScrollY(window.scrollY);
  }
  window.addEventListener('scroll', getScroll);

  function GoTop() {
    scroll.scrollToTop();
  }

  return (
    <div className="App">
      <RoutsPage />

      <BannerLogo />

      <DescriIcons />

      <ImageSobreNos />

      <Estrutura />



      {setaScroll > 180 &&
        <div className="scroll">
          <button onClick={GoTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
          </button>
        </div>
      }


    </div>
  );
}

export default App;
