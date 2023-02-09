import React, { useState } from "react";
import { setItem, getItem } from "../../services/LocalStorageFuncs";
import "./styles.css";

export const ProfileEdit = (props) => {
  const user = getItem("usuario");
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [pass, setPass] = useState(user.pass || "");
  const [cpf, setCpf] = useState(user.cpf || "");
  const [url, setUrl] = useState(user.url || "");

  const cond =
    name.length > 3 &&
    email.includes("@") &&
    email.length > 8 &&
    pass.length > 8 &&
    url.length > 5 &&
    cpf.length === 11;

  const saveChanges = () => {
    setItem("usuario", { name, email, pass, cpf, url });
    const {
      history: { push },
    } = props;
    push("/profile");
  };

  return (
    <div className="container-edit">
      <h1>Edit Profile</h1>
      <form>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Name"
        />

        <input
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
          autoComplete="off"
          value={pass}
          onChange={({ target: { value } }) => setPass(value)}
          placeholder="password"
        />

        <input
          type="number"
          id="cpf"
          autoComplete="off"
          value={cpf}
          onChange={({ target: { value } }) => setCpf(value)}
          placeholder="Cpf"
        />

        <input
          placeholder="Image Url"
          type="text"
          autoComplete="off"
          value={url}
          onChange={({ target: { value } }) => setUrl(value)}
        />
      </form>

      <button disabled={!cond} onClick={saveChanges}>
        Save Change
      </button>
    </div>
  );
};
