const Page2 = () => {
  return (
    <>
      <section className=" text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-blue-900 p-8 rounded-lg shadow-md md:flex-1">
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-300">
                Criar, desenvolver e entregar projetos baseados no "Índice
                Cardeal", buscando o equilíbrio perfeito entre bem-estar e
                finanças. Inovamos em nossas soluções, entregando excelência e
                qualidade aos nossos clientes e parceiros.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg shadow-md md:flex-1">
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-300">
                Ser reconhecidos nacionalmente como uma empresa comprometida com
                a excelência, transparência e responsabilidade social.
                Contribuímos para um futuro próspero através de uma abordagem
                ética e transparente em nossos empreendimentos.
              </p>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg shadow-md md:flex-1">
              <h2 className="text-2xl font-bold mb-4">Nossos Valores</h2>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Responsabilidade Social</li>
                <li>Segurança e Comprometimento</li>
                <li>Inovação e Qualidade</li>
                <li>Integridade e Transparência</li>
                <li>Exclusividade e Qualidade</li>
                <li>Desenvolvimento dos Colaboradores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">João Paulo Barbosa</h3>
              <p className="text-gray-600">
                Engenheiro Civil, pós-graduado em Infraestrutura de Transportes
                e Rodovias. Proprietário da Vetax Urbanismo e sócio do Grupo
                Estrutural. Atua no desenvolvimento de empreendimentos
                imobiliários.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Clênio Gonçalves</h3>
              <p className="text-gray-600">
                CEO do Grupo Patense, é reconhecido por sua visão estratégica e
                experiência em negócios. Contribui significativamente para a
                gestão de investimentos e planejamento da empresa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Henrique Marques</h3>
              <p className="text-gray-600">
                Administrador de Empresas, especializado em Gestão Empresarial e
                Finanças. Com mais de 25 anos no Grupo Patense, contribuiu em
                diversas áreas, incluindo tesouraria e planejamento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Geraldo Nilson</h3>
              <p className="text-gray-600">
                Coproprietário da GW Participações, empresa que realizou
                empreendimentos imobiliários totalizando mais de 2000 lotes. Tem
                mais de 20 anos de experiência no segmento de caça e pesca.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Célio Wiliand</h3>
              <p className="text-gray-600">
                Empreendedor e empresário no segmento de caça e pesca há mais de
                20 anos. Coproprietário da GW Panici, Dacota e Souro é Téla.
                Sempre inovando em seus empreendimentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
