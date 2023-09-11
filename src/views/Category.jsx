/**
 *  Category Page
 * */
function Category() {
	return (
		<main className="m-auto mt-4 flex h-[1200px] max-w-[1980px] px-2">
			<section className="mr-6 w-1/5">
				<h3 className="border-b border-black py-4 text-2xl font-black tracking-widest">
					<span className="block text-lg font-semibold tracking-tight">MEN</span>APPAREL
				</h3>
				<dl className="px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold text-tertiary">
						<a href="/Men/001">아우터</a>
						<button type="button" name="button"></button>
					</dt>
					<dd className="underline decoration-1 text-tertiary">
						<a href="/Men/0010">VIEW ALL OUTER</a>
					</dd>
					<dd class="">
						<a href="/Men/001001">자켓</a>
					</dd>
					<dd class="">
						<a href="/Men/001004">점퍼</a>
					</dd>
					<dd class="">
						<a href="/Men/001002">패딩</a>
					</dd>
					<dd class="">
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

				<div className="flex border-t border-l-grey-200 bg-slate-50 px-6 py-4 font-semibold">
					<h4 className="basis-1/2">
						FILTER<button type="button"></button>
					</h4>
					<ul className="flex gap-16">
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
					<span className="float-left">
						<em id="filterCnt">196</em> 개의 상품
					</span>

					<div className="h-8 overflow-hidden p-1 text-right">
						<button type="button">신상품순 ▼</button>
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

				<div className="grid grid-cols-6 grid-rows-4 gap-4">
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
					<dl class="product">
						<div>
							<dd>
								<button type="button" name="heart" onclick="/">
									heart
								</button>
								<dt>
									<a href="/">
										<img src="https://product-image.wconcept.co.kr/productimg/image/img1/85/303733185_VX94985.jpg"></img>
										<dd>CUSTOMELLOW</dd>
										<dd>marlane stripe double breasted suit jacket_CWFBW23205NYX</dd>
										<dd>470,000</dd>
									</a>
								</dt>
							</dd>
						</div>
					</dl>
				</div>
			</section>
		</main>
	);
}

export default Category;
