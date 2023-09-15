import pb from '@/api/pocketbase';
import {getProductsImage} from '@/utils/getProductsImage';
import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';

// async function fetchLocals() {
// 	const response = await fetch(`${getPocketHostURL('products')}`);
// 	return await response.json();
// }

function MakeItYours() {
	const [data, setData] = useState([]);

	useEffect(() => {
		pb.autoCancellation(false);
		async function getProducts() {
			try {
				const readRecordList = await pb.collection('products').getFullList();
				setData(readRecordList);
			} catch (error) {
				console.log(error);
				throw new Error('error');
			}
		}
		getProducts();
	}, []);

	console.log(data);

	return (
		<>
			<section className='w-[1800px]'>
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<div className="flex">
					<Swiper
						slidesPerView={5}
						spaceBetween={30}
						// loop={true}
						// centeredSlides={true}
						navigation={{
							nextEl: '#nextNavi',
							prevEl: '#prevNavi',
						}}
						modules={[Navigation]}
						className="mySwiper px-14"
					>
						{data ? (
							data?.map(({id, photo, name, brand, description, discount, price, main}) => {
								return (
									<SwiperSlide key={id}>
										<button></button>
										<a href="#">
											<div className="img">
												<img src={getProductsImage(data[0], 'details')} alt="" />
											</div>
											<div className="text">
												<dl>
													<dt aria-label="제목"></dt>
													<dd>{brand}</dd>
													<dt aria-label="설명"></dt>
													<dd>{description}</dd>
													<dt aria-label="이름"></dt>
													<dd>{name}</dd>
													<dt aria-label="가격"></dt>
													<dd>{price}</dd>
													<dt aria-label="할인율"></dt>
													<dd>{discount * 100}</dd>
													<dt aria-label="할인가격"></dt>
													<dd>{price * (1 - discount)}</dd>
												</dl>
											</div>
										</a>
									</SwiperSlide>
								);
							})
						) : (
							<div>ERROR</div>
						)}
						
							<div className="swiper-button-prev" id="preNavi"></div>
							<div className="swiper-button-next" id="nextNavi"></div>
						
					</Swiper>
				</div>
			</section>
		</>
	);
}

export default MakeItYours;
