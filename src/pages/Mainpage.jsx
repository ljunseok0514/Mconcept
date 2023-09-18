import MainArticle from '@/components/mainPage/MainArticle';
import StyleStory from '@/components/mainPage/StyleStory';
import EventBanner from '@/components/mainPage/EventBanner';
import MakeItYours from '@/components/mainPage/MakeItYours';
import Modal from '@/components/Modal';
import popup1 from '@/assets/images/mainPage/main_popup_1.png';
import popup2 from '@/assets/images/mainPage/main_popup_2.png';

const popup = [
	{ 
		img : popup1,
		alt : '글로벌 브랜드 60% 세일',
		style: 'left-[100px]',
		today: 'today1',
	},
	{ 
		img : popup2,
		alt : '아우터 3일만 최대 70% 세일 페이지',
		style : 'left-[500px]',
		today: 'today2',
	},
]

function Mainpage() {
	return (
		<div className="mx-auto max-w-[1920px]">
			<MainArticle />
			<StyleStory />
			<EventBanner />
			<MakeItYours />
			<Modal popup={popup[0]} />
			<Modal popup={popup[1]} />
		</div>
	);
}

export default Mainpage;