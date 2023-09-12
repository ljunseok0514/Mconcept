import {json} from 'react-router-dom';

// 이미지 불러오기
import thumbnail01 from '../assets/images/detail/301859392_LM29886.jpg';
import thumbnail02 from '../assets/images/detail/301859392_add1_GD94957.jpg';
import mybrand from '../assets/images/detail/bg_heart.png';
import share from '../assets/images/detail/share.png';
import star from '../assets/images/detail/star.png';
import intro from '../assets/images/detail/2022FW_intro.jpg';
import color from '../assets/images/detail/MJHD7622_01_pack_mj.jpg';
import detail01 from '../assets/images/detail/MJHD7622_navy_jn.jpg';
import detail02 from '../assets/images/detail/MJHD7622_info_jn.jpg';
import detail03 from '../assets/images/detail/MJHD7622_02_pack_mj.jpg';
import detail04 from '../assets/images/detail/MJHD7622_03_pack_mj.jpg';
import detail05 from '../assets/images/detail/MJHD7622_04_pack_mj.jpg';
import detail06 from '../assets/images/detail/MJHD7622_05_pack_mj.jpg';
import detail07 from '../assets/images/detail/MJHD7622_06_pack_mj.jpg';
import detail08 from '../assets/images/detail/MJHD7622_07_pack_mj.jpg';
import detail09 from '../assets/images/detail/MJHD7622_08_pack_mj.jpg';
import detail10 from '../assets/images/detail/MJHD7622_09_pack_mj.jpg';
import detail11 from '../assets/images/detail/MJHD7622_10_pack_mj.jpg';
import detail12 from '../assets/images/detail/MJHD7622_11_pack_mj.jpg';
import detail13 from '../assets/images/detail/MJHD7622_12_pack_mj.jpg';
import detail14 from '../assets/images/detail/MJHD7622_13_pack_mj.jpg';
import detail15 from '../assets/images/detail/MJHD7622_14_pack_mj.jpg';
import detail16 from '../assets/images/detail/MJHD7622_15_pack_mj.jpg';
import detail17 from '../assets/images/detail/MJHD7622_16_pack_mj.jpg';
import detail18 from '../assets/images/detail/MJHD7622_17_pack_mj.jpg';
import detail19 from '../assets/images/detail/MJHD7622_18_pack_mj.jpg';
import detail20 from '../assets/images/detail/MJHD7622_19_pack_mj.jpg';
import detail21 from '../assets/images/detail/MJHD7622_color_jn.jpg';
import detail22 from '../assets/images/detail/MJHD7622_size_jn.jpg';
import detail23 from '../assets/images/detail/cleaning_notice.jpg';
import list01_1 from '../assets/images/detail/list01/image_1.png';
import list01_2 from '../assets/images/detail/list01/image_2.png';
import list01_3 from '../assets/images/detail/list01/image_3.png';
import list01_4 from '../assets/images/detail/list01/image_4.png';
import list01_5 from '../assets/images/detail/list01/image_5.png';
import list01_6 from '../assets/images/detail/list01/image_6.png';
import list02_1 from '../assets/images/detail/list02/image_1.png';
import list02_2 from '../assets/images/detail/list02/image_2.png';
import list02_3 from '../assets/images/detail/list02/image_3.png';
import list02_4 from '../assets/images/detail/list02/image_4.png';
import list02_5 from '../assets/images/detail/list02/image_5.png';
import list02_6 from '../assets/images/detail/list02/image_6.png';
import more01 from '../assets/images/detail/more/img_01.jpeg';
import more02 from '../assets/images/detail/more/img_02.png';
import more03 from '../assets/images/detail/more/img_03.png';
import more04 from '../assets/images/detail/more/img_04.jpeg';
import more05 from '../assets/images/detail/more/img_05.png';
import more06 from '../assets/images/detail/more/img_06.png';
import more07 from '../assets/images/detail/more/img_07.png';
import more08 from '../assets/images/detail/more/img_08.png';
import icoMoreBrand from '../assets/images/detail/ico_more_brand.png';
import tooltip from '../assets/images/detail/tooltip.png';

