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

export default function RoutsPage() {

    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<PageProdutos/> } />
                <Route path="/aves" element={ <Aves/> } />
                <Route path="/congelados" element={<Congelados/> } />
                <Route path="/conservas" element={<Conservas/> } />
                <Route path="/bovinos" element={<Bovinos/> } />
                <Route path="/feijoada" element={ <Feijoada/> } />
                <Route path="/frios" element={<Frios/> } />
                <Route path="/peixes" element={ <Peixes/>} />
                <Route path="/suinos" element={ <Suinos/>} />
            </Routes>
        </BrowserRouter>

        )
}