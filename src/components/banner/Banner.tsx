import Lottie  from 'react-lottie-player';

const logo: string = '/logo-cardeal-branco.webp'
import swipeUp from '../../assets/swipeUp.json'
import { FaWhatsapp } from "react-icons/fa";

export default function Banner(){
    return (
        <section className='bg-banner2'>
            <div className="w-full min-h-screen lg:min-h-[530px]  bg-banner bg-opacity-75 relative">

            
                <div className='flex flex-col items-center lg:flex-row lg:min-h-screen lg:gap-10'>
                    <div className='lg:w-1/2 h-full lg:min-h-[530px] flex flex-col  items-center'>

                        <img src={logo} className='w-full max-w-[300px] md:max-w-[400px] xl:max-w-[550px] mt-5 lg:mt-16' alt="" />
                        
                    </div>

                    <div className='lg:w-1/2 px-5  2xl:px-20 flex flex-col items-center'>
                        <h1 className='mt-10 mb-14 text-xl md:text-3xl font-semibold text-center text-white'>
                        Comece o seu futuro em um dos nossos loteamentos. O empreendimento certo para você está aqui.
                        </h1>
                        <a 
                            href="https://wa.me/5534996440078?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+receber+algumas+informa%C3%A7%C3%B5es."
                            target='_blank'
                            className='max-w-[400px] py-3 px-10 flex justify-center items-center gap-5 text-xl md:text-2xl font-semibold text-white rounded animate-bounce bg-[#193592] '
                        >
                            <FaWhatsapp size="40px" /> Entre em contato 
                        </a>
                    </div>
                </div>
                <div className='absolute bottom-[10%] left-[20%] md:left-[35%] lg:hidden'>
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