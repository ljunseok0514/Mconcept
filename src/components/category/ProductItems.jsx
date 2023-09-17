import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import {getProductsImage} from '@/utils/getProductsImage';
import ProductLabel from '@/components/category/ProductLabel';

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
			<div className="products grid grid-cols-6 grid-rows-2 gap-6 mb-20">
				{data ? (
					data.map((item) => {
                        // .item 없이 photo와 나머지 값을 불러오려면 'useProducts.js'의 로직을 수정해야 합니다. 지금은 {}값을 item 으로 정의해서 불러옴.
						const {id, photo, name, brand, description, discount, price, main, newSeason} = item;
						return (
							<div key={id}>
								<button></button>
								<a href="#">
									<div className="img">
										<img src={getProductsImage(item, 'photo')} alt={name} key={id} />
									</div>

									<div className="relative">
										<dl className="absolut">
											<dt className="sr-only" aria-label="제목"></dt>
											<dd className="py-3 text-base font-semibold">{brand}</dd>
											<dt className="sr-only" aria-label="이름"></dt>
											<dd className="h-[20px] pb-1 text-sm font-normal text-secondary">{name}</dd>
											<dt className="sr-only" aria-label="설명"></dt>
											<dd className="h-[50px] pb-1 text-sm font-normal text-secondary">{description}</dd>

											<dt className="sr-only" aria-label="할인가격"></dt>
											<dd className="b-0 inline font-semibold text-grey-800">{formatNumber(Math.floor(price * (1 - discount)))}</dd>
											<dt className="sr-only" aria-label="가격"></dt>
											<dd className="b-0 ml-2 inline text-xs font-medium text-grey-200 line-through">{price}</dd>
											<dt className="sr-only" aria-label="할인율"></dt>
											<dd className="b-0 float-right inline font-bold text-tertiary">{discount !== 0 ? `${Math.floor(discount * 100)}%` : null}</dd>
											<dt className="sr-only" aria-label="태그"></dt>

											{newSeason && <ProductLabel />}
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

// {
// 	/* products list items */
// }

// <div className="products grid grid-cols-6 grid-rows-2 gap-4 pb-10">
// 	{/* {[...Array(12)].map((_, index) => (
// 						<dl key={index} className="overflow-hidden text-ellipsis">
// 							{listItems}
// 						</dl>
// ))} */}

// 		//@ label
// 		// 뉴시즌
// 		newSeason: true,
// 		// 셀럽착용
// 		celebrity: true,
// 		// 쿠폰
// 		coupon: true,
// 		// 단독 판매
// 		only: true,

// const listItems = products.map((products) => (
// 	<dl key={products.id}>
// 	</dl>
// ));
