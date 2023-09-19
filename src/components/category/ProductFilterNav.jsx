import React from 'react';

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(btn => {
	btn.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('clicked'));
        this.classList.add('clicked');
    });
});

function ProductFilterNav() {
	return (
		<>
			<ul className="filter-nav flex gap-24">
				<li>
					<button className="filter-btn" type="button">
						BRAND
					</button>
				</li>
				<li>
					<button className="filter-btn" type="button">
						PRICE
					</button>
				</li>
				<li>
					<button className="filter-btn" type="button">
						BENEFIT
					</button>
				</li>
				<li>
					<button className="filter-btn" type="button">
						COLOR
					</button>
				</li>
				<li>
					<button className="filter-btn" type="button">
						DISCOUNT
					</button>
				</li>
			</ul>
		</>
	);
}

export default ProductFilterNav;
