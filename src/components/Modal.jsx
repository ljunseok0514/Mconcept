import { useEffect, useState } from "react";

function Modal({popup}) {
	const [showPopup, setShowPopup] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	let popupPosition = `absolute z-30 top-[600px] ${popup.style}`;

	useEffect(() => {
		const hasViewedToday = localStorage.getItem('hasViewedToday1');

		if (hasViewedToday) {
			setShowPopup(false);
		}

	}, []);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleClosePopup = () => {
		if (isChecked) {
			localStorage.setItem('hasViewedToday', 'true');
		}
		setShowPopup(false);
	};





	return (
		<>
			{showPopup && (
				<div>
					<div className={popupPosition}>
						<figure>
							<a href="">
								<img src={popup.img} alt={popup.alt} className="w-full" />
							</a>
						</figure>
						<div className="bg-[#f5f5f5] text-right ">
							<label htmlFor={popup.today}>오늘 하루 열지 않음 </label>
							<input type="checkbox" id={popup.today} checked={isChecked} onChange={handleCheckboxChange} />
							<button onClick={handleClosePopup}> 닫기</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;
