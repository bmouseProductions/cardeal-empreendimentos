import About from "../../components/about";
import Testimonials from "../team/testimonials";
import Services from "../../components/services";
import { SectionJV } from "../SectionJV";

const Home = () => {
  return (
    <div>
      <About />
      <Testimonials />
      <SectionJV />
      <Services />
    </div>
  );
};

export default Home;
