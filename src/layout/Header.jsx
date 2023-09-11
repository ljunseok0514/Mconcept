import Nav from '@/components/Nav';
import banner from '../assets/images/header/Header_Login_Header_add.png';

import GlobalSearch from '@/components/GlobalSearch';

function Header() {
	return (
		<>
			<header>
				<img src={banner} className="w-[100%]" />
				<GlobalSearch />
				<Nav />
			</header>
		</>
	);
}

export default Header;
