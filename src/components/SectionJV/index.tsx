import loteamento from '/loteamento.webp'

export const SectionJV = () => {
  return (
    <section className="bg-white">
      <div className="px-6 container m-auto flex flex-col lg:flex-row gap-16 items-center justify-center  py-20">
        <div className="flex-1 flex flex-col gap-5">
          <img src={loteamento} alt="" className='rounded opacity-70' />
          <h1 className="text-5xl playfont">POR QUE ESCOLHER A CARDEAL?</h1>
          <p className="text-base text-[#888888]">
            Apresentamos empreendimentos imobiliários inovadores com qualidade,
            preços acessíveis e sustentabilidade.
          </p>
        </div>
        <ul
          className="flex-1 grid items-center lg:grid-cols-2 gap-10 text-base"
          /* style={{ listStyle: "decimal" }} */
        >
          <div className="flex flex-col gap-5 ">
            <li>
              <strong>1.</strong> Valorizamos cada cliente e atendemos às suas necessidades de
              forma justa e eficiente.
            </li>
            <hr />
          </div>
          <div className="flex flex-col gap-5">
            <li>
              <strong>4.</strong> Proporcionamos um ambiente equilibridado e confortável para
              nossos clientes e para a região onde atuamos.
            </li>
            <hr />
          </div>
          <div className="flex flex-col gap-5">
            <li>
              <strong>2.</strong> Integramos infraestrutura e qualidade de vida para as pessoas.
            </li>
            <hr />
          </div>
          <div className="flex flex-col gap-5">
            <li>
              <strong>5.</strong> Oferecemos soluções urbanas modernas.
            </li>
            <hr />
          </div>
          <div className="flex flex-col gap-5">
            <li>
              <strong>3.</strong> Nossos loteamentos contam com uma localização privilegiada,
              proporcionando praticidade e facilidade aos moradores.
            </li>
          </div>
          <div className="flex flex-col gap-5">
            <li>
              <strong>6.</strong> Estamos comprometidos em oferecer empreendimnetos que estejam
              em harmonia com a natureza e proporcionem qualidade de vida
              superior aos nossos clientes
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
