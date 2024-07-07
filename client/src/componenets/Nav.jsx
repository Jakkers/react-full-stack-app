import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">🏆</Link> | <Link to="/training">⌛️</Link> |{" "}
        <Link to="/recovery">😌</Link> | <Link to="/form">+</Link>
      </nav>
    </header>
  );
}
