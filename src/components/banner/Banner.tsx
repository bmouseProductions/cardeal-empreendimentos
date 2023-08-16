
interface PropsBanner {
    bg: string;
    nome: string;
    calcText: string
}

export default function Banner( { bg, nome, calcText}:PropsBanner ){
    const style = 'max-w-full w-screen h-screen bg-opacity-80 ' + bg
    const calcTextClass = calcText
    return (
        <section className="relative">
            <div className={style}>
                <div className="bg-black w-full h-full opacity-80 relative">
                    <div className={calcTextClass}>
                        <h1 className="text-6xl text-white font-bold">
                            {nome}
                        </h1>
                    </div>
                </div>
                
            </div>

            

        </section>
    )
}