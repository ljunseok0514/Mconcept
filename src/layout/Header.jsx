import Nav from '@/components/header/Nav';
import banner from '@/assets/images/header/heeader_banner.png';

import GlobalSearch from '@/components/header/GlobalSearch';

function Header() {
	return (
		<>
			<header className="mx-auto max-w-[1920px]">
				<img src={banner} alt="가을 쇼핑의 A to Z 어텀샵! 전 상품 10% 쿠폰" className="h-[100%] w-[100%]" />
				<GlobalSearch />
				<Nav />
			</header>
		</>
	);
}

export default Header;
