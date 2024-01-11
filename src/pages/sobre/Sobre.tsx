//import HeaderCarousel from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/about";
//import Banner from "../../components/Banner/Banner";
import Institucional from "../../components/Institucional/Institucional";

const Sobre = () => {
  return (
    <div className="bg-gray-300 ">
      {/*
      <Banner
        page="Sobre"
      />*/}
      <About />
      <Institucional />
      <Footer />
    </div>
  );
};

export default Sobre;
