import React from 'react';
import { FixedSizeList } from 'react-window';

const Empreendimentos2 = () => {
  const numberOfDivs = 15; // Total de divs que você quer renderizar

  

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div>
      <div style={style} className=" flex flex-col lg:flex-row justify-around border-b-4 border-black bg-[#02050b]">
        <div className="flex">
          <img src={`/FotosCardeal(${index * 2 + 1}).webp`} className=" w-full" alt="" />
        </div>
        <div className="flex">
          <img src={`/FotosCardeal(${index * 2 + 2}).webp`} className=" w-full" alt="" />
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
          height={850} // Defina a altura desejada da lista
          itemCount={numberOfDivs}
          itemSize={500} // Defina a altura de cada item
          width="100%"
          className=' h-screen'
        >
          {Row}
        </FixedSizeList>
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