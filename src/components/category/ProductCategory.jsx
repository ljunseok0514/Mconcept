function ProductCategory() {
	return (
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
	);
}

export default ProductCategory;
