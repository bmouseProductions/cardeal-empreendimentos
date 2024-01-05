const Testimonials = () => {
  return (
    <section className="py-10 sm:py-20 md:py-24 2xl:py-32 bg-gradient-to-l from-blue-800 to-black">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-center mb-10">
          <h6 className="text-white font-light text-sm md:text-base lg:text-lg uppercase tracking-[2px] teko">
          O QUE 
          </h6>
          <h4 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl tracking-[1px] playfont">
            Nossos clientes falam
          </h4>
        </div>
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2">
          <div className="relative mx-auto">
            <div className="mx-4 md:mx-0">
              <span className="absolute -top-8 right-8 md:right-12 w-16 md:w-20 z-20">
                <img src="/quote.svg" alt="Quote" width={250} />
              </span>
              <div className="p-6 md:p-10 border-4 border-white border-solid border-t-0 relative">
                <div className="cont">
                  <p className="text-base md:text-lg font-normal italic text-white playfont">
                    "Realizar o sonho da casa própria nunca foi tão tranquilo. A Cardeal me proporcionou um lote com localização privilegiada e infraestrutura completa. Estou ansioso para construir meu lar em um empreendimento tão bem planejado."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="mx-4 md:mx-0">
              <span className="absolute -top-8 right-8 md:right-12 w-16 md:w-20 z-20">
                <img src="/quote.svg" alt="Quote" width={250} />
              </span>
              <div className="p-6 md:p-10 border-4 border-white border-solid border-t-0 relative">
                <div className="cont">
                  <p className="text-base md:text-lg font-normal italic text-white playfont">
                    "Encontrei na Cardeal o espaço perfeito para o meu negócio. Comprei um lote comercial em um empreendimento promissor. A equipe foi extremamente atenciosa e o processo foi descomplicado. Mal posso esperar para ver meu empreendimento crescer aqui."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
