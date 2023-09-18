import React, {useEffect, useState} from 'react';

function ShoppingHistoryPopup() {
	const [isOpen, setIsOpen] = useState(false);
	const [shoppingHistory, setShoppingHistory] = useState([]);

	// 로컬 스토리지에서 최근 본 상품 목록 가져오기
	useEffect(() => {
		const storedShoppingHistory = JSON.parse(localStorage.getItem('shoppingHistory'));
		if (storedShoppingHistory) {
			setShoppingHistory(storedShoppingHistory);
		}
	}, []);

	return (
		<>
			<div className="popup">
				<h2>Shopping History</h2>
				<div className="content">
					{shoppingHistory.length > 0 ? (
						shoppingHistory.map((item) => (
							<div key={item.date}>
								<h3>{item.date}</h3>
								<ul>
									{item.products.map((product) => (
										<li key={product.id}>{product.name}</li>
									))}
								</ul>
							</div>
						))
					) : (
						<p>최근에 본 상품이 없습니다.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default ShoppingHistoryPopup;
