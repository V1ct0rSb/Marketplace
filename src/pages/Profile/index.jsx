import React from "react";
import { useHistory } from "react-router-dom";
import { getItem, removeItem } from "../../services/LocalStorageFuncs";
import "./styles.css";

export const Profile = () => {
  const history = useHistory();
  const user = getItem("usuario") || {};
  const defaultImage =
    "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png";

  const handleLogout = () => {
    removeItem("usuario");
    history.push("/");
    window.location.reload(true);
  };

  return (
    <div className="container-profile">
      <h1>My Profile</h1>
      <img src={user.url || defaultImage} alt="Profile" />
      <p>
        <span>Name: </span>
        {user.name || ""}
      </p>
      <p>
        <span>Email:</span> {user.email || ""}
      </p>
      <p>
        <span>Cpf:</span> {user.cpf || ""}
      </p>
      <button onClick={() => history.push("/profile/edit")}>
        Edit Profile
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
