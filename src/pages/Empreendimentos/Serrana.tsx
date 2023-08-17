
import Banner from "../../components/banner/Banner";
import Skill from "../../components/skill";
import SliderSerrana from "../../components/sliders/SliderSerrana";

//import frutal from "../../../public/MONTAGEM-001.WEBP"

interface EmpreedimentosProps{
  name: string
}

const Serrana = ( {name}:EmpreedimentosProps ) => {
  return (
    <div>
      <Banner 
        nome={name}
        bg="bg-serrana" //passar a classe CSS com o bg image de cada loteamento
        calcText="calc-text-serrana" // passar a classe CSS com a classe de texto de cada loteamento
      />
      
      <div className="container flex flex-col items-center py-20 text-black">
        <h1 className="text-5xl text-center">Loteamento {name}</h1>
        <div className="w-[90%] lg:w-2/3  ">
          <p className="w-full py-5 text-xl">
            Nosso loteamento é uma ótima opção para você! Localizado em uma região privilegiada, próximo a uma variedade de comodidades que incluem:
          </p>
          <ul className="px-5">
            <li className="list-disc">Escola</li>
            <li className="list-disc">Creches</li>
            <li className="list-disc">Posto de Saúde</li>
            <li className="list-disc">Posto de Gasolina</li>
            <li className="list-disc">Comércios</li>
          </ul>
        </div>
      </div>
      
      <Skill
        ruas={10}
        terra={15}
        esgoto={30}
        pluvial={20}
      />
      <SliderSerrana />
    </div>
  );
};

export default Serrana;

/*
<div className="">
        <h1 className="text-5xl playfont !text-sky-500 py-20 text-center"> {name} </h1>
      </div>*/