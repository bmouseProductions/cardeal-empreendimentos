
interface PropsBanner {
    imagem: string;
    nome: string;
}

export default function Banner( { imagem, nome}:PropsBanner ){
    return (
        <section>
            <div className="relative w-screen h-screen">
                <img src={imagem} alt="" className="w-screen h-screen"/>
            </div>

            <div>
                <h1 className="text-6xl text-white font-bold">
                    {nome}
                </h1>
            </div>

        </section>
    )
}