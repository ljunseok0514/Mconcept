import React, {useEffect, useRef, useState} from 'react';
import '../../styles/category.css';

// 카테고리 및 아이템 데이터
const categories = [
	{
		title: '아우터',
		items: ['VIEW ALL OUTER', '자켓', '점퍼', '패딩', '코트'],
	},
	{
		title: '팬츠',
		items: ['VIEW ALL PANTS', '슬랙스', '쇼츠', '치노', '스웻'],
	},
	{
		title: '티셔츠',
		items: ['VIEW ALL T-SHIRTS', '반팔', '스웻', '후드', '긴팔'],
	},
	{
		title: '니트',
		items: ['VIEW ALL NEAT', '반팔', '스웻', '후드', '긴팔'],
	},
];


function ProductCategoryItem() {
	const [activeItem, setActiveItem] = useState(null);

	return (
        <>
            {categories.map((category) => (
                <dl className="px-2 text-sm leading-8 my-4">
						<a className='text-lg font-bold' href="#">
							<button
								className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
								style={{
									backgroundImage: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png")`,
									backgroundPositionX: '0',
									backgroundPositionY: '-60px',
									backgroundRepeat: 'no-repeat',
								}}
								></button>
								{renderItem({name: category.title})}
						</a>
                    {category.items.map((item) => renderItem(item))}
                </dl>
            ))}
        </>
    );

	function renderItem(item) {
		let name;
		
		if (typeof item === "string") {
			name = item;
		} else if (typeof item === "object") {
			name = item.name;
	    }

	    const isActive = activeItem === name;
	    const className = isActive ? 'item-active' : '';

	    return (
	        <dd key={name} onClick={() => setActiveItem(name)} className={className}>
	            <a href="#">{name}</a>
	        </dd>
	    );
    }
}

export default ProductCategoryItem;