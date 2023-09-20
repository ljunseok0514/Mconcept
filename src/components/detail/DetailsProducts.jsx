import pb from '@/api/pocketbase';
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

// import mybrand from '../../assets/images/detail/bg_heart.png';
// import share from '../../assets/images/detail/share.png';
import star from '../../assets/images/detail/star.png';
import tooltip from '../../assets/images/detail/tooltip.png';
import {getProductsImage} from '@/utils/getProductsImage';

// function ZoomLens() {
// const [imageSrc, setImageSrc] = useState('image.jpg');
// const [zoomedArea, setZoomedArea] = useState(null);

// function handleImageClick(event) {
//   const { offsetX, offsetY } = event.nativeEvent;
//   // 여기서 offsetX와 offsetY는 클릭한 위치의 좌표입니다.

//   // 확대할 범위 설정
//   const zoomFactor = 2;
//   const originalWidth = event.target.clientWidth;
//   const originalHeight = event.target.clientHeight;

//   // 확대할 좌상단 점 계산
//   const topLeftX = Math.max(0, offsetX - originalWidth / (2 * zoomFactor));
//   const topLeftY = Math.max(0, offsetY - originalHeight / (2 * zoomFactor));

//   // 확대할 우하단 점 계산
//   const bottomRightX = Math.min(originalWidth, offsetX + originalWidth / (2 * zoomFactor));
//   const bottomRightY = Math.min(originalHeight, offsetY + originalHeight / (2 * zoomFactor));

//   // 선택한 영역 크롭
//   const canvas = document.createElement('canvas');
//   canvas.width = bottomRightX - topLeftX;
// 	canvas.height= bottomRightY - topLeftY;
// 	const context=canvas.getContext("2d");
// 	context.drawImage(event.target,topLeftX,topLeftY,bottomRightX-topLeftX,bottomRightY-topLeftY,
//                     0,0,bottomRightX-topLeftX,bottomRightY-topLeftY);

// 	// 크롭된 이미지 데이터 URL 생성
// 	const croppedImageURL=canvas.toDataURL();

// 	// 크롭된 이미지 출력
//   setZoomedArea(croppedImageURL);
// }

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
