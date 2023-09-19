/**
 *  ProductFilter component
 * */

import {useEffect, useState} from 'react';

function ProductFilter({brandName, onAdd, onRemove}) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		isChecked ? onAdd(brandName) : onRemove(brandName);
	}, [isChecked]);

	const handleChange = (e) => {
		const checkValue = e.target.checked;
		setIsChecked(checkValue);
	};

	return (
		<label>
			<input type="checkbox" checked={isChecked} onChange={handleChange} />
			<span className={`ml-1 text-base font-medium text-primary ${isChecked ? 'line-through' : ''}`.trim()}>{brandName}</span>
		</label>
	);
}

export default ProductFilter;
