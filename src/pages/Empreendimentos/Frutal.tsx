import Skill from "../../components/skill";
import Cardeal from "../cardeal/Cardeal";
/* import teste from "/DJI_0005.JPG"; */
interface EmpreedimentosProps {
  name: string;
}

const Empreedimentos = ({ name }: EmpreedimentosProps) => {
  return (
    <div>
      <div>
        <h1 className="text-5xl playfont py-20 text-center"> {name} </h1>
      </div>

      <Skill ruas={10} terra={15} inovation={30} pluvial={20} />
      <Cardeal img="/DJI_0005.JPG" />
    </div>
  );
};

export default Empreedimentos;
