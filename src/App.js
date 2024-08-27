import "./app.css";
import BannerLogo from './components/BannerHome';
import DescriIcons from './components/Descri-icons';
import RoutsPage from './router';

function App() {
  return (
    <div className="App">
      <RoutsPage/>

      <BannerLogo/>

      <DescriIcons/>
    
    
    </div>
  );
}

export default App;
