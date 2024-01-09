import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import Home from "./pages/Home/Home";
//import Footer from "./components/Footer";
import Sobre from "./pages/Sobre/Sobre";
import Empreendimentos2 from "./pages/Empreendimentos/Empreendimentos2";
import { ButtonUp } from "./components/ButtonUp";
import WhatsAppButton from "./components/whats/whats";
import Parceiro from "./pages/Parceiro/Parceiro";
import Contato from "./pages/Contato/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/empreendimentos"
            element={<Empreendimentos2 />}
          />
          <Route path="/contato" element={<Contato />} />
          <Route path="/seja-um-parceiro" element={<Parceiro />} />
        </Routes>
        <ButtonUp />
      </BrowserRouter>
      <WhatsAppButton />
    </>
  );
}

export default App;
