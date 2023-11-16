import pb from '@/api/pocketbase';
import {useEffect, useState} from 'react';
import ProductInfo from '@/components/common/ProductInfo';

/**
 *  ProductNeat component
 * */

const style = ['text-left', 'ml-1', 'float-right'];

function ProductNeat({data}) {
	return (
		<>
			<div className="products mb-20 grid grid-cols-6 grid-rows-2 gap-6">
				{data ? (
					data
						?.filter((item) => item.category === '니트')
						.map((item) => {
							return <ProductInfo item={item} style={style} />;
						})
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
}

export default ProductNeat;
