import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import { FaPlay, FaPause } from 'react-icons/fa';
import main1 from '../../public/main/main_banner_1.png';
import main2 from '../../public/main/main_banner_2.png';
import main3 from '../../public/main/main_banner_3.png';
import main4 from '../../public/main/main_banner_4.png';
import main5 from '../../public/main/main_banner_5.png';
import main6 from '../../public/main/main_banner_6.png';
import "./../styles/swiper.css";
import { useRef } from 'react';

function Slider() {

	const swiperRef = useRef(null);

	const handlePause = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handlePlay = () => {
    if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

	return (
		<Swiper
			ref={swiperRef}
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={
				{
					clickable: true,
				}
			}
			autoplay={{
				delay: 1500,
				disableOnInteraction: false,
			}}
			centeredSlides={true}
			navigation={
				{
					nextEl:"#nnavi",
					prevEl:'#pnavi'
				}
			}
			modules={[Autoplay, Pagination, Navigation]}
			className="mySwiper"
		>
			<SwiperSlide>
				<a href=""><img src={main1} alt="" /></a>
			</SwiperSlide>
			<SwiperSlide>
				<a href=""><img src={main2} alt="" /></a>
			</SwiperSlide>
			<SwiperSlide>
				<a href=""><img src={main3} alt="" /></a>
			</SwiperSlide>
			<SwiperSlide>
				<a href=""><img src={main4} alt="" /></a>
			</SwiperSlide>
			<SwiperSlide>
				<a href=""><img src={main5} alt="" /></a>
			</SwiperSlide>
			<SwiperSlide>
				<a href=""><img src={main6} alt="" /></a>
			</SwiperSlide>

			<div className='swiper-button-prev' id='pnavi'></div>
			<div className='swiper-button-next' id='nnavi'></div>
			

			<button onClick={handlePause} className='swiperPause'>
				<FaPause className='faPause'/>
			</button>
      <button onClick={handlePlay} className='swiperPlay'>
				<FaPlay className='faPlay'/>
			</button>

		</Swiper>
	);
}

export default Slider;


