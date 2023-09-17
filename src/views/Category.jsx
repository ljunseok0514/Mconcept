import ProductCategory from '@/components/category/ProductCategory';
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
		<ProductCategory/>

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

			<div className="product-quantity border-t-2 border-black py-4 text-left">
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
