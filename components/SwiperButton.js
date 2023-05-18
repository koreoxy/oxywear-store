import { useSwiper } from 'swiper/react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
export const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center">
      <div className="px-10 pt-2">
        <button
          className="bg-green-600 rounded-md px-5 mr-5"
          onClick={() => swiper.slidePrev()}
        >
          <span className="text-white font-bold">
            <BiLeftArrow />
          </span>
        </button>
        <button
          className="bg-green-600 rounded-md px-5"
          onClick={() => swiper.slideNext()}
        >
          <span className="text-white font-bold">
            <BiRightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};
