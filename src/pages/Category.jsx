import pb from '@/api/pocketbase';
import ProductCategory from '@/components/category/ProductCategory';
import ProductFilterList from '@/components/category/ProductFilterList';
import ProductsItems from '@/components/category/ProductItems';
import ProductPageNation from '@/components/category/ProductPageNation';
import ProductSort from '@/components/category/ProductSort';
import {useCallback, useEffect, useState} from 'react';

/**
 *  Category Page
 * */

function Category() {
	const [data, setData] = useState([]);
	const [brandNames, setBrandNames] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const readRecordList = await pb.collection('products').getFullList();
				let brandNames = readRecordList.map((record) => record.brand);
				brandNames = Array.from(new Set(brandNames));
				setBrandNames(brandNames);
				setData(readRecordList);
			} catch (error) {
				console.log(error);
				throw new Error('error');
			}
		}
		getProducts();
	}, []);

	const [filters, setFilters] = useState([]);
	const [filterList, setFilterList] = useState([]);

	const handleAddFilters = useCallback((newFilterItem) => {
		setFilters((filters) => [...filters, newFilterItem]);
	}, []);

	const handleRemoveFilters = useCallback((removeFilterItem) => {
		setFilters((filters) => filters.filter((f) => f !== removeFilterItem));
	}, []);

	const handleFilteredData = () => {
		setFilterList(filters);
	};

	const filteredData =
		filterList.length === 0
			? data
			: data.filter((item) => {
					let hasItem = false;
					for (const brandName of filterList) {
						if (item.brand === brandName) {
							hasItem = true;
							break;
						}
					}
					return hasItem;
			  });

	return (
		<main className="m-auto mt-6 flex max-w-[1980px] px-2">
			<ProductCategory />

			<section className="w-4/5">
				<nav className="mb-6 text-xs">
					<ul className="flex flex-row">
						<li>
							<button type="button">HOME &gt; </button>
						</li>
						<li>
							<button type="button">MEN</button>
						</li>
					</ul>
				</nav>

				<ProductFilterList brandNames={brandNames} onAdd={handleAddFilters} onRemove={handleRemoveFilters} onFilter={handleFilteredData} />

				<div className="product-quantity border-t-2 border-black py-4 text-left">
					<span className="text-sm font-light text-black">
						<em className="a11y text-mlg font-normal not-italic">{filteredData.length}</em> 개의 상품
					</span>

					<ProductSort />
				</div>

				<ProductsItems items={filteredData} />
				<ProductPageNation />
			</section>
		</main>
	);
}

export default Category;
