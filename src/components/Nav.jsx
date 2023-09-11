import iconGnbLogo from '../../public/header/iconGnbLogo.svg';
import cateLabel from '../../public/header/cateLabel.jpeg';
import cateCasual from '../../public/header/cateCasual.jpeg';
import cateGlobalshop from '../../public/header/cateGlobalshop.jpeg';
import cateLuxuryzone from '../../public/header/cateLuxuryzone.jpeg';
import cateManneiProductPic from '../../public/header/cateManneiProductPic.jpeg';
import NavList from './NavList.jsx';

function Nav() {
	return (
		<nav className="relative left-[0] right-[0] top-[0] z-[100] w-[100%] min-w-[1280px] border-b-[1px] border-solid border-[#e9e9e9] bg-[#fff]">
			<div className="global_nav_wrap px-[20px]">
				<div className="global_nav flex justify-center">
					<ul className="nav_left flex">
						<li className="hidden">
							<a href="/">
								<img src={iconGnbLogo} alt="M CONCEPT" />
							</a>
						</li>
						<NavList listTitle="NEW" name="test" />
						<NavList listTitle="MEN" />
						<NavList listTitle="WOMEN" />
						<NavList listTitle="BEAUTY" />
						<NavList listTitle="LIFE" />
						<NavList listTitle="SALE" />
						<NavList listTitle="DESIGNERE" />
					</ul>
					<ul className="nav_right flex">
						<NavList listTitle="PRE-SHOW" />
						<NavList listTitle="ORIGINAL" />
						<NavList listTitle="EVENT" />
						<NavList listTitle="BEST" />
					</ul>
					<ul className="utility float-right mr-[-17px] pt-[26px] before:table before:content-['']">
						<li className="nav_search float-left text-center uppercase">
							<a href="">
								<span className="icon inline-block h-[30px] w-[30px] bg-transparent bg-[url('../../public/header/iconSearch.png')] bg-center bg-no-repeat align-top"></span>
								<strong></strong>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<a
						className="after: absolute top-[0px] block w-[176px] overflow-hidden border-[1px] border-solid border-[#e9e9e9] pl-[14px] text-left text-[14px] leading-[46px] after:absolute after:right-[17px] after:top-[50%] after:mt-[-6px] after:block after:h-[12px] after:w-[12px] after:bg-[url('../../public/header/iconCatArrowOpen.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
						href="/"
					>
						CATEGORY
					</a>
					<div className="second_nav absolute left-[0] right-[0] top-[47px] z-[99px] cursor-default border-t-[1px] border-solid border-[#e9e9e9] bg-[#fff]">
						<div className="second_nav_cont relative mx-[auto] my-[0] min-h-[324px] w-[100%] max-w-[1920px] pb-[30px] pl-[20px] pr-[0] pt-[16px] text-left before:absolute before:left-[21px] before:top-[-2.5px] before:block before:h-[5px] before:w-[174px] before:bg-[#fff] before:content-['']">
							<div className="category_wrap relative float-left pt-[14px]">
								<div className="category_men flex w-[1232px] flex-wrap content-start pl-[170px]">
									<a
										href="/"
										className="absolute left-[0] top-[0px] h-[47px] w-[170px] pl-[15px] text-[17px] uppercase leading-[47px]  after:absolute after:right-[17px] after:top-[50%] after:mt-[-5px] after:block after:h-[10px] after:w-[9px] after:bg-[url('../../public/header/iconArrowRight.svg')] after:bg-auto after:bg-center after:bg-no-repeat after:content-['']"
									>
										men
									</a>
									<ul className="block w-[177px] pl-[30px] pr-[20px]">
										<li className="depth2 mb-[12px] text-[14px]">아우터</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												자켓
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												점퍼
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												패딩
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												코트
											</a>
										</li>
									</ul>
									<ul className="block w-[177px] pl-[30px] pr-[20px]">
										<li className="depth2 mb-[12px] text-[14px]">팬츠</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												슬랙스
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												쇼츠
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												치노
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												스웻
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												조거
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												카고
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												레깅스
											</a>
										</li>
									</ul>
									<ul className="block w-[177px] pl-[30px] pr-[20px]">
										<li className="depth2 mb-[12px] text-[14px]">티셔츠</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												반팔
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												스웻
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												후드
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												긴팔
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												카라
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												슬리브리스
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												터틀넷
											</a>
										</li>
									</ul>
									<ul className="block w-[177px] pl-[30px] pr-[20px]">
										<li className="depth2 mb-[12px] text-[14px]">언더웨어</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												팬티
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												드로즈
											</a>
										</li>
										<li>
											<a href="/" className="overflow-hidden text-ellipsis text-[13px] uppercase leading-[16px] text-[#7b7b7b]">
												트렁크
											</a>
										</li>
									</ul>
									<ul className="block w-[177px] pl-[30px] pr-[20px]"></ul>
									<ul className="block w-[177px] pl-[30px] pr-[20px]"></ul>
									<ul className="cate_banner mt-[50px] flex pl-[30px]">
										<li className="w-[129px]">
											<a href="/" className="block align-middle">
												<div className="img h-[94px]">
													<img className="h-[100%] w-[100%] object-cover align-middle" src={cateLabel} alt="" />
												</div>
												<p href="" className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">
													label
												</p>
											</a>
										</li>
										<li className="ml-[16px] w-[129px]">
											<a href="/" className="block align-middle">
												<div className="img h-[94px]">
													<img className="h-[100%] w-[100%] object-cover align-middle" src={cateCasual} alt="" />
												</div>
												<p href="" className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">
													Casual
												</p>
											</a>
										</li>
										<li className="ml-[16px] w-[129px]">
											<a href="/" className="block align-middle">
												<div className="img h-[94px]">
													<img className="h-[100%] w-[100%] object-cover align-middle" src={cateGlobalshop} alt="" />
												</div>
												<p href="" className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">
													Globalshop
												</p>
											</a>
										</li>
										<li className="ml-[16px] w-[129px]">
											<a href="/" className="block align-middle">
												<div className="img h-[94px]">
													<img className="h-[100%] w-[100%] object-cover align-middle" src={cateLuxuryzone} alt="" />
												</div>
												<p href="" className="mt-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] uppercase leading-[14px]">
													LUXURYZONE
												</p>
											</a>
										</li>
									</ul>
									<div className="product_list absolute right-[-216px] top-[14px]">
										<div className="product">
											<a href="" className="flex align-middle">
												<div className="img relative h-[117px] w-[88px] after:absolute after:left-[0] after:top-[0] after:block after:h-[100%] after:w-[100%]  after:bg-[#00000008] after:content-['']">
													<img src={cateManneiProductPic} className=" w-[100%]  " alt=""></img>
												</div>
												<div className="text w-[128px] pl-[10px] pt-[4px]">
													<div className="brand min-h-[auto] w-[auto] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] leading-[14px]">Belmain</div>
													<div className="desc mb-[10px] h-[32px] overflow-hidden break-all text-[12px] leading-[16px] text-[#7b7b7b]">23SS 발망 스웨터 AF1JO040 BB02GAB WHITE</div>
													<div className="price">
														<span className="discount_price mr-[6px] text-[14px]">607,000</span>
														<span className="discount_rate mr-[6px] text-[12px] text-[#fa5500]">42%</span>
													</div>
												</div>
											</a>
										</div>
										<div className="product mt-[30px]">
											<a href="" className="flex align-middle">
												<div className="img relative h-[117px] w-[88px] after:absolute after:left-[0] after:top-[0] after:block after:h-[100%] after:w-[100%]  after:bg-[#00000008] after:content-['']">
													<img src={cateManneiProductPic} className=" w-[100%]  " alt=""></img>
												</div>
												<div className="text w-[128px] pl-[10px] pt-[4px]">
													<div className="brand min-h-[auto] w-[auto] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] leading-[14px]">Belmain</div>
													<div className="desc mb-[10px] h-[32px] overflow-hidden break-all text-[12px] leading-[16px] text-[#7b7b7b]">23SS 발망 스웨터 AF1JO040 BB02GAB WHITE</div>
													<div className="price">
														<span className="discount_price mr-[6px] text-[14px]">607,000</span>
														<span className="discount_rate mr-[6px] text-[12px] text-[#fa5500]">42%</span>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
