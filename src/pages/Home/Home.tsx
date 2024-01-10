import About from "../../components/about";
import Testimonials from "../team/testimonials";
import Services from "../../components/services";
import { SectionJV } from "../../components/SectionJV";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className=" bg-black ">
      <Banner/>
      <About />
      <Testimonials />
      <SectionJV />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
