function Login() {
	return (
		<>
			<section>
				<h1 className=" mb-[42px] mt-[60px] text-center text-[41px]">LOGIN</h1>
				<h2 className="sr-only">로그인 정보 입력</h2>
				<form id="login-form" action="/login" method="POST" className="mx-[auto] w-[1240px] border-t-2 border-solid border-[#171717] text-center">
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
							<div>
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
							<div className="checkbox relative">
								<input className="absolute left-[0] top-[0] z-[1] mb-[20px] ml-[105px] h-[25px] w-[25px] " type="checkbox" id="saveEmail" name="saveEmail" />
								<label
									htmlFor="saveEmail"
									className="relative block pl-[35px] text-[14px] leading-[25px] before:absolute before:left-0 before:top-0 before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt.png')] before:content-['']"
								>
									이메일 아이디 저장
								</label>
							</div>
						</div>
						<button type="submit" className="h-[100px] w-[190px] bg-[#000] text-[#fff]">
							로그인
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
