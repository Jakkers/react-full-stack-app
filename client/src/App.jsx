import "./App.css";
import Form from "./pages/Form";
import Nav from "./componenets/Nav";
import Training from "./pages/Training";
import Home from "./pages/Home";
import Recovery from "./pages/Recovery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/form" element={<Form />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </>
  );
}

export default App;
