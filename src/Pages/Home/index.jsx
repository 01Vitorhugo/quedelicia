import Atendimento from "../../components/Compo-Home/Atendimentos";
import BannerLogo from "../../components/Compo-Home/BannerHome";
import DescriIcons from "../../components/Compo-Home/Descri-icons";
import Estrutura from "../../components/Compo-Home/Estrutura";
import Parceiros from "../../components/Compo-Home/Parceiros";
import Produtos from "../../components/Compo-Home/Produtos";


export default function Home(){
    return(
        <>
        <BannerLogo/>
        <DescriIcons/>
        <Produtos/>
        <Atendimento/>
        <Estrutura/>
        <Parceiros/>
        </>
    )
}