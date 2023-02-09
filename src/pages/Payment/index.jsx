import React, { useState, useEffect } from "react";
import { getItem } from "../../services/LocalStorageFuncs";
import { AiFillCheckCircle } from "react-icons/ai";
import "./styles.css";

export const Payment = (props) => {
  const [loading, setLoading] = useState(true);
  const {
    params: { price },
  } = props.match;
  const user = getItem("usuario");

  return (
    <div className="container-payment">
      <AiFillCheckCircle className="icon-payment" />
      <h3>Your purchase has been completed successfully.</h3>
      <p>
        <span>Value: </span>
        {`$${price}`}
      </p>
      <p>
        <span>Buyer: </span>
        {`${user.name}`}
      </p>
      <p>
        <span>Term: </span>
        {`${Math.ceil(Math.random() * 20) + 1} days`}
      </p>
    </div>
  );
};
