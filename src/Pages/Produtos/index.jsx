import "./pageProdutos.css";
import SubMenu from "../../components/Compo-Produtos/SubMenuProdutos";


import CompoAves from "../../components/Compo-Produtos/CompoAves";
import CompoBovinos from "../../components/Compo-Produtos/CompoBovinos";
import CompoSuinos from "../../components/Compo-Produtos/CompoSuinos";
import CompoCongelados from "../../components/Compo-Produtos/CompoCongelados";
import CompoPeixes from "../../components/Compo-Produtos/CompoPeixe";
import CompoConservas from "../../components/Compo-Produtos/CompoConservas";
import CompoFeijoada from "../../components/Compo-Produtos/CompoFeijoada";
import CompoFrios from "../../components/Compo-Produtos/CompoFrios";

export default function PageProdutos() {

  return (
    <>
      <SubMenu />
      <section className="pageProdutos">
        <article className="texto-pageProdutos">
          <h1>Nossos Produtos</h1>
        </article>

        <CompoAves/>
        <CompoBovinos/>
        <CompoSuinos/>
        <CompoFrios/>
        <CompoCongelados/>
        <CompoPeixes/>
        <CompoConservas/>
        <CompoFeijoada/>

       


      </section>
    </>
  )
}
