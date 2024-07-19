import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Empreendimentos2 from "./pages/Empreendimentos/Empreendimentos";

import Parceiro from "./pages/Parceiro/Parceiro";
import Contato from "./pages/Contato/Contato";
import Privacidade from "./pages/Privacidade/Privacidade";

export default function AppRoutes(){
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
                    <Route path="/privacidade" element={<Privacidade />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}