import "./app.css";
import BannerLogo from './components/BannerHome';
import DescriIcons from './components/Descri-icons';
import ImageSobreNos from "./components/ImageSobreNos";
import RoutsPage from './router';

function App() {
  return (
    <div className="App">
      <RoutsPage/>

      <BannerLogo/>

      <DescriIcons/>

      <ImageSobreNos/>
    
    
    </div>
  );
}

export default App;
