import MainArticle from '@/components/mainPage/MainArticle';
import StyleStory from '@/components/mainPage/StyleStory';
import EventBanner from '@/components/mainPage/EventBanner';
import MakeItYours from '@/components/mainPage/MakeItYours';

function Mainpage(params) {
	return (
		<div className="mx-auto max-w-[1920px]">
			<MainArticle />
			<StyleStory />
			<EventBanner />
			<MakeItYours />
		</div>
	);
}

export default Mainpage;
