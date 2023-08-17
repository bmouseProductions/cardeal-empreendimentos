import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Sobre from "./pages/sobre/Sobre";
//import Serrana from "./pages/Empreendimentos/Serrana";
import Empreendimentos2 from "./pages/Empreendimentos/Empreendimentos2";
import { ButtonUp } from "./components/buttonUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />

          <Route path="/empreendimentos" element={<Empreendimentos2 name="Empreendimentos" />} />
        </Routes>
        <Footer />
        <ButtonUp />
      </BrowserRouter>
    </>
  );
}

export default App;
