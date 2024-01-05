import React from 'react';
import { FixedSizeList } from 'react-window';

//import Banner from "../../components/banner/Banner";
import Skill from "../../components/Skill";
import Footer from '../../components/Footer';
/*
interface EmpreedimentosProps {
  name: string;
}*/

const Empreendimentos2 = () => {
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
    <div>
      <div style={style} className="flex flex-col lg:flex-row justify-center border-b-4 border-black bg-[#02050b]">
        <div className="lg:w-full 2xl:w-full max-w-[850px] ">
          <img src={`/FotosCardeal(${index + 1}).webp`} className="h-full " alt="" />
        </div>
        <div className=" bg-[#02050b] opacity-70">
          <div className='lg:w-full 2xl:w-full'>
            <Skill
            title={sectionTitles[index + 1]}
            ruas={10}
            terra={15}
            esgoto={30}
            pluvial={20}
          />
          </div>
          
        </div>
      </div>
    </div>
  );
  

  return (
    <div className=" bg-black overflow-auto ">
      {/*<Banner 
        page= 'Empreendimentos'
        key='Empreendimentos'
  /> */}
      
      <div className='md:hidden'>
        <FixedSizeList
          height={800} // Defina a altura desejada da lista
          itemCount={numberOfDivs}
          itemSize={750} // Defina a altura de cada item
          width="100%"
          className=' h-screen'
        >
          {Row}
        </FixedSizeList>

        <Footer />
      </div>
      
      <div className='hidden md:block lg:hidden'>
        <FixedSizeList
          height={850} // Defina a altura desejada da lista
          itemCount={numberOfDivs}
          itemSize={800} // Defina a altura de cada item
          width="100%"
          className=''
        >
          {Row}
        </FixedSizeList>

        <Footer />
      </div>
      
      <div className='hidden lg:block xl:hidden'>
        <FixedSizeList
          height={500} // Defina a altura desejada da lista
          itemCount={numberOfDivs}
          itemSize={300} // Defina a altura de cada item
          width="100%"
          className=' !h-screen'
        >
          {Row}
        </FixedSizeList>

        <Footer />
      </div>

      <div className='hidden xl:block 2xl:hidden'>
        <FixedSizeList
          height={550} // Defina a altura desejada da lista
          itemCount={numberOfDivs}
          itemSize={380} // Defina a altura de cada item
          width="100%"
          className=' !h-screen'
        >
          {Row}
        </FixedSizeList>

        <Footer />
      </div>
      
      <div className='hidden 2xl:block'>
        <div>
          <FixedSizeList
            height={450} // Defina a altura desejada da lista
            itemCount={numberOfDivs}
            itemSize={450} // Defina a altura de cada item
            width="100%"
            className='!h-screen overflow-auto'
          >
            {Row}
          </FixedSizeList>
          
        </div>

        
        
      </div>
    </div>
  );
};

export default Empreendimentos2;