import ProductCheckBox from '@/components/category/ProductCheckBox';

function ProductFilter() {
	return (
		<>
			<div className="flex justify-between border-l-grey-200 bg-slate-50 px-6 py-4 text-lg font-semibold">
				<h4>
					FILTER<button type="button"></button>
				</h4>
				<ul className="flex gap-10">
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
			<ProductCheckBox />
		</>
	);
}

export default ProductFilter;
