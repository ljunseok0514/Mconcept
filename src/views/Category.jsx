import pb from '@/api/pocketbase';
import {getProductsImage} from '@/utils/getProductsImage';
// import { NavLink, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

function Category() {
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

/**
 *  Category Page
 * */

	return (
		<main className="m-auto mt-6 flex max-w-[1980px] px-2">
			<section className="mr-6 w-1/5">
				<h3 className="border-b border-black py-4 text-2xl font-black tracking-widest">
					<span className="block text-lg font-semibold tracking-tight">MEN</span>APPAREL
				</h3>
				<button
					className="float-right mr-2 mt-8 block h-[9px] w-[9px]"
					style={{
						background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") -30px -60px no-repeat`,
					}}
				></button>

				{/* <button
					className="float-right mr-2 mt-16 block h-[9px] w-[9px]"
					style={{
						background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") 0 -60px no-repeat`,
					}}
				></button> */}

				<dl className="px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="/Men/001">아우터</a>
						<button type="button" name="button"></button>
					</dt>
					<dd className="text-tertiary underline decoration-1">
						<a href="/Men/0010">VIEW ALL OUTER</a>
					</dd>
					<dd>
						<a href="/Men/001001">자켓</a>
					</dd>
					<dd>
						<a href="/Men/001004">점퍼</a>
					</dd>
					<dd>
						<a href="/Men/001002">패딩</a>
					</dd>
					<dd>
						<a href="/Men/001003">코트</a>
					</dd>
				</dl>

				<dl className="hidden px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="/Men/001">팬츠</a>
						<button type="button" name="button"></button>
					</dt>
					<dd className="text-tertiary underline decoration-1">
						<a href="/Men/0010">VIEW ALL OUTER</a>
					</dd>
					<dd>
						<a href="/Men/001001">슬랙스</a>
					</dd>
					<dd>
						<a href="/Men/001004">쇼츠</a>
					</dd>
					<dd>
						<a href="/Men/001002">치노</a>
					</dd>
					<dd>
						<a href="/Men/001003">스웻</a>
					</dd>
				</dl>

				<dl className="hidden px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="/Men/001">티셔츠</a>
						<button type="button" name="button"></button>
					</dt>
					<dd className="text-tertiary underline decoration-1">
						<a href="/Men/0010">VIEW ALL OUTER</a>
					</dd>
					<dd>
						<a href="/Men/001001">반팔</a>
					</dd>
					<dd>
						<a href="/Men/001004">스웻</a>
					</dd>
					<dd>
						<a href="/Men/001002">후드</a>
					</dd>
					<dd>
						<a href="/Men/001003">긴팔</a>
					</dd>
				</dl>

				<dl className="hidden px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="/Men/001">언더웨어</a>
						<button type="button" name="button"></button>
					</dt>
					<dd className="text-tertiary underline decoration-1">
						<a href="/Men/0010">VIEW ALL OUTER</a>
					</dd>
					<dd>
						<a href="/Men/001001">팬티</a>
					</dd>
					<dd>
						<a href="/Men/001004">드로즈</a>
					</dd>
					<dd>
						<a href="/Men/001002">트렁크</a>
					</dd>
				</dl>
			</section>

			<section className="w-4/5">
				<nav className="mb-6 text-xs">
					<ul className="flex flex-row">
						<li>
							<button type="button">HOME ＞ </button>
						</li>
						<li>
							<button type="button">MEN</button>
						</li>
					</ul>
				</nav>
				<div className="grid basis-1/2 grid-cols-2 border-l-grey-200 bg-slate-50 px-6 py-4 text-lg font-semibold">
					<h4>
						FILTER<button type="button"></button>
					</h4>
					<ul className="flex gap-40">
						<li>
							<button type="button">PRICE</button>
						</li>
						<li>
							<button type="button">BENEFIT</button>
						</li>
						<li>
							<button type="button">COLOR</button>
						</li>
						<li>
							<button type="button">DISCOUNT</button>
						</li>
					</ul>
				</div>
				<div className="border-t-2 border-black py-4 text-left">
					<span className="text-sm font-light text-black">
						<em className="a11y text-mlg font-normal not-italic">196</em> 개의 상품
					</span>

					<div className="float-right inline-block">
						<button className="border border-grey-300 px-4 py-1 text-base text-grey-400" type="button">
							신상품순
							<span
								className="float-right ml-4 mt-[2px] h-[11px] w-[11px]"
								style={{
									background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") -238px 6px no-repeat`,
								}}
							></span>
						</button>

						<ul className="hidden">
							<li>
								<a href="/">신상품순</a>
							</li>
							<li>
								<a href="/">판매순</a>
							</li>
							<li>
								<a href="/">할인율순</a>
							</li>
							<li>
								<a href="/">낮은 가격 순</a>
							</li>
							<li>
								<a href="/">높은 가격 순</a>
							</li>
							<li>
								<a href="/">리뷰순</a>
							</li>
						</ul>

					</div>
				</div>
				
				{/* products list items */}
				<div className="products grid grid-cols-6 grid-rows-2 gap-4 pb-10">
					{/* {[...Array(12)].map((_, index) => (
						<dl key={index} className="overflow-hidden text-ellipsis">
							{listItems}
						</dl>
					))} */}

						{data ? (
							data?.map((item) => {
								return (
									<div key={item.id}>
									<button></button>
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
									</div>
								);
							})
						) : (
							<div>ERROR</div>
						)}
				</div>

				<ul className="mb-6 flex flex-row justify-center font-bold">
					<li className="px-4"><a href='#'>1</a></li>
					<li className="font-normal text-grey-300"><a href='#'>2</a></li>
				</ul>
				
			</section>
		</main>
	);
}


export default Category;
