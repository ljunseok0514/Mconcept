import React from 'react';
import '../../styles/category.css';

/**
 *  ProductCategoryItem component
 * */

const category = document.querySelectorAll('.category-title', '.category-text');

category.forEach((btn) => {
	btn.addEventListener('click', function () {
		category.forEach((btn) => btn.classList.remove('clicked'));
		this.classList.add('clicked');
	});
});

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
	return (
		<>
			{categories.map((category, index) => (
				<dl key={index} className="px-2 text-sm leading-8">
					<dt className="pt-5 text-lg font-bold">
						<a href="#" className="category-title">
							{category.title}
						</a>
						<button
							className="float-right mr-2 mt-3 block h-[9px] w-[9px]"
							style={{
								background: `url("https://static.wconcept.co.kr/web/images/common/spr-common.png") -30px -60px no-repeat`,
							}}
						></button>
					</dt>

					<dd>
						<a href="#" className="category-text">
							{category.items[0]}
						</a>
					</dd>

					{category.items.slice(1).map((item, itemIndex) => {
						const key = `item-${itemIndex}`;
						return (
							<dd key={key}>
								<a href="#" className="category-text">
									{item}
								</a>
							</dd>
						);
					})}
				</dl>
			))}
		</>
	);
}

export default ProductCategoryItem;
