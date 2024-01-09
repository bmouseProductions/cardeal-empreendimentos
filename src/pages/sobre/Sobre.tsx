//import HeaderCarousel from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/about";
//import Banner from "../../components/Banner/Banner";
import Page2 from "../About/Page2";

const Sobre = () => {
  return (
    <div className="bg-gray-300 ">
      {/*
      <Banner
        page="Sobre"
      />*/}
      <About />
      <Page2 />
      <Footer />
    </div>
  );
};

export default Sobre;
