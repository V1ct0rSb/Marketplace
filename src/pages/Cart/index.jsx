import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";

import "./styles.css";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

export const Cart = () => {
  const [data, setData] = useState(getItem("carrinho") || []);
  const history = useHistory();

  const handleClick = () => {
    if (subTotal > 0) {
      history.push(`/payment/${subTotal}`);
      setItem("carrinho", []);
    }
  };

  const removeItem = (obj) => {
    const arrFilter = data.filter((produto) => produto.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="container-cart">
      <h1>Cart</h1>
      <h3>{`SubTotal: $${subTotal.toFixed(2)}`}</h3>
      <div className="catalog">
        {data.map((produto) => (
          <div key={produto.id} className="cart-product">
            <img src={produto.image} alt={produto.title} />
            <h4>{produto.title}</h4>
            <h4>{`$${produto.price}`}</h4>
            <button onClick={() => removeItem(produto)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </div>
      <button
        className="button-cart"
        disabled={subTotal <= 0}
        onClick={handleClick}
      >
        Buy
      </button>
    </div>
  );
};
