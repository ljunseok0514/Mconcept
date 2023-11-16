import ShoppingHistoryPopup from '@/components/common/ShoppingHistoryPopup';
import {useEffect, useState} from 'react';
import sticky1 from '/public/mainPage/main_sticky_1.svg';
import sticky2 from '/public/mainPage/main_sticky_2.svg';
import sticky3 from '/public/mainPage/main_sticky_3.svg';

function StickyScroll() {
	const [showTopButton, setShowTopButton] = useState(false);
	const [showBottomButton, setShowBottomButton] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [shoppingHistory, setShoppingHistory] = useState([]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight || window.innerHeight;

		if (scrollTop > clientHeight) {
			setShowTopButton(true);
		} else {
			setShowTopButton(false);
		}

		if (scrollTop + clientHeight >= scrollHeight - 10) {
			setShowBottomButton(false);
		} else {
			setShowBottomButton(true);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

	const scrollToBottom = () => {
		window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
	};

	const openModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isOpen ? (
				<ShoppingHistoryPopup isOpen={isOpen} setIsOpen={setIsOpen} />
			) : (
				<div className="fixed bottom-7 right-6 flex flex-col gap-2 z-50">
					<button className="hover:opacity-70 active:scale-90 z" onClick={openModal}>
						<img src={sticky1} alt="최근 본 상품" className="w-[2.3vw]" />
					</button>
					{showTopButton && (
						<button className="scroll-button hover:opacity-70 active:scale-90" onClick={scrollToTop}>
							<img src={sticky2} alt="최상단으로 이동" className="w-[2.3vw]" />
						</button>
					)}
					{showBottomButton && (
						<button className="scroll-button hover:opacity-70 active:scale-90" onClick={scrollToBottom}>
							<img src={sticky3} alt="최하단으로 이동" className="w-[2.3vw]" />
						</button>
					)}
				</div>
			)}
		</>
	);
}

export default StickyScroll;
