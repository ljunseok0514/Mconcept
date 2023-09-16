import pb from '@/api/pocketbase';
import {getProductsImage} from '@/utils/getProductsImage';
import {useEffect, useState} from 'react';
import ProductLabel from './ProductLabel';

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

	console.log(data);

	return (
		<>
			<div className="products grid grid-cols-6 grid-rows-2 gap-4 pb-10">
				{data ? (
					data?.map((item) => {
						return (
							<div key={item.id}>
								<button></button>
								<a href="#">
									<figure>
										<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} />
									</figure>

									<div className="relative h-[150px]">
										<dl className="absolut">
											<dt className="sr-only" aria-label="제목"></dt>
											<dd className="p-1 text-base font-semibold">{item.brand}</dd>
											<dt className="sr-only" aria-label="이름"></dt>
											<dd className="h-[20px] pb-1 text-sm font-normal text-secondary">{item.name}</dd>
											<dt className="sr-only" aria-label="설명"></dt>
											<dd className="h-[50px] pb-1 text-sm font-normal text-secondary">{item.description}</dd>

											<dt className="sr-only" aria-label="할인가격"></dt>
											<dd className="b-0 inline font-semibold text-grey-800">{Math.floor((item.price * (1 - item.discount)) / 10) * 10}</dd>
											<dt className="sr-only" aria-label="가격"></dt>
											{item.discount === 0 ? null : <dd className="b-0 ml-2 inline text-xs font-medium text-grey-200 line-through">{item.price}</dd>}
											<dt className="sr-only" aria-label="할인율"></dt>
											{parseInt(item.discount * 100) ? <dd className="b-0 float-right inline font-bold text-tertiary">{Math.floor(item.discount * 100)}%</dd> : null}
											<dt className="sr-only" aria-label="태그"></dt>
                                            <ProductLabel />
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
// 		<dd>
// 			<a href="/">
// 				<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
// 			</a>
// 		</dd>
// 		<dd className="pb-2 text-base font-semibold">{products.brand}</dd>
// 		<dd className="pb-6 text-sm font-normal text-secondary">{products.description}</dd>
// 		<dd className="inline-block font-bold text-grey-800">{products.price}</dd>
// 		<dd className="ml-2 inline-block text-right text-xs font-medium text-grey-200  line-through">{products.price}</dd>
// 		<dd className="float-right inline-block font-bold text-tertiary">{products.discount}%</dd>
// 		<dd className="mt-4 w-[40px] bg-tertiary px-1 py-[1px] text-center text-xs font-medium text-white">뉴시즌</dd>
// 	</dl>
// ));
