import About from "../../components/about";
import Testimonials from "../team/testimonials";
import Services from "../../components/services";
import { SectionJV } from "../../components/SectionJV";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="pt-[25px] lg:pt-0 bg-black ">
      <Banner
        nome=""
        bg="bg-home" //passar a classe CSS com o bg image de cada loteamento
        calcText=""
      />
      <About />
      <Testimonials />
      <SectionJV />
      <Services />
    </div>
  );
};

export default Home;
