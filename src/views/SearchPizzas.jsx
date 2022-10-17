import React, { useContext } from "react";
import { ProductContext } from "../Context/PizzasProvider";
import { useParams } from "react-router-dom";

const DetailsPizza = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  return (
    <div>
      <div>
        <h1>Total</h1>
      </div>

      <div className="container-images">
        {console.log(product)}
        {product
          .filter((a) => a.id === id)
          .map((e) => (
            <div className="image-desc">
              <img src={e.img} alt="" />
              <div className="nameamount">
                <hr className="line"></hr>
                <p> {e.name}</p>
                <hr className="line"></hr>
              </div>
              <div className="containerbox">
                <p>{e.desc}</p>
              </div>
              <h3>Ingredientes</h3>
              <h4>🍕{e.ingredients[0]}</h4>
              <h4>🍕{e.ingredients[1]}</h4>
              <h4>🍕{e.ingredients[2]}</h4>
              <h4>🍕{e.ingredients[3]}</h4>
              <h2>${e.price}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailsPizza;
