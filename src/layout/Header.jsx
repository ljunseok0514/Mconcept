import Nav from '@/components/Nav';
import banner from '../assets/images/header/heeader_banner.png';

import GlobalSearch from '@/components/GlobalSearch';

function Header() {
	return (
		<>
			<header className="min-w-[1920px] mx-auto">
				<img src={banner} className="w-[100%] min-w-[1920px]" />
				<GlobalSearch />
				<Nav />
			</header>
		</>
	);
}

export default Header;
