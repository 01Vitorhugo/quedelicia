import "./pageProdutos.css";
import { Card, Spinner } from "flowbite-react";
import backBovina from "../Produtos/imagens/backgroundBovina.jpg";
import backSuina from "../Produtos/imagens/backgroundSuina.jpg";
import backFrango from "../Produtos/imagens/backgroundFrango.jpg";
import backLactio from "../Produtos/imagens/backgroundLactio.jpg";
import backPeixe from "../Produtos/imagens/backgroundPeixe.jpg";
import { useState, useEffect } from "react";
import CardProduto from "../../components/CardProduto";
import data from "../../components/CardProduto/data";

export default function PageProdutos() {
  const [loading, setLoading] = useState(true);
  const [frango, setFrango] = useState([]);
  const [peixe, setPeixe] = useState([]);
  const [lactio, setLactio] = useState([]);
  const [suino, setSuino] = useState([]);
  const [bovino, setBovino] = useState([]);

  const Produtos = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      const prodFrango = [{ name: "Frangos", back: backFrango }];
      setFrango(prodFrango);

      const prodPeixe = [{ name: "Peixes", back: backPeixe }];
      setPeixe(prodPeixe);

      const prodLactio = [{ name: "Lactios", back: backLactio }];
      setLactio(prodLactio);

      const prodBovino = [{ name: "Bovinos", back: backBovina }];
      setBovino(prodBovino);

      const prodSuino = [{ name: "Suinos", back: backSuina }];
      setSuino(prodSuino);
    } catch (error) {
      console.error("Ocorreu um erro ao carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Produtos();
  }, []);


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

  if (loading) {
    return (
      <div className="loading">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <section className="pageProdutos">
      <article>
        <h1>Nossos Produtos</h1>
      </article>

      
      {frango.map((list) => (
        <section className="boxProdutos" key={list.name}>
          <figure>
            <img src={list.back} alt="Capa Frango" />
            <article>{list.name}</article>
          </figure>
          <CardProduto produtos={frangoProducts} />{" "}
          
        </section>
      ))}

      
      {peixe.map((list) => (
        <section className="boxProdutos" key={list.name}>
          <figure>
            <img src={list.back} alt="Capa Peixe" />
            <article>{list.name}</article>
          </figure>
          <CardProduto produtos={peixeProducts} />{" "}
          
        </section>
      ))}

      
      {bovino.map((list) => (
        <section className="boxProdutos" key={list.name}>
          <figure>
            <img src={list.back} alt="Capa Bovino" />
            <article>{list.name}</article>
          </figure>
          <CardProduto produtos={bovinoProducts} />{" "}
          
        </section>
      ))}

      
      {suino.map((list) => (
        <section className="boxProdutos" key={list.name}>
          <figure>
            <img src={list.back} alt="Capa Suíno" />
            <article>{list.name}</article>
          </figure>
          <CardProduto produtos={suinoProducts} />{" "}
          
        </section>
      ))}

      
      {lactio.map((list) => (
        <section className="boxProdutos" key={list.name}>
          <figure>
            <img src={list.back} alt="Capa Láctio" />
            <article>{list.name}</article>
          </figure>
          <CardProduto produtos={lactioProducts} />{" "}
          
        </section>
      ))}
    </section>
  );
}
