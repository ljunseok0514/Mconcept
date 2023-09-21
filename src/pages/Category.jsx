import pb from '@/api/pocketbase';
import ProductCategory from '@/components/category/ProductCategory';
import ProductFilterList from '@/components/category/ProductFilterList';
import ProductsItems from '@/components/category/ProductItems';
import ProductNav from '@/components/category/ProductNav';
import ProductPageNation from '@/components/category/ProductPageNation';
import ProductSort from '@/components/category/ProductSort';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';

function Category() {
	const productFilterBrandRef = useRef(null);
	const productFilterColorRef = useRef(null);

	const [brands, setBrands] = useState([]);
	const [colors, setColors] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredBrands, setFilteredBrands] = useState([]);
    const [filteredBrandList, setFilteredBrandList] = useState([]); // 추가된 상태
    const [filteredColors, setFilteredColors] = useState([]); // 추가된 상태

	// 브랜드 필터 변경 핸들러
	const handleChangeBrandFilter = (newBrandName) => {
		setFilteredBrands((prev) => [...prev, newBrandName]);
	};

    // 색상 필터 변경 핸들러
    const handleChangeColorfilter = (newColorName) => {
        setFilteredColors((prev) => [...prev, newColorName]);
    };

	// 브랜드 필터 적용 핸들러
	const handleAssignBrandFilter= () => {
		setFilteredBrandList(filteredBrands);
	};

    // 색상 필터 적용 핸들러
    const handleAssignColorfilter= () => {
        setColors(filteredColors);
    };

	// 브랜드 필터 초기화 핸들러
	const handleResetFilteredBrandList= () => {
		setFilteredBrands([]);
        const checkboxes = productFilterBrandRef.current.querySelectorAll('input');
        checkboxes.forEach((checkbox) => checkbox.checked && (checkbox.checked=false));
	};

     // 색상 필터 초기화 핸들러
     const handleResetfilteredcolorlist= () => {
         setColors([]);
         const checkboxes = productFilterColorRef.current.querySelectorAll('input');
         checkboxes.forEach((checkbox) => checkbox.checked && (checkbox.checked=false));
     };
	 
	 let filteredProducts =
	 products.filter(product =>
		 (!filteredBrandList.length || filteredBrandList.includes(product.brand)) &&
		 (!filteredColors.length || filteredColors.includes(product.color))
	 );
	 
	useEffect(() => {
	    async function getProducts() {
            try{
                const productList= await pb.collection('products').getFullList();
                setProducts(productList);
                setBrands(Array.from(new Set(productList.map((product)=>product.brand))));
                setColors(Array.from(new Set(productList.map((product)=>product.color))));
            } catch(error){
                throw new Error('error');
            }
	    }
	    getProducts();
	    
	   }, []);


	return (
	    <>
	        <Helmet>
	            <title>Man Categories - M Concept</title>
	        </Helmet>
	        <main className="m-auto mt-6 flex max-w-[1980px] px-2">
	            <ProductCategory />
	            <section className="w-4/5">
	                <ProductNav/>
	                {/* Brands filter */}
	                <ProductFilterList ref={productFilterBrandRef} items={brands} onFilter={handleChangeBrandFilter} onAssign={handleAssignBrandFilter} onReset={handleResetFilteredBrandList}/>
	                {/* Colors filter */}
                    <ProductFilterList ref={productFilterColorRef} items={colors} onfilter={handleChangeColorfilter} onassign={handleAssignColorfilter} onreset={handleResetfilteredcolorlist}/>
	                
                    <div className="product-quantity border-t-2 border-black py-4 text-left">
	                    <span className="text-sm font-light text-black">
	                        <em className="a11y text-mlg font-normal not-italic">{filteredProducts.length}</em> 개의 상품
	                    </span>
	                    <ProductSort/>
	                </div>
	                
                    <ProductsItems data= {filteredProducts}/>
                    
                    <ProductPageNation/>
	            </section>
	        </main>
	    </>
	);
}

export default Category;
