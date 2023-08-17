
interface PropsBanner {
    bg: string;
    nome: string;
    calcText: string
}

export default function Banner( { bg, calcText}:PropsBanner ){
    const style = 'max-w-full w-screen h-screen bg-opacity-80 ' + bg
    const calcTextClass = calcText
    return (
        <section className="relative">
            <div className={style}>
                <div className=" w-full h-full opacity-80 relative">
                    <div className={calcTextClass}>
                        <h1 className="text-6xl text-white font-bold">
                            
                        </h1>
                    </div>
                </div>
                
            </div>

            

        </section>
    )
}