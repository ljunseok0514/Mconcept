import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import {getProductsImage} from '@/utils/getProductsImage';
import {NewSeasonLabel, CelebrityLabel, CouponLabel, OnlyLabel} from '@/components/category/ProductLabel';

/**
 *  ProductItems component
 * */

function ProductItems() {
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

	// 할인가격의 뒤에서 세번째 자리에 ',' 추가하는 정규식
	function formatNumber(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data?.map((item) => {
						return (
							<div key={item.id}>
								<a href="#">
									<div className="img">
										<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} />
									</div>

									<div className="relative">
										<dl className="absolut">
											<dt className="sr-only" aria-label="제목"></dt>
											<dd className="py-3 text-base font-semibold">{item.brand}</dd>
											<dt className="sr-only" aria-label="이름"></dt>
											<dd className="h-[20px] pb-1 text-sm font-normal text-secondary">{item.name}</dd>
											<dt className="sr-only" aria-label="설명"></dt>
											<dd className="h-[50px] pb-1 text-sm font-normal text-secondary">{item.description}</dd>

											<dt className="sr-only" aria-label="할인가격"></dt>
											<dd className="b-0 inline font-semibold text-grey-800">{formatNumber(Math.floor(item.price * (1 - item.discount)))}</dd>
											<dt className="sr-only" aria-label="가격"></dt>
											<dd className="b-0 ml-2 inline text-xs font-medium text-grey-200 line-through">{item.price}</dd>
											<dt className="sr-only" aria-label="할인율"></dt>
											<dd className="b-0 float-right inline font-bold text-tertiary">{item.discount !== 0 ? `${Math.floor(item.discount * 100)}%` : null}</dd>
											<dt className="sr-only" aria-label="태그"></dt>

											{item.newSeason && <NewSeasonLabel />}
											{item.celebrity && <CelebrityLabel />}
											{item.coupon && <CouponLabel />}
											{item.only && <OnlyLabel />}
										</dl>
									</div>
								</a>
							</div>
						);
					})
				) : (
					<div>ERROR</div>
				)}
			</div>
		</>
	);
}

export default ProductItems;
