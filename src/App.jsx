import { BrowserRouter as Router } from "react-router-dom";

import { RoutesComponents } from "./routes/RoutesComponents";
import { Header } from "./components/Header";
import "./styles/globalStyles.css";

export default function App() {
  const path = window.location.pathname;
  return (
    <Router>
      {path !== "/" && <Header />}
      <RoutesComponents />
    </Router>
  );
}
