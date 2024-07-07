import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">Home</Link> | <Link to="/training">Training</Link> |{" "}
        <Link to="/recovery">Recovery</Link> |{" "}
        <Link to="/form">Add Workout</Link>
      </nav>
    </header>
  );
}
