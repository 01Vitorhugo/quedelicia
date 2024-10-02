import "./pageProdutos.css";
import CardProduto from "../../components/Compo-Produtos/CardProduto";
import data from "../../components/Compo-Produtos/CardProduto/data";
import SubMenu from "../../components/Compo-Produtos/SubMenuProdutos";

export default function PageProdutos() {


  
  const frangoProducts = data.cardData.filter(
    (item) => item.category === "frango"
  );
  const peixeProducts = data.cardData.filter(
    (item) => item.category === "peixe"
  );
  const suinoProducts = data.cardData.filter(
    (item) => item.category === "suino"
  );
  const lactioProducts = data.cardData.filter(
    (item) => item.category === "lactio"
  );
  const bovinoProducts = []; 




  return (
    <>
    <SubMenu/>
    <section className="pageProdutos">
      <article>
        <h1>Nossos Produtos</h1>
      </article>

     
          <CardProduto produtos={frangoProducts} />{" "}
          <CardProduto produtos={peixeProducts} />{" "}
          <CardProduto produtos={bovinoProducts} />{" "}
          <CardProduto produtos={suinoProducts} />{" "}
          <CardProduto produtos={lactioProducts} />{" "}
          
        </section>
    </>
  )
}
