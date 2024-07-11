import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario/Index";


export default function Parceiro(){
    return (
        <>
            <section className=" bg-white">
                <div className="bg-construcao ">
                    <div className=" bg-blue-700 bg-opacity-75">
                        <div className="container py-14 px-4 md:px-8 lg:px-16 mx-auto">
                            <h1 className="text-5xl md:text-6xl text-white">
                                SEJA NOSSO <br />
                                <strong>PARCEIRO</strong>  
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container py-10 px-4 md:px-8 lg:px-16 mx-auto flex flex-col lg:flex-row lg:gap-10 ">
                    <div className="lg:w-[45%] ">
                        <div>
                            <h2 className="text-2xl md:text-5xl font-bold">
                                <span className="text-[40px] md:text-6xl font-bold text-blue-700 ">PARCERIA COM</span><br />
                                SUCESSO GARANTIDO
                            </h2>
                            <p className="mt-2">
                            O modelo de negócios adotado pela Cardeal Empreendimentos é garantia de sucesso para todos os envolvidos. É através do desenvolvimento de espaços urbanos cuidadosamente planejados, com compromisso ambiental e sustentados pela solidez e segurança de uma incorporadora imobiliária de grande porte, que promovemos a valorização de imóveis e a realização plena dos sonhos de cada cliente.
                            </p>
                        </div>
                        <div className="mt-5 md:mt-10">
                            <h2 className="text-3xl md:text-4xl">Seja nosso parceiro</h2>
                            <p className="text-[18px] ">PREENCHA OS DADOS ABAIXO COM AS INFORMAÇÕES DO SEU IMÓVEL.</p>

                        </div>
                    </div>

                    <div className="lg:w-[55%] ">
                        <Formulario placeTextArea="Descrição do seu terreno" assunto="Gostaria de me tornar um parceiro"/>
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </>
    )
}