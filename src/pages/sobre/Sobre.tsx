//import HeaderCarousel from "../../components/Header";
import About from "../../components/about";
import Banner from "../../components/banner/Banner";
import Page2 from "../About/Page2";

const Sobre = () => {
  return (
    <div className="bg-gray-300 pt-[25px] lg:pt-0 ">
      <Banner
        page="Sobre"
      />
      <About />
      <Page2 />
    </div>
  );
};

export default Sobre;
