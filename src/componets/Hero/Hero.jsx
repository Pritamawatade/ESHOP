import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../../assets/images/headphone-M8ndZJ0u.png";
import Image2 from "../../assets/images/vr-4ibBMPK9.png";
import Image3 from "../../assets/images/macbook-MZGIbM5F.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../Button/Button";

function Hero() {
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "HeadPhone",
      description: "The best headphone exist in the entire universe",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Virtual",
      description: "The best VR headset exist in the entire universe",
    },
    {
      id: 1,
      img: Image3,
      subtitle: "Beats Solo",
      title: "Beats",
      title2: "HeadPhone",
      description: "The best headphone exist in the entire universe",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    speed: 500,
  };
  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color
      flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {HeroData?.map((data, index) => (
              <div key={data.id}>
                <SwiperSlide>
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex flex-col justify-center gap-4 pl-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl text-black dark:text-white  sm:text-4xl font-bold">{data.subtitle}</h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-black font-bold dark:text-white">{data.title}</h1>
                        <h1 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true" 
                        className="text-5xl uppercase font-bold sm:text-[80px] md:text-[100px] xl:text-[126px] text-white dark:text-white/5">{data.title2}</h1>
                        <div className=""> 
                          <Button   
                          text={"Shop By Category"}
                          bgColor={"bg-red-700"}
                          textColor={"text-white"}
                          />
                        </div>
                      </div>
                      <div className="order-1 sm:order-2">
                        <div
                         
                         data-aos="zoom-in"
                         data-aos-duration="500"
                         data-aos-once="false"
                        >
                          <img
                            src={data.img}
                            alt=""
                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

export default Hero;
