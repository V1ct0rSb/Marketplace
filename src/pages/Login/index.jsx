import React, { useState } from "react";
import { setItem, getItem } from "../../services/LocalStorageFuncs";

import "./styles.css";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length <= 3) {
      setError("Name field must be more than 3 characters");
      return;
    }

    if (pass.length <= 8) {
      setError("The password field must be 8 characters long");
      return;
    }

    try {
      const user = await getItem("usuario");

      if (user && name === user.name && pass === user.pass) {
        props.history.push("/store");
        return;
      }

      await setItem("usuario", { name, pass });
      props.history.push("/store");
    } catch (error) {
      console.error(error);
    }
    window.location.reload(true);
  };

  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            autoComplete="username"
            onChange={({ target: { value } }) => setName(value)}
            value={name}
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={({ target: { value } }) => setPass(value)}
            value={pass}
            placeholder="Password"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Sing in</button>
      </form>
    </div>
  );
};
