import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { SwiperButton } from '../SwiperButton';

export default function App() {
  return (
    <div className="bg-white py-3 px-3 rounded-lg shadow-md">
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className={styles.mainSwiper}
      >
        {[...Array(10).keys()].map((i) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide className={styles.mainSwiper__slide}>
            <img src={`../../../Image/swiper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </div>
  );
}
