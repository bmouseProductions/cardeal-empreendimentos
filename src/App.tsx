import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Sobre from "./pages/sobre/Sobre";
import Frutal from "./pages/Empreendimentos/Frutal";
import Serrana from "./pages/Empreendimentos/Serrana";
import { ButtonUp } from "./components/buttonUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ButtonUp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />

          <Route path="/nova-serrana" element={<Serrana name="Nova Serrana" />} />
          <Route path="/frutal" element={<Frutal name="Frutal" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
