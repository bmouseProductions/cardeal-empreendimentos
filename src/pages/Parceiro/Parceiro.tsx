import { Formulario } from "../../components/Formulario/Index";


export default function Parceiro(){
    return (
        <section className=" bg-white">
            <div className="container px-4 nd:px-8 lg:px-16 xl:px-32 bg-blue-700 bg-opacity-75">
                <div className="py-14 ">
                    <h1 className="text-6xl text-white">
                        SEJA NOSSO <br />
                        <strong>PARCEIRO</strong>  
                    </h1>
                </div>
            </div>

            <div className="container py-10 px-4 nd:px-8 lg:px-16 2xl:px-32 flex ">
                <div className="lg:w-1/2">
                    <div>
                        <h2 className="text-[40px] font-bold">
                            <span className="text-[60px] font-bold text-blue-700 ">PARCERIA COM</span><br />
                            SUCESSO GARANTIDO
                        </h2>
                        <p></p>
                    </div>
                    <div>
                        <h2 className="text-3xl">Seja nosso Parceiro</h2>
                        <p className="text-[18px] ">PREENCHA OS DADOS ABAIXO COM AS INFORMAÇÕES DO SEU IMÓVEL.</p>

                    </div>
                </div>

                <div className="">
                    <Formulario/>
                </div>
                
            </div>
        </section>
    )
}