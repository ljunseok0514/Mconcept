// import {getProductsImage} from '../../utils/getProductsImage';
import pb from '@/api/pocketbase';
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import thumbnail01 from '../../assets/images/detail/301859392_LM29886.jpg';
import thumbnail02 from '../../assets/images/detail/301859392_add1_GD94957.jpg';
// import mybrand from '../../assets/images/detail/bg_heart.png';
// import share from '../../assets/images/detail/share.png';
import star from '../../assets/images/detail/star.png';
import tooltip from '../../assets/images/detail/tooltip.png';
import {getProductsImage} from '@/utils/getProductsImage';

function DetailsProducts({data}) {
	const {id} = useParams();

	useEffect(() => {
		async function getProductsImage() {
			try {
				const readProduct = await pb.collection('products').getOne(id);

				setData(readProduct);
			} catch (error) {
				if (!(error instanceof ClientResponseError)) {
					console.error(error);
				}
			}
		}
		// getProduct();
	}, []);

	if (data) {
		return (
			<section className="flex-rows mb-10 flex">
				<div className="mr-[55px]">
					{/* <div>
									<img src={thumbnail01} alt="" onClick={handleImageClick} />
									{zoomedArea && <img src={thumbnail01} alt="=" />}
								</div> */}

					<img src={getProductsImage(data, 'photo')} alt={data.name} key={data.id} className="mb-5 w-[525px]" />
				</div>

				<div className="w-[660px]">
					<div className="relative border-b-2 border-black">
						<h4 className="mb-4 text-[24px] font-medium">{data.brand}</h4>
						<p className="mb-5 text-base font-normal">{data.name}</p>
						<ul className="mb-5 flex flex-row">
							<li className="w-[125px]">
								<img className="mr-1 inline" src={star} alt="" />
								<span className="align-middle text-lg font-semibold">{data.star}</span>
							</li>
							<li className="mt-1 text-sm underline">55개 리뷰 &#62;</li>
						</ul>

						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">정상가</dt>
							<dd className="flex flex-row py-2 text-[18px] text-grey-200">
								{data.price} <p className="text-base">원</p>
							</dd>
							<dt className="float-left w-[125px] py-2">
								<span className="mr-2 text-[13px]">할인적용가</span>
								<button className="align-middle">
									<img src={tooltip} alt="" />
								</button>
							</dt>
							<dd className="flex flex-row py-2">
								74,900<p>원</p>
								<span className="text-tertiary">31&#37;</span>
							</dd>
						</dl>
					</div>

					{/* 우측 버튼들 */}
					{/* <div className="t-0 r-0 absolute flex flex-row">
										<span>MY</span>
										<img className="h-4 w-7" src={mybrand} alt="" />
										<span>BRAND</span>
									</div>
									<button className="float-right">
										<img src={share} alt="" />
									</button> */}

					{/* 관리자페이지 버튼 */}
					{/* <div className="flex flex-row justify-between py-[30px]">
							<button className="h-[70px] w-[320px] border border-black text-[20px]">수정</button>
							<button className="h-[70px] w-[320px] bg-black text-[20px] text-white">삭제</button>
						</div> */}
				</div>
			</section>
		);
	}
}

export default DetailsProducts;
