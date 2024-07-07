import "./App.css";
import Form from "./pages/Form";
import Nav from "./componenets/Nav";
import Training from "./pages/Training";
import Home from "./pages/Home";
import Recovery from "./pages/Recovery";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Nav />
      <section className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/form" element={<Form />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
