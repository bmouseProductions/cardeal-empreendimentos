import {
  faBolt,
  faLightbulb,
  faRoad,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <section className="py-10 sm:py-20 md:py-24 lg:py-28 bg-[#f8f4f3]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 2xl:px-32">
        <div className="text-center mb-10">
          <h6 className="text-blue-800 font-light text-sm md:text-base lg:text-lg uppercase tracking-[2px] teko">
            Nossos pontos fortes
          </h6>
          <h4 className="font-medium text-2xl md:text-4xl tracking-[1px] playfont">
            Infraestrutura completa
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="py-10 px-6 md:px-10 h-full bg-white shadow-lg border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] !hover:text-white box">
            <div className="flex items-center">
              <h2 className="teko font-normal mb-5 md:!m-0 text-lg md:text-xl numb">
                01{" "}
              </h2>
              <FontAwesomeIcon
                className="ml-3 text-[#3d45a8]"
                icon={faLightbulb}
              />
            </div>
            <h6 className="mb-3 md:mb-4 font-semibold">Iluminação em Led</h6>
            <p className="text-sm md:text-base">
              A luz de LED ilumina nosso loteamento, proporcionando segurança e
              uma atmosfera acolhedora a todos.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white shadow-lg border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] !hover:text-white box">
            <div className="flex items-center">
              <h2 className="teko font-normal mb-5 md:!m-0 text-lg md:text-xl numb">
                02
              </h2>
              <FontAwesomeIcon className="ml-3 text-[#3d45a8]" icon={faBolt} />
            </div>
            <h6 className="mb-3 md:mb-4 font-semibold">Energia elétrica e iluminação</h6>
            <p className="text-sm md:text-base">
              Energia eficiente e iluminação cuidadosa trazem vida e conforto
              para cada lar, mantendo nossa comunidade conectada e vibrante.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white shadow-lg border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] !hover:text-white box">
            <div className="flex items-center">
              <h2 className="teko font-normal mb-5 md:!m-0 text-lg md:text-xl numb">
                03{" "}
              </h2>
              <FontAwesomeIcon className="ml-3 text-[#3d45a8]" icon={faRoad} />
            </div>
            <h6 className="mb-3 md:mb-4 font-semibold">Asfalto, guias e sarjetas</h6>
            <p className="text-sm md:text-base">
              Nossas ruas bem pavimentadas, guias e sarjetas impecáveis refletem
              um ambiente bem-cuidado e acessível para todos.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white shadow-lg border border-solid border-[#eee] transition-all duration-300 hover:bg-[#00000099] !hover:text-white box">
            <div className="flex items-center">
              <h2 className="teko font-normal mb-5 md:!m-0 text-lg md:text-xl numb">
                04
              </h2>
              <FontAwesomeIcon
                className="ml-3 text-[#3d45a8]"
                icon={faTrafficLight}
              />
            </div>
            <h6 className="mb-3 md:mb-4 font-semibold">Sinalização Viária</h6>
            <p className="text-sm md:text-base">
              Uma sinalização viária clara e inteligente não apenas orienta, mas
              também promove a tranquilidade e a circulação segura de residentes
              e visitantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
