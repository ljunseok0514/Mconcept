function Login() {
	return (
		<>
			<section>
				<h1 className=" mb-[42px] mt-[60px] text-center text-[41px]">LOGIN</h1>
				<h2 className="sr-only">로그인 정보 입력</h2>
				<form id="login-form" action="/login" method="POST" className="mx-[auto] w-[1240px] border-t-2 border-solid border-[#171717] text-center">
					<div className="grid-cols-gap mt-[62px] grid grid-cols-[525px_190px] place-content-center gap-[20px]">
						<div>
							<div className="mb-[20px] ">
								<label htmlFor="userEmail" className="inline-block w-[105px] text-left text-[14px] text-[#333]">
									이메일 아이디
								</label>
								<input type="email" id="userEmail" name="userEmail" className="h-[40px] w-[420px] rounded-none bg-[#F2F2F2] py-[1px] pl-[20px] pr-[2px] text-[14px] focus:outline-none" required />
							</div>
							<div>
								<label htmlFor="password" className="inline-block w-[105px] text-left text-[14px] text-[#333]">
									비밀번호
								</label>
								<input type="password" id="password" name="password" className="h-[40px] w-[420px] rounded-none bg-[#F2F2F2] py-[1px] pl-[20px] pr-[2px] text-[14px] focus:outline-none" required />
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
