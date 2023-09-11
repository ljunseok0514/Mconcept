import main1 from "../../public/main/main_banner_1.png";
import main2 from "../../public/main/main_banner_2.png";
import main3 from "../../public/main/main_banner_3.png";
import main4 from "../../public/main/main_banner_4.png";
import main5 from "../../public/main/main_banner_5.png";
import main6 from "../../public/main/main_banner_6.png";
import story1 from "../../public/main/main_story_1.png";
import story2 from "../../public/main/main_story_2.png";
import story3 from "../../public/main/main_story_3.png";
import story4 from "../../public/main/main_story_4.png";
import event1 from "../../public/main/main_event_banner_1.png";
import event2 from "../../public/main/main_event_banner_2.png";
import event3 from "../../public/main/main_event_banner_3.png";
import event4 from "../../public/main/main_event_banner_4.png";
import dummy from "../../public/main/dummy.png";

function Mainpage(params) {
	return (
		<div className="w-[1920px] mx-auto">
			<section className="mb-[5rem]">
				<article className="min-w-min">

					<a href="#">
						<img src={main1} alt="메인배너1" />
					</a>

					{/* <a href="#">
						<img src={main2} alt="메인배너1" />
					</a> */}

				</article>
			</section>

			<section>
				<h2 className="text-[54px] font-thin text-center mb-8">STYLE STORY</h2>
				<ul className="flex gap-5 justify-between">
					<li>
						<a href="">
							<img src={story1} alt="" />
						</a>
					</li>

					<li>
						<a href="">
							<img src={story2} alt="" />
						</a>
					</li>

					<li>
						<a href="">
							<img src={story3} alt="" />
						</a>
					</li>

					<li>
						<a href="">
							<img src={story4} alt="" />
						</a>
					</li>

				</ul>
			</section>

			<section className="flex my-12">
				<h2 className="sr-only">EVENT BANNER</h2>

					<a href="#" className="relative">
						<img src={event2} alt="" />
						<img src={event4} alt="" className="absolute right-0 top-0"/>
					</a>

					<a href="#" className="relative"> 
						<img src={event1} alt="" />
						<img src={event3} alt="" className="absolute top-0 left-0"/>
					</a>

			</section>

			<section>
				<h2 className="text-[54px] font-thin text-center mb-8">MAKE IT YOURS</h2>
				<ul className="flex justify-between">
					<li><a href=""><img src={dummy} alt="" /></a></li>
					<li><a href=""><img src={dummy} alt="" /></a></li>
					<li><a href=""><img src={dummy} alt="" /></a></li>
					<li><a href=""><img src={dummy} alt="" /></a></li>
					<li><a href=""><img src={dummy} alt="" /></a></li>
					<li><a href=""><img src={dummy} alt="" /></a></li>
				</ul>
			</section>
		</div>
	);
}

export default Mainpage;