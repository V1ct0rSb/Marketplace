import "./styles.css";
import { getItem } from "../../services/LocalStorageFuncs";
import { Link } from "react-router-dom";
import React from "react";

import { CgProfile } from "react-icons/cg";

export const Header = () => {
  const user = getItem("usuario") || {};

  return (
    <header>
      <div className="logo">VB</div>

      <div className="menu-navigate">
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">My Profile</Link>
      </div>

      <div className="profile">
        <p>{user.name || ""}</p>
        {user.url ? (
          <img src={user.url} alt="Profile" />
        ) : (
          <CgProfile className="icon" />
        )}
      </div>
    </header>
  );
};
