import logo from '../../public/header/logo.png';
import search from '../../public/header/iconSearch.png';
import join from '../../public/header/iconJoin.png';
import login from '../../public/header/iconLogin.png';
import my from '../../public/header/iconMy.png';
import shopping from '../../public/header/iconShopping.png';

function GlobalSearch() {
	return (
		<>
			<div className="relative mx-[auto] my-[0] h-[88px] w-[100%] max-w-[1920px] bg-[#fff] pr-[20px]">
				<a href="/" className="absolute left-[20px] top-[32px]">
					<img src={logo} alt="M CONCEPT 홈" />
				</a>
				<div className="absolute left-[50%] top-[9px] z-[101] h-[70px] w-[392px] translate-x-[-50%] bg-[#fff] py-[16px] pl-[11px] pr-[15px] after:absolute after:block after:h-[1px] after:w-[360px] after:bg-[#000] after:content-['']">
					<input
						className="float-left block h-[44px]  w-[335px] border-none bg-none p-0 text-[14px] leading-[44px] focus:outline-none"
						type="text"
						placeholder="지금 바로 [뉴시즌]으로 가을 신상품을 만나보세요!"
						maxLength={80}
						autoComplete="off"
					/>
					<button type="submit" className="bg-top-[9px] h-[44px] w-[25px] bg-[url('../../public/header/iconSearch.png')] bg-auto bg-center bg-no-repeat align-middle" aria-label="검색버튼"></button>
				</div>
				<ul className="float-right mr-[-17px] flex pt-[26px]">
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={join} alt="" />
							<strong className="block text-[12px]">JOIN</strong>
						</a>
					</li>
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={login} alt="" />
							<strong className="block text-[12px]">LOGIN</strong>
						</a>
					</li>
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={my} alt="" />
							<strong className="block text-[12px]">MY</strong>
						</a>
					</li>
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={shopping} alt="" />
							<strong className="block text-[12px]">0</strong>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default GlobalSearch;
