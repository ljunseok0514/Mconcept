// import {json, useParams} from 'react-router-dom';
// import React, {useEffect, useState} from 'react';
// import '../styles/detail.css';
// import {getProductsImage} from '../utils/getProductsImage';

// // 이미지
// import thumbnail01 from '../assets/images/detail/301859392_LM29886.jpg';
// import thumbnail02 from '../assets/images/detail/301859392_add1_GD94957.jpg';
// import mybrand from '../assets/images/detail/bg_heart.png';
// import share from '../assets/images/detail/share.png';
// import star from '../assets/images/detail/star.png';

// function DetailProducts() {
// 	return (
// 		// <div className="relative mx-auto mb-[200px] w-[1240px]">
// 		<div>
// 			<ul className="mb-7 mt-7 flex flex-row text-sm text-gray-500">
// 				<li className="mr-3">
// 					<p className="mr-2 inline">HOME</p> &#62;
// 				</li>
// 				<li className="mr-3">
// 					<p className="mr-2 inline">WOMEN</p> &#62;
// 				</li>
// 				<li className="mr-3">
// 					<p className="mr-2 inline">APPAREL</p> &#62;
// 				</li>
// 				<li className="mr-3">
// 					<p className="mr-2 inline">티셔츠</p> &#62;
// 				</li>
// 				<li className="text-black">후드</li>
// 			</ul>
// 			<section className="flex-rows mb-10 flex">
// 				<div className="mr-[55px]">
// 					{/* <div>
// 						<img src={thumbnail01} alt="" onClick={handleImageClick} />
// 						{zoomedArea && <img src={thumbnail01} alt="=" />}
// 					</div> */}
// 					<img className="mb-5" src={thumbnail01} alt="" />
// 					<ul className="flex w-[140px] flex-row justify-between">
// 						<li>
// 							<img className="w-15 h-20" src={thumbnail01} alt="" />
// 						</li>
// 						<li>
// 							<img className="w-15 h-20" src={thumbnail02} alt="" />
// 						</li>
// 					</ul>
// 				</div>

// 				<div className="w-[660px]">
// 					<div className="relative border-b-2 border-black">
// 						<h4 className="mb-4 text-[24px] font-medium">WV PROJECT</h4>
// 						<p className="mb-5 text-base font-normal">[패키지] 컬러인 후드 2PACK MJHD7622</p>
// 						<ul className="mb-5 flex flex-row">
// 							<li className="w-[125px]">
// 								<img className="mr-1 inline" src={star} alt="" />
// 								<span className="align-middle text-lg font-semibold">4.9</span>
// 							</li>
// 							<li className="mt-1 text-sm underline">55개 리뷰 &#62;</li>
// 						</ul>

// 						<dl className="mb-4">
// 							<dt className="float-left w-[125px] py-2 text-[13px]">정상가</dt>
// 							<dd className="flex flex-row py-2 text-[18px] text-grey-200">
// 								108,000 <p className="text-base">원</p>
// 							</dd>
// 							<dt className="float-left w-[125px] py-2">
// 								<span className="mr-2 text-[13px]">할인적용가</span>
// 								<button className="align-middle">
// 									<img src={tooltip} alt="" />
// 								</button>
// 							</dt>
// 							<dd className="flex flex-row py-2">
// 								74,900<p>원</p>
// 								<span className="text-tertiary">31&#37;</span>
// 							</dd>
// 						</dl>

// 						{/* 우측 버튼들 */}
// 						{/* <div className="t-0 r-0 absolute flex flex-row">
// 							<span>MY</span>
// 							<img className="h-4 w-7" src={mybrand} alt="" />
// 							<span>BRAND</span>
// 						</div>
// 						<button className="float-right">
// 							<img src={share} alt="" />
// 						</button> */}
// 					</div>

// 					<div className="flex flex-row justify-between py-[30px]">
// 						<button className="h-[70px] w-[320px] border border-black text-[20px]">수정</button>
// 						<button className="h-[70px] w-[320px] bg-black text-[20px] text-white">삭제</button>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }
