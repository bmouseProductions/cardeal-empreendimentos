//import HeaderCarousel from "../../components/Header";
import Banner from "../../components/banner/Banner";
import Page2 from "../About/Page2";

const Sobre = () => {
  return (
    <div className="!pt-[98.5px] bg-black lg:pt-0 ">
      <Banner 
        nome=''
        bg="bg-sobre" //passar a classe CSS com o bg image de cada loteamento
        calcText="calc-text-frutal"
      />
      <Page2 />
    </div>
  );
};

export default Sobre;
