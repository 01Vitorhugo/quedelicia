import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "../components/Navbar";
import PageProdutos from "../Pages/Produtos";
import Home from "../Pages/Home";

export default function RoutsPage() {

    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={ <PageProdutos/>} />
                
            </Routes>
        </BrowserRouter>

        )
}