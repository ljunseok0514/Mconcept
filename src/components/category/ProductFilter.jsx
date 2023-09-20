/**
 *  ProductFilter component
 * */

function ProductFilter({brandName, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(brandName);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{brandName}</span>
		</label>
	);
}

export default ProductFilter;
