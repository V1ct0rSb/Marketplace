import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles.css";

const fetchProducts = async () => {
  try {
    const urlAPI = "https://fakestoreapi.com/products";
    const response = await axios.get(urlAPI);
    return response.data;
  } catch (e) {
    return e;
  }
};

export const Store = () => {
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      if (products instanceof Error) {
        setError(products.message);
      } else {
        setProdutos(products);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="container-store">
      <h1>Store</h1>
      {error && (
        <p className="error-store">
          Ocorreu um erro ao carregar os produtos. Por favor, tente novamente
          mais tarde.
        </p>
      )}
      {produtos.length === 0 ? (
        <p className="loading-store">Carregando produtos...</p>
      ) : (
        <div className="catalog">
          {produtos.map((produto) => (
            <div className="product" key={produto.id}>
              <Link
                to={{
                  pathname: `/produts/${produto.id}`,
                  state: { product: produto },
                }}
                className="individual-product"
              >
                <img src={produto.image} alt={produto.title} />
                <h4>{produto.title}</h4>
                <h4>${produto.price}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
