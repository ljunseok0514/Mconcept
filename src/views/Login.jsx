import {useState} from 'react';

function Login() {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		console.log('test');
		setIsChecked(!isChecked);
	};

	return (
		<>
			<section className="mx-[auto] w-[1240px]">
				<h1 className=" mb-[42px] mt-[60px] text-center text-[41px]">LOGIN</h1>
				<h2 className="sr-only">로그인 정보 입력</h2>
				<form id="login-form" action="/login" method="POST" className=" border-t-2 border-solid border-[#171717] text-center">
					<div className="grid-cols-gap mt-[62px] grid grid-cols-[525px_190px] place-content-center gap-[20px]">
						<div className="inp_group relative">
							<div className="mb-[20px] ">
								<label htmlFor="userEmail" className="inline-block w-[105px] text-left text-[14px] text-[#333]">
									이메일 아이디
								</label>
								<input
									placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
									type="email"
									id="userEmail"
									name="userEmail"
									className="h-[40px] w-[420px] rounded-none bg-[#F2F2F2] py-[1px] pl-[20px] pr-[2px] text-[14px] focus:outline-none"
									required
								/>
							</div>
							<div className="mb-[17px]">
								<label htmlFor="password" className="inline-block w-[105px] text-left text-[14px] text-[#333]">
									비밀번호
								</label>
								<input
									placeholder="영문+숫자+특수문자 조합 8~16자리를 입력해주세요."
									type="password"
									id="password"
									name="password"
									className="h-[40px] w-[420px] rounded-none bg-[#F2F2F2] py-[1px] pl-[20px] pr-[2px] text-[14px] focus:outline-none"
									required
								/>
							</div>
							<div className="checkbox  relative mb-[20px] ml-[105px]">
								<input checked={isChecked} onChange={handleCheckboxChange} className="absolute left-[0] top-[0] z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" id="saveEmail" name="saveEmail" />
								<label
									htmlFor="saveEmail"
									className={` relative block pl-[35px] text-left text-[14px] leading-[25px] before:absolute before:left-0 before:top-0 before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')] before:bg-no-repeat before:content-['']
									${isChecked ? 'before:bg-[left_-30px_top_0px]' : ''}`}
								>
									이메일 아이디 저장
								</label>
							</div>
							<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
								<span className="incorrect">이메일 아이디를 @까지 정확하게 입력해 주세요.</span>
							</div>
							<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
								<span className="incorrect">아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요</span>
								<span id="failCount" className="text-[12px] text-[#fa5500]">
									(1/5)
								</span>
							</div>
							<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
								<span className="incorrect">이메일 아이디를 입력해주세요.</span>
							</div>
							<div className="incorrectBox bottom-[0] left-[0] ml-[105px] text-left text-[12px] text-[#fa5500] before:mb-[0] before:ml-[3px] before:mr-[4px] before:mt-[3px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-no-repeat before:align-top before:content-[''] ">
								<span className="incorrect">비밀번호를 입력해주세요.</span>
							</div>
						</div>
						<button type="submit" className="h-[100px] w-[190px] bg-[#000] text-[#fff]">
							로그인
						</button>
					</div>
				</form>
				<div className="join_email relative mx-[auto] mt-[26px] flex justify-center border-t-[1px] border-solid border-[#ccc] py-[50px]">
					<p className="w-[354px] pt-[15px] text-[14px]">
						지금 가입하면 <strong>10% 할인 쿠폰+웰컴 쿠폰팩</strong> 증정
					</p>
					<div className="w-[326px]">
						<a href="/" className="block h-[50px] w-[100%] min-w-[180px] border-[1px] border-solid border-[rgb(51,51,51)] bg-[#fff] px-[20px] text-center text-[14px] leading-[48px] text-[#000]">
							이메일로 가입하기
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;
