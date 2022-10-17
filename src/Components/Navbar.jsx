import { NavLink } from "react-router-dom";
import { ProductContext } from "../Context/PizzasProvider";
import { useContext } from "react";

export default function Navbar() {
  const setPizzeria = ({ isActive }) => (isActive ? "active" : "no-active");
  const { cartProduct } = useContext(ProductContext);

  return (
    <nav>
      <div className="navbar1">
        <NavLink className={setPizzeria} end to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706918.png"
            width="50px"
            alt="icono de pizza en una caja cuadrada"
          />
          Pizzería Mamma Mía
        </NavLink>
        {" - "}
        <NavLink className={setPizzeria} to="/Cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            width="50px"
            alt="icono de carro de supermercado"
          />
          Carrito de Compra
        </NavLink>
        <h3 className="result">
          Total Pedido $
          {cartProduct
            .map((item) => item.price * item.amount)
            .reduce((prev, curr) => prev + curr, 0)
            .toLocaleString("de-DE")}
        </h3>
        <h3 className="amount">{cartProduct.length}</h3>
      </div>
    </nav>
  );
}
