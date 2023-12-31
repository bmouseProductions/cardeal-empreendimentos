import { Swiper, /*SwiperSlide*/ } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Parallax, Autoplay } from "swiper/modules";

const HeaderCarousel = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " <span style='font-size:12px; font-weight: 100'>/</span> " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      }}
      speed={100}
      autoplay={true}
      modules={[Pagination, Navigation, Parallax, Autoplay]}
      parallax={true}
      mousewheel={true}
      className="h-[540px] w-full" // Make the carousel full viewport height
    >
      {/*
      <SwiperSlide className="hidden lg:block">
        <div
          className="h-full bg-cover bg-center bg-no-repeat text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/home.webp)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70  flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold"></h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="lg:hidden">
        <div
          className="h-full bg-contain bg-center bg-no-repeat text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/beno.webp)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70  flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold"></h1>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/Banner2.webp)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70  flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/MONTAGEM-001.webp)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Exemplo de texto aqui
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
          style={{
            backgroundImage: "url(/MONTAGEM-003.webp)",
          }}
        >
          <div className="blind-overlay absolute top-0 left-0 w-full h-full opacity-70 bg-black flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
              Exemplo de texto aqui
            </h1>
          </div>
        </div>
      </SwiperSlide>
      */}
    </Swiper>
  );
};

export default HeaderCarousel;
