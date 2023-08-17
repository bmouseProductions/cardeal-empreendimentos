import About from "../../components/about";
import Testimonials from "../team/testimonials";
import Services from "../../components/services";
import { SectionJV } from "../../components/SectionJV";
import HeaderCarousel from "../../components/Header";

const Home = () => {
  return (
    <div>
      <HeaderCarousel />
      <About />
      <Testimonials />
      <SectionJV />
      <Services />
    </div>
  );
};

export default Home;
