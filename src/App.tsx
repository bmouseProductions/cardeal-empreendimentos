import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import HeaderCarousel from "./components/Header";
import Sobre from "./pages/sobre/Sobre";
import Frutal from "./pages/Empreendimentos/Frutal";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HeaderCarousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />

          <Route path="/nova-serrana" element={<Frutal name='Nova Serrana' />} />
          <Route path="/frutal" element={<Frutal name="Frutal"  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
