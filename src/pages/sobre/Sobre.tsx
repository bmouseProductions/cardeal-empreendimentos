//import HeaderCarousel from "../../components/Header";
import About from "../../components/about";
import Banner from "../../components/banner/Banner";
import Page2 from "../About/Page2";

const Sobre = () => {
  return (
    <div className="!pt-[98.5px] bg-gray-300 lg:pt-0 ">
      <Banner
        nome=""
        bg="bg-sobre" //passar a classe CSS com o bg image de cada loteamento
        calcText="calc-text-frutal"
      />
      <About />
      <Page2 />
    </div>
  );
};

export default Sobre;
