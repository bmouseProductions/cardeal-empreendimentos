
import Banner from "../../components/banner/Banner";
import Skill from "../../components/skill";
//import Cardeal from "../cardeal/Cardeal";

interface EmpreedimentosProps{
  name: string
}

const Frutal = ( {name}:EmpreedimentosProps ) => {
  return (
    <div>
      <Banner 
        nome={name}
        bg="bg-frutal" //passar a classe CSS com o bg image de cada loteamento
        calcText="calc-text-frutal"
      />
      
      <div>
        <h1 className="text-5xl playfont py-20 text-center"> {name} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur quaerat optio dicta corporis sunt nulla maiores illum non dolores cumque, odio veritatis voluptates, ipsum a quae? Non, delectus quia.</p>
      </div>

      <Skill ruas={10} terra={15} inovation={30} pluvial={20} />
      {/*<Cardeal img="/DJI_0005.JPG" />*/}
    </div>
  );
};

export default Frutal;

/*
<div className="">
        <h1 className="text-5xl playfont !text-sky-500 py-20 text-center"> {name} </h1>
      </div>*/