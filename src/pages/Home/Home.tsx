import About from "../../components/about";
import Testimonials from "../team/testimonials";
import Services from "../../components/services";
import { SectionJV } from "../../components/SectionJV";
import HeaderCarousel from "../../components/Header";

const Home = () => {
  return (
    <div className="!pt-[98.5px] bg-black lg:pt-0 ">
      <HeaderCarousel />
      <About />
      <Testimonials />
      <SectionJV />
      <Services />
    </div>
  );
};

export default Home;
