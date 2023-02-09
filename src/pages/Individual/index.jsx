import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

import "./styles.css";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";

export const Individual = () => {
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [cart, setCart] = useState(getItem("carrinho") || []);

  useEffect(() => {
    const urlAPI = `https://fakestoreapi.com/products/${id}`;
    axios.get(urlAPI).then((response) => setProdutos(response.data));
  }, [id]);

  const handleClick = (obj) => {
    const element = cart.find((produtos) => produtos.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((produtos) => (produtos.id = !obj.id));
      setCart(arrFilter);
      setItem("carrinho", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]);
    }
  };

  return (
    <div className="container-individual">
      <div className="left">
        <img src={produtos.image} alt="" />
      </div>

      <div className="right">
        <h4 className="title">{produtos.title}</h4>
        <h4 className="price">${produtos.price}</h4>
        <button onClick={() => handleClick(produtos)}>
          {cart.some((itemCart) => itemCart.id === produtos.id) ? (
            <BsFillCartCheckFill />
          ) : (
            <BsFillCartPlusFill />
          )}
        </button>
      </div>

      <div className="bottom">
        <h4>
          Description: <span>{produtos.description}</span>
        </h4>
        <h4>
          Category: <span>{produtos.category}</span>
        </h4>
      </div>
    </div>
  );
};
