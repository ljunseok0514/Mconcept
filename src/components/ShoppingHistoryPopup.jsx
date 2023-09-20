import pb from '@/api/pocketbase';
import {getProductsImage} from '@/utils/getProductsImage';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import close from '/public/common/popup_close.svg';
import { formatNumber } from '@/utils/formatNumber';

function ShoppingHistoryPopup({isOpen, setIsOpen}) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		// 로컬 스토리지에서 데이터 가져오기
		const currentHistory = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

		const fetchItems = async () => {
			let fetchedItems = [];

			for (let id of currentHistory) {
				try {
					// 각 아이템에 대해 서버에서 데이터 불러오기
					const response = await pb.collection('products').getOne(id);
					console.log(response);
					fetchedItems.push(response);
				} catch (error) {
					console.error('Error fetching item data:', error);
				}
			}

			setItems(fetchedItems.reverse());
		};

		fetchItems();
	}, []);

	useEffect(() => {
		// 컴포넌트가 마운트되면 body의 overflow를 hidden으로 설정하여 스크롤 제거
		document.body.style.overflow = 'hidden';

		return () => {
			// 컴포넌트가 언마운트되면 body의 overflow를 원래대로 되돌림(스크롤 복구)
			document.body.style.overflow = 'auto';
		};
	}, []);

	const closeModal = (e) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const handleDelete = (id) => {
		// 상태에서 아이템 제거
		setItems(items.filter((item) => item.id !== id));

		// 로컬 스토리지에서 아이템 제거
		let currentHistory = JSON.parse(localStorage.getItem('recentlyViewed'));

		if (currentHistory) {
			localStorage.setItem('recentlyViewed', JSON.stringify(currentHistory.filter((item) => item !== id)));
			fetchItems();
		}
	};

	return (
		<>
			<div className="fixed left-0 top-0 z-[102] h-full w-full bg-[rgba(0,0,0,0.2)]" onClick={closeModal}>
				<motion.div
					initial={{x: 500, opacity: 0.5}}
					animate={{x: 0, opacity: 1}}
					exit={{x: 500, opacity: 0.5}}
					transition={{
						duration: 0.5,
						type: 'tween',
					}}
					className="z-[103] float-right h-full w-1/4 transform bg-white pt-2"
					onClick={stopPropagation}
				>
					<button className="float-right mt-3 h-12 w-12 hover:scale-105 active:scale-75" onClick={closeModal}>
						<img src={close} alt="닫기" className="h-full w-full" />
					</button>
					<h2 className="p-4 text-2xl font-bold">SHOPPING HISTORY</h2>
					{/* ㅁㅁㅁㅁ */}

					<ul className="m-3 border-t-2 px-1 py-4 ">
						{items.length > 0 ? (
							items?.map((item) => (
								<li key={item.id} className="mb-6 flex justify-stretch gap-4">
									<div>
										<img src={getProductsImage(item, 'photo')} alt={item.name} key={item.id} className="h-28 w-24" />
									</div>

									<dl className="relative flex w-full flex-col gap-3">
										<button onClick={() => handleDelete(item.id)} className="absolute right-3 top-2 rounded-lg border p-3 hover:bg-gray-200 active:scale-95">
											삭제
										</button>
										<dt className="sr-only">브랜드</dt>
										<dd className="font-semibold">{item.brand}</dd>
										<dt className="sr-only">상품명</dt>
										<dd className="font-normal text-gray-500">{item.name}</dd>
										<dt className="sr-only">가격</dt>
										<dd className="font-normal text-gray-900 font-normal">
											{formatNumber(Math.floor(item.price * (1 - item.discount)))} 원
										</dd>
									</dl>
								</li>
							))
						) : (
							<div>최근 본 상품이 없습니다.</div>
						)}
					</ul>
				</motion.div>
			</div>
		</>
	);
}

export default ShoppingHistoryPopup;
