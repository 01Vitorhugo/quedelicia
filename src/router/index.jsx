import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "../components/Navbar";
import PageProdutos from "../Pages/Produtos";
import Home from "../Pages/Home";
import Aves from "../Pages/Produtos/Page-Aves";
import Congelados from "../Pages/Produtos/Page-Congelados";
import Conservas from "../Pages/Produtos/Page-Conservas";
import Bovinos from "../Pages/Produtos/Page-CortesBovinos";
import Feijoada from "../Pages/Produtos/Page-Feijoada";
import Frios from "../Pages/Produtos/Page-Frios";
import Peixes from "../Pages/Produtos/Page-Peixes";
import Suinos from "../Pages/Produtos/Page-Suinos";
import ScrollToTop from "../components/ScrollTop"; 
// import Muidos from "../Pages/Produtos/Page-Muidos";
import Contato from "../Pages/Contato";
import FooterMain from "../components/Footer";
import PageNotFound from "../components/PageNotFound";
import QuemSomos from "../Pages/QuemSomos";

export default function RoutsPage() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Menu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<PageProdutos />} />
                <Route path="/produtos/aves" element={<Aves />} />
                {/* <Route path="/produtos/muidos" element={< />} /> */}
                <Route path="/produtos/congelados" element={<Congelados />} />
                <Route path="/produtos/conservas" element={<Conservas />} />
                <Route path="/produtos/miudos" element={<Muidos />} />
                <Route path="/produtos/feijoada" element={<Feijoada />} />
                <Route path="/produtos/frios" element={<Frios />} />
                <Route path="/produtos/peixes" element={<Peixes />} />
                <Route path="/produtos/suinos" element={<Suinos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/quem-somos" element={<QuemSomos/> }/>
                <Route path="*" element={<PageNotFound/>} />
            </Routes>

            <FooterMain />
        </BrowserRouter>
    );
}
