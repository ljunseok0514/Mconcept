import story1 from '../../public/main/main_story_1.png';
import story2 from '../../public/main/main_story_2.png';
import story3 from '../../public/main/main_story_3.png';
import story4 from '../../public/main/main_story_4.png';
import event1 from '../../public/main/main_event_banner_1.png';
import event2 from '../../public/main/main_event_banner_2.png';
import event3 from '../../public/main/main_event_banner_3.png';
import event4 from '../../public/main/main_event_banner_4.png';
import dummy from '../../public/main/dummy.png';
import Slider from './Slider';

function Mainpage(params) {
	return (
		<div className="mx-auto w-[1920px]">
			<section className="mb-[5rem]">
				<article className="relative h-full">


						<Slider />

					

					{/* <a href="#">
						<img src={main1} alt="메인배너1" />
					</a> */}

					{/* <a href="#">
						<img src={main2} alt="메인배너1" />
					</a> */}
				</article>
			</section>

			<section>
				<h2 className="mb-8 text-center text-[54px] font-thin">STYLE STORY</h2>
				<ul className="flex justify-between gap-5">
					<li>
						<a href="">
							<figure>
								<img src={story1} alt="" />
								<dl>
									<dt aria-label="제목"></dt>
									<dd className="my-6 text-center text-2xl font-semibold">월간 라이프 9월호</dd>
									<dt aria-label="설명"></dt>
									<dd className="text-center text-base text-gray-500">
										전용 12%쿠폰, 가을의 초입에서 제안하는 새로운 라이프스타일.
										<br /> 3만원 쿠폰 증정 퀴즈 이벤트와 배송비 더블쿠폰 등 특별혜택 만나보기
									</dd>
								</dl>
							</figure>
						</a>
					</li>
					<li>
						<a href="">
							<figure>
								<img src={story2} alt="" />
								<dl>
									<dt aria-label="제목"></dt>
									<dd className="my-6 text-center text-2xl font-semibold">NIKE & ADIDAS POP-UP</dd>
									<dt aria-label="설명"></dt>
									<dd className="text-center text-base text-gray-500">
										GLOBAL SPORTS BRANDS <br /> 24H POP-UP SALE
									</dd>
								</dl>
							</figure>
						</a>
					</li>
					<li>
						<a href="">
							<figure>
								<img src={story3} alt="" />
								<dl>
									<dt aria-label="제목"></dt>
									<dd className="my-6 text-center text-2xl font-semibold">KEYWORD : F/W MAKEUP</dd>
									<dt aria-label="설명"></dt>
									<dd className="text-center text-base text-gray-500">
										성큼 다가온 가을, 키워드로 만나보는 23 F/W 메이크업 트렌드! <br /> 나만의 메이크업 트렌드 아이템을 최대 70% 세일 혜택으로 만나보세요.
									</dd>
								</dl>
							</figure>
						</a>
					</li>
					<li>
						<a href="">
							<figure>
								<img src={story4} alt="" />
								<dl>
									<dt aria-label="제목"></dt>
									<dd className="my-6 text-center text-2xl font-semibold">EXCLUSIVE KNITWEAR</dd>
									<dt aria-label="설명"></dt>
									<dd className="text-center text-base text-gray-500">
										TREND WE PICK: A VOYAGE <br /> 익스클루시브 니트웨어와 함께.
									</dd>
								</dl>
							</figure>
						</a>
					</li>
				</ul>
			</section>

			<section className="my-12 flex">
				<h2 className="sr-only">EVENT BANNER</h2>

				<a href="#" className="relative">
					<img src={event2} alt="" />
					<img src={event4} alt="" className="absolute right-0 top-0" />
				</a>

				<a href="#" className="relative">
					<img src={event1} alt="" />
					<img src={event3} alt="" className="absolute left-0 top-0" />
				</a>
			</section>

			<section>
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<ul className="flex justify-between">
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
					<li>
						<button></button>
						<a href="">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default Mainpage;
