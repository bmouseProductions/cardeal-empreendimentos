import Footer from "../../components/Footer";
import Formulario  from "../../components/Formulario/Index";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export default function Contato(){
    return (
        <>
            <section className=" bg-white">
                <div className="bg-construcao ">
                    <div className=" bg-blue-700 bg-opacity-75">
                    <div className="container py-14 px-4 md:px-8 lg:px-16 mx-auto">
                        <h1 className="text-4xl md:text-6xl font-light text-center md:text-start text-white">
                            PRECISA DE AJUDA? <br />
                            <strong className="text-3xl md:text-6xl lg::text-7xl !font-semibold">ENTRE EM CONTATO</strong>  
                        </h1>
                    </div>
                    </div>
                </div>

                <div className="container py-10 px-4 md:px-8 lg:px-16 mx-auto flex flex-col lg:flex-row-reverse lg:gap-10 ">
                    <div className="w-full">
                        <div>
                            <h2 className="text-6xl md:text-7xl 2xl:text-8xl font-bold text-blue-700 mb-5 lg:mb-10">
                                CONTATO
                            </h2>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a className="flex items-center gap-2" href="+553438251791" target="_blank">
                                        <FaPhone size="20px" /> (34) 3825-1791
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2" href="+555534995440078" target="_blank">
                                        <FaWhatsapp size="20px" /> (34) 9 9644-0078
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-1 sm:gap-2 !box-border text-[14px] sm:text-base " href="mailto:financeiro@empreendimentoscardeal.com.br" target="_blank">
                                        <FaEnvelope size="20px" /> financeiro@empreendimentoscardeal.com.br
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2" href="https://www.google.com.br/maps/place/R.+Jo%C3%A3o+da+Rocha+Filgueira,+340+-+Centro,+Patos+de+Minas+-+MG,+38700-074/@-18.5816428,-46.5206984,17z/data=!3m1!4b1!4m6!3m5!1s0x94aef52afb2173c1:0x2fa0489198767955!8m2!3d-18.5816428!4d-46.5181235!16s%2Fg%2F11rz1j5s6p?entry=ttu" target="_blank">
                                        <FontAwesomeIcon size="xl" icon={faLocationDot} /> R. João da Rocha Filgueira, 340 - Centro Patos de Minas - MG 38700-074
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5 md:mt-10">
                            <p className="text-lg ">
                            Nosso objetivo é atender às demandas dos nossos clientes, aplicando a engenharia de maneira técnica e eficiente. Dessa forma, entregamos projetos de alta qualidade, com viabilidade e economia, minimizando margens de erro e maximizando a lucratividade.
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-5 md:mt-10">
                        <Formulario placeTextArea="Mensagem"/>
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </>
    )
}