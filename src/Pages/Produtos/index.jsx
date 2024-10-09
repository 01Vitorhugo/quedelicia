import "./pageProdutos.css";
import SubMenu from "../../components/Compo-Produtos/SubMenuProdutos";


import CompoAves from "../../components/Compo-Produtos/CompoAves";
import CompoBovinos from "../../components/Compo-Produtos/CompoBovinos";

export default function PageProdutos() {

  return (
    <>
      <SubMenu />
      <section className="pageProdutos">
        <article>
          <h1>Nossos Produtos</h1>
        </article>

        <CompoAves/>
        <CompoBovinos/>

       


      </section>
    </>
  )
}
