import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function recentlyItems(params) {
	const {id} = useParams(); // URL의 마지막 부분에서 상품 ID 가져오기

	useEffect(() => {
		// 현재 로컬 스토리지에 저장된 데이터 가져오기
		let currentHistory = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

		// 새로운 아이템이 이미 리스트에 있는지 확인하고 있다면 삭제
		if (currentHistory.find((item) => item === id)) {
			currentHistory = currentHistory.filter((item) => item !== id);
		}

		// 현재 보고 있는 아이템을 최근 본 목록의 가장 앞으로 추가
		currentHistory.unshift(id);

		localStorage.setItem('recentlyViewed', JSON.stringify(currentHistory));
	}, [id]); // id가 변경될 때마다 이 useEffect 실행

	return (
		<>
			<h1>gdgdgdgd</h1>
		</>
	);
}

export default Detail;
