import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode } from "swiper/modules";

interface propsImg {
  image: string;
}

const info: propsImg[] = [
  {
    image: "/DJI_0004.JPG",
  },
  {
    image: "/DJI_0005.JPG",
  },
  {
    image: "/DJI_0011.JPG",
  },
  {
    image: "/DJI_0012.JPG",
  },
];

const SliderFrutal = () => {
  return (
    <section className="py-16 lg:py-32">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="relative mx-auto mb-10 text-center">
          <div className="lg:col-span-6 md:col-span-8 sm:col-span-10">
            <h6 className="font-light text-base uppercase tracking-[4px] mb-2 md:mb-3 teko">
              Nossa
            </h6>
            <h4 className="font-medium text-2xl md:text-4xl tracking-[2px] playfont">
              Galeria
            </h4>
          </div>
        </div>
        <div className="mx-auto">
          <div className="p-0">
            <div className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                  // When window width is >= 768px (desktop)
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {info.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="mb-14 ">
                      <div className=" relative imago ">
                        <img src={item.image} alt={`Imagem ${index + 1}`} />
                        {/*  <div className="mt-6 md:mt-8 text-center">
                          <h6 className="text-[#005ed3] text-xs font-medium uppercase tracking-wider">
                            Art & Illustration
                          </h6>
                          <h4 className="font-normal text-base md:text-2xl">
                            Inspirance new Space.
                          </h4>
                        </div> */}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderFrutal;
