import { useRef } from "react";
import { bannerSettings } from "../../utils/react-slick-utils";
import Slider from "react-slick";
import { banners } from "../../constants";
import { GrNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";

const HomeHeroSection = () => {
  const bannerRef = useRef<Slider | null>(null);

  const previous = () => {
    bannerRef.current?.slickPrev();
  };

  const next = () => {
    bannerRef.current?.slickNext();
  };
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-11 xl:px-0 mt-5">
      <Slider {...bannerSettings} ref={bannerRef}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-52 sm:h-72 md:h-[400px] lg:h-[491px] relative bg-gray-300"
          >
            <img src={banner.imgPath} className="w-full h-full object-cover" />
            <div className="absolute inset-0 left-5 right-5 flex items-center justify-between z-20">
              <button
                className="text-white h-11 flex items-center justify-center w-11 bg-black bg-opacity-50 rounded-full hover:text-orange-600 transition-all duration-150 "
                onClick={previous}
              >
                <IoChevronBack className="text-3xl" />
              </button>
              <button
                className="text-white h-11 flex items-center justify-center w-11 bg-black bg-opacity-50 rounded-full hover:text-orange-600 transition-all duration-150"
                onClick={next}
              >
                <GrNext className="text-3xl" />
              </button>
            </div>
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-3 rounded-lg z-30 max-w-xs hidden md:block">
              <h2 className="text-lg font-bold">{banner.title}</h2>
              <p className="text-sm">{banner.discountMessage}</p>
              <p className="text-sm mt-2">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeHeroSection;