function Detail() {
	return (
		<div className="relative mx-auto w-[1240px]">
			<ul className="mb-7 flex flex-row text-sm text-gray-500">
				<li className="mr-3">
					<p className="mr-2 inline">HOME</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">WOMEN</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">APPAREL</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">티셔츠</p> &#62;
				</li>
				<li className="text-black">후드</li>
			</ul>
			<section className="flex-rows mb-10 flex">
				<div className="mr-[55px]">
					<img className="mb-5" src={thumbnail01} alt="" />
					<ul className="flex w-[140px] flex-row justify-between">
						<li>
							<img className="w-15 h-20" src={thumbnail01} alt="" />
						</li>
						<li>
							<img className="w-15 h-20" src={thumbnail02} alt="" />
						</li>
					</ul>
				</div>

				<div className="w-[660px]">
					<div className="border-b-2 border-black">
						<h4 className="mb-4 text-[24px] font-medium">WV PROJECT</h4>
						<p className="mb-5 text-base font-normal">[패키지] 컬러인 후드 2PACK MJHD7622</p>
						<ul className="mb-5 flex flex-row">
							<li className="w-[125px]">
								<img className="mr-1 inline" src={star} alt="" />
								<span className="align-middle text-lg font-semibold">4.9</span>
							</li>
							<li className="text-sm">55개 리뷰</li>
						</ul>
						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">정상가</dt>
							<dd className="grey-200 flex flex-row py-2 text-[18px]">
								108,000 <p className="text-base">원</p>
							</dd>
							<dt className="float-left w-[125px] py-2">
								<span className="mr-2 text-[13px]">할인적용가</span>
								<button className="align-middle">
									<img src={tooltip} alt="" />
								</button>
							</dt>
							<dd className="flex flex-row py-2">
								74,900<p>원</p>
								<span>31&#37;</span>
							</dd>
						</dl>
					</div>
					<div className=""></div>
				</div>
			</section>

			<section className="mb-20">
				<div className="mb-4 flex flex-row">
					<h6 className="mr-2">More by WV PROJECT</h6>
					<img className="h-[14px] w-[14px] align-middle" src={icoMoreBrand} alt="" />
				</div>
				<ul className="flex w-[1240px] flex-row justify-between">
					<li className="contents:before h-[180px] w-[135px]">
						<img src={more01} alt="" />
					</li>
					<li className="contents:after: h-[180px] w-[135px]">
						<img src={more01} alt="" />
						<div className=""></div>
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more02} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more03} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more04} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more05} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more06} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more07} alt="" />
					</li>
					<li className="h-[180px] w-[135px]">
						<img src={more08} alt="" />
					</li>
				</ul>
			</section>

			<img src={intro} alt="" />
			<img src={color} alt="" />
			<img src={detail01} alt="" />
			<img src={detail02} alt="" />
			<img src={detail03} alt="" />
			<img src={detail04} alt="" />
			<img src={detail05} alt="" />
			<img src={detail06} alt="" />
			<img src={detail07} alt="" />
			<img src={detail08} alt="" />
			<img src={detail09} alt="" />
			<img src={detail10} alt="" />
			<img src={detail11} alt="" />
			<img src={detail12} alt="" />
			<img src={detail13} alt="" />
			<img src={detail14} alt="" />
			<img src={detail15} alt="" />
			<img src={detail16} alt="" />
			<img src={detail17} alt="" />
			<img src={detail18} alt="" />
			<img src={detail19} alt="" />
			<img src={detail20} alt="" />
			<img src={detail21} alt="" />
			<img src={detail22} alt="" />
			<img src={detail23} alt="" />

			<div className="mb-20">
				<h6 className="mb-4">You may also like</h6>
				<div className="flex flex-row">
					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_1} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_2} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_3} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_4} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_5} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_6} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h6 className="mb-4">Pick your beauty items</h6>
				<div className="flex flex-row">
					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_1} alt="" />
						</li>
						<li className="mb-4">FLUKE</li> <li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_2} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_3} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_4} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_5} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_6} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Detail;

// import photo from '@/assets/image.svg';
