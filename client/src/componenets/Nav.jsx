import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/training">Training</Link> |{" "}
        <Link to="/recovery">Recovery</Link> |{" "}
        <Link to="/form">Add Workout</Link>
      </nav>
    </header>
  );
}
