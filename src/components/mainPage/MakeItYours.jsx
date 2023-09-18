import pb from '@/api/pocketbase';
import {getProductsImage} from '@/utils/getProductsImage';
import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

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

	return (
		<>
			<section className="mx-auto relative mb-10">
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<div className="flex px-20">
					<Swiper
						slidesPerView={5}
						spaceBetween={20}
						loop={true}
						navigation={{
							nextEl: '#nextNavi',
							prevEl: '#preNavi',
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						modules={[Navigation, Autoplay]}
						className="mySwiper"
					>
						{data ? (
							data?.filter(item=>item.main == true)
								.map((item) => {
								return (
									<SwiperSlide key={item.id}>
										<a href="#">
											<figure>
												<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} />
											</figure>

											<div className="text">
												<dl>
													<dt aria-label="제목"></dt>
													<dd>{item.brand}</dd>
													<dt aria-label="설명"></dt>
													<dd>{item.description}</dd>
													<dt aria-label="이름"></dt>
													<dd>{item.name}</dd>
													<dt aria-label="가격"></dt>
													{
														item.discount === 0 
														? null
														: <dd>{item.price}</dd>
													}
													<dt aria-label="할인율"></dt>
													{
														parseInt(item.discount * 100) 
														? <dd>{Math.floor(item.discount * 100)}%</dd>
														: null
													}
													<dt aria-label="할인가격"></dt>
													<dd>{Math.floor((item.price * (1 - item.discount))/10)*10}</dd>
												</dl>
											</div>
										</a>
									</SwiperSlide>
								);
							})
						) : (
							<div>ERROR</div>
						)}
					</Swiper>
						<div className="swiper-button-prev" id="preNavi"></div>
						<div className="swiper-button-next" id="nextNavi"></div>
				</div>
			</section>
		</>
	);
}

export default MakeItYours;
