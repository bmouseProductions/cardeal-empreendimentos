


import Banner from "../../components/banner/Banner";
import Skill from "../../components/skill";

interface EmpreedimentosProps{
  name: string
}

const Empreendimentos2 = ( {name}:EmpreedimentosProps ) => {
    const numberOfDivs = 29; // Total de divs que você quer renderizar

  const renderDivs = () => {
    const divs = [];
    for (let i = 1; i <= numberOfDivs; i++) {
      divs.push(
        <div key={i}>
          <img src={`/FotosCardeal(${i}).webp`} alt="" />
          <Skill ruas={10} terra={15} esgoto={30} pluvial={20} />
        </div>
      );
    }
    return divs;
  };
  return (
    <div className="!pt-[98.5px] bg-black lg:pt-0 ">
      <Banner 
        nome={name}
        bg="bg-empreendimentos" //passar a classe CSS com o bg image de cada loteamento
        calcText="calc-text-frutal"
      />

      <div>
        {renderDivs()}
      </div>
    </div>
  );
};

export default Empreendimentos2;