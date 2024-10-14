import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex px-5  flex-col bg-gradient-to-l from-blue-800 to-black text-white pt-10">
      <div className="container  m-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-14">
          <div className="lg:max-w-[350px] lg:w-1/5 mb-5">
            <a>
              <img
                src="/icon-cardeal.png"
                width={70}
                className="mb-3 mx-auto"
              />
            </a>

            <div className=" flex justify-center gap-3 mt-5 ">
              <a
                href="https://www.facebook.com/empreendimentoscardeal"
                target="_blank"
                className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#0d3e63]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com/empreendimentoscardeal/"
                target="_blank"
                className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#0d3e63]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href=""
                target="_blank"
                className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#0d3e63]"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              <a
                href="https://www.youtube.com/@EmpreendimentosCardeal"
                target="_blank"
                className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#0d3e63]"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:w-full">
            {/*<div className="lg:w-2/4">
              <div className="mb-8 flex flex-col gap-2">
                <h6 className="text-white font-bold text-lg uppercase tracking-[2px] mb-1">
                  Links Úteis
                </h6>
                <hr className="mb-4 lg:hidden opacity-30" />
                <ul className="m-0 flex flex-col gap-2">
                  <li>
                    <Link to={'/'}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={'/sobre'}>
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link to={'/frutal'}>
                      Frutal
                    </Link>
                  </li>
                  <li>
                    <Link to={'/nova-serrana'}>
                      Nova Serrana
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="lg:w-[30%] ">
              <div className="mb-8 flex flex-col gap-2">
                <h6 className="text-white font-bold text-lg uppercase tracking-[2px] mb-1">
                  Telefone
                </h6>
                <hr className="mb-4 lg:hidden opacity-30" />
                <a href="tel:+553438251791" className="text-sm text-white">
                  (34) 3825-1791
                </a>
                <a href="tel:+5534995440078" className="text-sm text-white">
                  (34) 9 9644-0078
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 xl:mr-10 2xl:mr-0">
              <div className="mb-8 flex flex-col gap-2">
                <h6 className="text-white font-bold text-lg uppercase tracking-[2px] mb-1">
                  Email
                </h6>
                <hr className="mb-4 lg:hidden opacity-30" />
                <a
                  href="mailto:financeiro@empreendimentoscardeal.com.br"
                  className="text-sm text-white"
                >
                  financeiro@empreendimentoscardeal.com.br
                </a>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="mb-8 flex flex-col gap-2">
                <h6 className="relative text-white font-bold text-lg uppercase tracking-[2px] mb-1">
                  Visite
                  <div className="absolute left-0 right-0 bottom-0 w-full bg-[rgba(255, 255, 255, 0.1)] h-[1px]"></div>
                </h6>
                <hr className="mb-4 lg:hidden opacity-30" />
                <p className="text-sm text-white ">
                  R. João da Rocha Filgueira, 340 - Centro Patos de Minas - MG
                  38700-074
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 border-t border-solid container m-auto border-white-opacity-02">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 text-center lg:text-left">
            <p className="text-sm text-white">
              © 2023 - Cardeal Empreendimentos - Todos os direitos reservados.
            </p>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <p className="text-sm text-white">
              Desenvolvido por
              <a
                href="https://www.bmouseproductions.com/"
                className="font-bold ml-1"
              >
                Bmouse Productions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
