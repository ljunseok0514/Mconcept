import dummy from '@/assets/images/mainPage/dummy.png';

function MakeItYours() {
	return (
		<>
			<section>
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<ul className="flex justify-between">
					<li>
						<button></button>
						<a href="#">
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
		</>
	);
}

export default MakeItYours;