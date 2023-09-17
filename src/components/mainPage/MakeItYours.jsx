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
			<section className='w-[1800px] mx-auto'>
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<div className="flex">
					<Swiper
						slidesPerView={5}
						spaceBetween={30}
						// loop={true}
						navigation={{
							nextEl: '#nextNavi',
							prevEl: '#prevNavi',
						}}
						modules={[Navigation]}
						className="mySwiper"
					>
						{data ? (
							data?.map((item) => {
								return (
									<SwiperSlide key={item.id}>
									<button></button>
										<a href="#">
											<div className="img">
												
												<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id}/>

												
											</div>
											<div className="text">
												<dl>
													<dt aria-label="제목"></dt>
													<dd>{item.brand}</dd>
													<dt aria-label="설명"></dt>
													<dd>{item.description}</dd>
													<dt aria-label="이름"></dt>
													<dd>{item.name}</dd>
													<dt aria-label="가격"></dt>
													<dd>{item.price}</dd>
													<dt aria-label="할인율"></dt>
													<dd>{item.discount * 100}</dd>
													<dt aria-label="할인가격"></dt>
													<dd>{item.price * (1 - item.discount)}</dd>
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
