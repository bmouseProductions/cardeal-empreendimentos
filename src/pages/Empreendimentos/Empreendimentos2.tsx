import { FixedSizeList } from 'react-window';


import Banner from "../../components/banner/Banner";
import Skill from "../../components/skill";

interface EmpreedimentosProps {
  name: string;
}

const Empreendimentos2 = ({ name }: EmpreedimentosProps) => {
  const numberOfDivs = 29; // Total de divs que você quer renderizar

  const sectionTitles = [
    "",
    "Residencial Gontijo",
    "Jardim America",
    "Jardim Vitória",
    "Residencial Manancial",
    "Nova Floresta I, II, III E IV",
    "Jardim Paraíso",
    "Jardim Vitória",
    "Belo Horizonte II",
    "Santa Rita de Cássia",
    "Residencial Amazonas",
    "Residencial Vista Alegre",
    "Jardim Vitória",
    "Residencial Peluzzo",
    "Nossa Senhora das Valias",
    "Alta Villa",
    "Residencial dos Jacarandás",
    "Novo Paraíso I e II",
    "Jardim Botânico",
    "Belo Horizonte",
    "Jardim Vitória",
    "Jardim Vitória",
    "Jardim Vitória II",
    "Jardim Vitória I E II",
    "Nossa Senhora das Lourdes",
    "Santa Maria",
    "Residencial Morada Nova IV",
    "Jardim Vitória",
    "Jardim Natal I",
    "Versol Costa",
  ];

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style} className="flex flex-col lg:flex-row border-b-4 border-black">
      <div className="lg:w-1/2">
        <img src={`/FotosCardeal(${index + 1}).webp`} className="h-full" alt="" />
      </div>
      <div className="lg:w-1/2">
        <Skill
          title={sectionTitles[index + 1]}
          ruas={10}
          terra={15}
          esgoto={30}
          pluvial={20}
        />
      </div>
    </div>
  );

  return (
    <div className="pt-[25px] lg:pt-0 bg-black ">
      <Banner 
        page= 'Empreendimentos'
        key='Empreendimentos'
      />
      <FixedSizeList
        height={800} // Defina a altura desejada da lista
        itemCount={numberOfDivs}
        itemSize={750} // Defina a altura de cada item
        width="100%"
        className='md:hidden h-screen'
      >
        {Row}
      </FixedSizeList>
      <FixedSizeList
        height={850} // Defina a altura desejada da lista
        itemCount={numberOfDivs}
        itemSize={800} // Defina a altura de cada item
        width="100%"
        className='hidden md:block lg:hidden'
      >
        {Row}
      </FixedSizeList>
      <FixedSizeList
        height={500} // Defina a altura desejada da lista
        itemCount={numberOfDivs}
        itemSize={300} // Defina a altura de cada item
        width="100%"
        className='hidden lg:block xl:hidden !h-screen'
      >
        {Row}
      </FixedSizeList>
      <FixedSizeList
        height={550} // Defina a altura desejada da lista
        itemCount={numberOfDivs}
        itemSize={380} // Defina a altura de cada item
        width="100%"
        className='hidden xl:block 2xl:hidden !h-screen'
      >
        {Row}
      </FixedSizeList>
      <FixedSizeList
        height={500} // Defina a altura desejada da lista
        itemCount={numberOfDivs}
        itemSize={450} // Defina a altura de cada item
        width="100%"
        className='hidden 2xl:block !h-screen'
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default Empreendimentos2;