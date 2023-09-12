/**
 *  Category Page
 * */
function Category() {
	return (
		<main className="m-auto mt-6 flex h-[1200px] max-w-[1980px] px-2">
			<section className="mr-6 w-1/5">
				<h3 className="border-b border-black py-4 text-2xl font-black tracking-widest">
					<span className="block text-lg font-semibold tracking-tight">MEN</span>APPAREL
				</h3>
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

				<div className="grid grid-cols-2 border-l-grey-200 bg-slate-50 px-6 py-4 text-lg font-semibold">
					<h4 className="">
						FILTER<button type="button"></button>
					</h4>
					<ul className="grid grid-cols-6 gap-20">
						<li>
							<button type="button">BRAND</button>
						</li>
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
						<em className="text-mlg not-italic">196</em> 개의 상품
					</span>

					<div className="float-right inline-block h-9 overflow-hidden p-1">
						<button className="border border-grey-300 px-4 py-1 text-base text-grey-400" type="button">
							신상품순 ▼
						</button>
						<ul>
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

				<div className="grid grid-cols-6 grid-rows-2 gap-4">
					<button className="hidden" type="button" name="heart">
						heart icon
					</button>
					<dl className="overflow-hidden text-ellipsis">
						<dd>
							<a href="/">
								<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
							</a>
						</dd>
						<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
						<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
						<dd className="inline-block font-bold text-grey-800">470,000</dd>
						<dd className="ml-2 inline-block text-right text-xs font-medium text-grey-200  line-through">470,000</dd>
						<dd className="float-right inline-block font-bold text-tertiary">10%</dd>
						<dd className="mt-4 w-[40px] bg-tertiary px-1 py-[1px] text-center text-xs font-medium text-white">
							<span>뉴시즌</span>
						</dd>
					</dl>

					{/* <dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl>
					<dl>
						<dd>
							<button className="hidden" type="button" name="heart">
								heart icon
							</button>
							<dt className="overflow-hidden text-ellipsis">
								<a href="/">
									<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
									<dd className="pb-2 text-base font-semibold">CUSTOMELLOW</dd>
									<dd className="pb-6 text-sm font-normal text-secondary">marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
									<dd className="font-medium  text-grey-800">470,000</dd>
								</a>
							</dt>
						</dd>
					</dl> */}
				</div>

				<ul className="text-center">
					<li>1</li>
				</ul>

			</section>
		</main>
	);
}

export default Category;
