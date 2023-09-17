import ProductFilter from '@/components/category/ProductFilter';
import ProductsItems from '@/components/category/ProductItems';
import ProductPageNation from '@/components/category/ProductPageNation';
// import { NavLink, useNavigate } from 'react-router-dom';

/**
 *  Category Page
 * */

function Category() {
	return(
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

			<ProductFilter/>

			<div className="product- border-t-2 border-black py-4 text-left">
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
			
			<ProductsItems />
			<ProductPageNation />
		</section>
	</main>
	);
}

export default Category;
