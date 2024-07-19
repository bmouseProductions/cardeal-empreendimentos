import { Footer } from "flowbite-react";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";


export default function Privacidade() {
    return (
        <>
            <div className="bg-white">
                <div className="container py-10 px-4 md:px-8 lg:px-16 mx-auto space-y-10">
                    <div>
                        <h1 className="text-5xl  xl:text-6xl font-semibold text-[#1e3a8a]">
                            Política de Privacidade
                        </h1>
                        <p className="mt-5">
                            A Cardeal Empreendimentos valoriza a privacidade e a segurança das informações pessoais dos nossos clientes, parceiros e 
                            visitantes do nosso site institucional. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e 
                            protegemos as informações que recebemos.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h2 className="text-xl font-semibold"> Coleta de Informações</h2>
                            <p>
                                Coletamos informações pessoais quando você interage conosco, seja ao visitar nosso site, preencher um formulário de 
                                contato, solicitar informações ou se inscrever para receber nossos boletins informativos. As informações pessoais que 
                                podemos coletar incluem, mas não se limitam a:
                            </p>
                            <ul className="list-disc pl-5">
                                <li>
                                    Nome;
                                </li>
                                <li>
                                    Endereço de e-mail;
                                </li>
                                <li>
                                    Número de telefone;
                                </li>
                                <li>
                                    Endereço postal;
                                </li>
                                <li>
                                    Informações de pagamento (em caso de transações comerciais);
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Uso das Informações</h2>
                            <p>As informações pessoais que coletamos são usadas para os seguintes propósitos:</p> 
                            <ul className="list-disc pl-5">
                                <li>
                                    Fornecer informações sobre nossos produtos e serviços
                                </li>

                                <li>
                                    Processar transações e fornecer suporte ao cliente
                                </li>

                                <li>
                                    Enviar comunicações de marketing, quando autorizado
                                </li>

                                <li>
                                    Melhorar nosso site e serviços
                                </li>

                                <li>
                                    Cumprir obrigações legais
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Compartilhamento de Informações</h2>
                            <p>
                                Não vendemos, alugamos ou compartilhamos informações pessoais com terceiros, exceto conforme necessário para os fins 
                                descritos nesta Política de Privacidade ou quando exigido por lei.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold"> Proteção das Informações</h2>
                            <p>
                                Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido, 
                                alteração ou destruição.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Cookies e Tecnologias Semelhantes</h2>
                            <p>
                                Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação e para entender como você 
                                utiliza nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Seus Direitos</h2> 
                            <p>
                                Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão das suas informações pessoais. Para exercer 
                                esses direitos ou se tiver perguntas sobre nossa Política de Privacidade, entre em contato conosco através dos canais 
                                fornecidos abaixo.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Alterações nesta Política de Privacidade</h2> 
                            <p>
                                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças nas nossas práticas de informações. 
                                Recomendamos revisar esta página regularmente para se manter informado sobre como estamos protegendo suas informações.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Contato</h2> 
                            <p>
                                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre as práticas de informações da Cardeal Empreendimentos, 
                                entre em contato conosco:
                            </p>
                            
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}