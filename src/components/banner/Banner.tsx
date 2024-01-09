import Lottie  from 'react-lottie-player';

import logo from '/logo-cardeal-branco.webp'
import swipeUp from '../../assets/swipeUp.json'
import { FaWhatsapp } from "react-icons/fa";

export default function Banner(){
    return (
        <section className='bg-banner2'>
            <div className="w-full min-h-screen lg:min-h-[530px]  bg-banner bg-opacity-75 relative">

            
                <div className='flex flex-col-reverse items-center lg:flex-row lg:min-h-screen lg:gap-10'>
                    <div className='lg:w-1/2 h-full lg:min-h-[530px] flex flex-col  items-center'>

                        <img src={logo} className='w-full max-w-[150px] sm:max-w-[300px] xl:max-w-[550px] mt-5 lg:mb-20' alt="" />
                        <a href="" target='_blank' className='py-3 px-10 flex items-center gap-5 text-2xl font-semibold text-white rounded animate-bounce bg-[#193592] '>
                            <FaWhatsapp size="40px" /> Entre em contato 
                        </a>
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
            </div>
        </section>
    )
}