import Lottie  from 'react-lottie-player';

import logo from '/logo-cardeal-branco.webp'
import outdoor from '/OutdoorCardeal.webp'
import swipeUp from '../../assets/swipeUp.json'
interface PropsBanner {
    page: string | null;
}

export default function Banner( { page }:PropsBanner ){
    return (
        <section className="w-full min-h-screen lg:min-h-[530px]  bg-banner relative">
            <div className='flex flex-col-reverse items-center lg:flex-row lg:min-h-screen lg:gap-10'>
                <div className='lg:w-1/2 h-full lg:min-h-[530px] flex flex-col justify-end items-center'>

                    <img src={logo} className='w-full max-w-[150px] sm:max-w-[300px] xl:max-w-[550px] mt-5 lg:mb-20' alt="" />
                    <h1 className='mb-20 mt-24 lg:mt-10 w-full lg:pl-10 text-center lg:text-start text-4xl lg:text-5xl 2xl:text-7xl text-white '>{page}</h1>

                </div>
                <div className='w-1/2 h-full flex items-end '>
                    <img src={outdoor} className='mt-10 lg:mt-0' alt="" />
                </div>
            </div>
            <div className='absolute bottom-10 left-[20%] md:left-[35%] lg:hidden'>
                <Lottie
                    play
                    loop
                    animationData={swipeUp}
                    className='w-[200px] '
                />
            </div>
        </section>
    )
}