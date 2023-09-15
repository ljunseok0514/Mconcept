function Join() {
	return (
		<section className="join_container">
			<h2 className="subTitle relative min-w-[1240px] pb-[36px] pt-[55px] text-center text-[44px] uppercase">join member</h2>
			<div className="member_join mx-[auto] w-[1240px]">
				<div className="table_notice mb-[3px] mt-[-26px] text-right align-middle text-[12px] text-[#666]">
					<span className="pt-[2px] text-[#ff1414]">*</span>
					<span>필수 입력 항목</span>
				</div>
				<table summary="회원가입 정보 기입 표" className="mb-[60px] w-[100%] table-fixed border-separate border-spacing-0 border-b-[1px] border-t-[2px] border-solid border-[#171717]">
					<caption className="sr-only">회원가입 양식</caption>
					<colgroup className="table-column-group">
						<col className="w-[295px]" />
						<col />
					</colgroup>
					<tbody className="table-row-group align-middle ">
						<tr>
							<td colSpan="2" className="p-[0]">
								<div className="table h-[48px] w-[100%] bg-[#ff6160] text-center text-[#fff]">
									<strong className="table-cell align-middle text-[20px]">
										회원으로 가입하시면 즉시 사용가능한
										<span>10%</span>
										할인쿠폰을 드립니다.<em className="font-[bolder] text-[14px] font-normal"> (본인인증 완료한 계정당 1회 사용 가능)</em>
									</strong>
								</div>
							</td>
						</tr>
						<tr>
							<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
								<label htmlFor="custid">이메일 아이디</label>
								<span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] text-[14px] text-[#000]">
								<div className="va_m m-[0] inline-block align-middle">
									<input
										className="float-left h-[40px] w-[400px] border-[1px] border-solid border-[#f2f2f2] bg-[#f2f2f2] pl-[20px] align-middle text-[14px] leading-[38px] outline-none"
										type="text"
										name="custid"
										id="custid"
										maxLength={50}
										placeholder="@까지 정확하게 입력해주세요."
									/>
								</div>
								<div
									id="validation1"
									className="incorrect inline-block  before:mb-[0] before:ml-[16px] before:mr-[4px] before:mt-[1px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-center before:bg-no-repeat before:align-text-top before:content-['']"
								>
									<label id="checkid" className="text-left text-[12px] text-[#fa5500]">
										이메일 아이디를 입력해주세요.
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
								<label htmlFor="pw">비밀번호</label> <span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] text-[14px] text-[#000]">
								<div className="va_m m-[0] inline-block align-middle">
									<input
										className="float-left h-[40px] w-[400px] border-[1px] border-solid border-[#f2f2f2] bg-[#f2f2f2] pl-[20px] align-middle text-[14px] leading-[38px] outline-none"
										type="password"
										name="pw"
										id="pw"
										maxLength={16}
										placeholder="영문+숫자+특수문자 조합 8~16자리"
									/>
								</div>
								<div
									id="validation2"
									className="incorrect inline-block  before:mb-[0] before:ml-[16px] before:mr-[4px] before:mt-[1px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-center before:bg-no-repeat before:align-text-top before:content-['']"
								>
									<label id="checkpw" className="text-left text-[12px] text-[#fa5500]">
										8자~16자로 입력해주세요.
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
								<label htmlFor="pwconfirm">비밀번호 확인</label>
								<span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] text-[14px] text-[#000]">
								<div className="va_m m-[0] inline-block align-middle">
									<input
										className="float-left h-[40px] w-[400px] border-[1px] border-solid border-[#f2f2f2] bg-[#f2f2f2] pl-[20px] align-middle text-[14px] leading-[38px] outline-none"
										type="password"
										name="pwconfirm"
										id="pwconfirm"
										maxLength={16}
									/>
								</div>
								<div
									id="validation3"
									className="incorrect inline-block  before:mb-[0] before:ml-[16px] before:mr-[4px] before:mt-[1px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-center before:bg-no-repeat before:align-text-top before:content-['']"
								>
									<label id="checkpwconfirm" className="text-left text-[12px] text-[#fa5500]">
										8자~16자로 입력해주세요.
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
								<label htmlFor="join_name">이름</label> <span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] text-[14px] text-[#000]">
								<div className="va_m m-[0] inline-block align-middle">
									<input
										className="float-left h-[40px] w-[400px] border-[1px] border-solid border-[#f2f2f2] bg-[#f2f2f2] pl-[20px] align-middle text-[14px] leading-[38px] outline-none"
										type="text"
										name="join_name"
										id="join_name"
										maxLength={10}
									/>
								</div>
								<div
									id="validation7"
									className="incorrect inline-block  before:mb-[0] before:ml-[16px] before:mr-[4px] before:mt-[1px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-center before:bg-no-repeat before:align-text-top before:content-['']"
								>
									<label id="checkname" className="text-left text-[12px] text-[#fa5500]">
										8자~16자로 입력해주세요.
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
								이벤트 정보<span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] py-[14px] text-[14px] text-[#000]">
								<div className="input_button agree-all_box relative mr-[50px] inline-block">
									<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="radio" id="agree-all" />
									<label
										htmlFor="agree-all"
										className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')] before:bg-[left_0px_top_-30px]"
									>
										수신
									</label>
								</div>
								<div className="input_button disagree-all_box relative mr-[50px] inline-block">
									<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="radio" id="disagree-all" />
									<label
										htmlFor="disagree-all"
										className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')] before:bg-[left_0px_top_-30px]"
									>
										비수신
									</label>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<section className="join_agreement mb-[60px]">
					<div className="all_check_desc relative m-0 inline-block pb-[20px] pl-[40px] pt-[0]">
						<input className="absolute left-0 top-[0] z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" name="checkAll2" id="checkAll2" />
						<label
							htmlFor="checkAll2"
							className="before:-content[''] relative mt-[5px] block pl-[35px] text-[14px] leading-[25px] text-[#666] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')] "
						>
							<em className="text-[16px] not-italic	">전체동의합니다.</em>
							<br />
							전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다.
							<br />
							선택항목에 대한 동의를 거부하는 경우에도 회원가입 서비스는 이용 가능합니다.
						</label>
					</div>
					<ul>
						<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
							<div className="input_button relative mr-[50px] inline-block">
								<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" name="all_agree04" id="checkAgree5" />
								<label
									htmlFor="checkAgree5"
									className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')]"
								>
									만 14세 이상입니다.(필수)
								</label>
							</div>
						</li>
						<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
							<div className="input_button relative mr-[50px] inline-block">
								<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" name="all_agree04" id="checkAgree4" />
								<label
									htmlFor="checkAgree4"
									className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')]"
								>
									이용약관 동의.(필수)
								</label>
							</div>
							<button
								type="button"
								className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
							>
								내용보기
							</button>
						</li>
						<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
							<div className="input_button relative mr-[50px] inline-block">
								<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" name="all_agree02" id="checkAgree2" />
								<label
									htmlFor="checkAgree2"
									className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')]"
								>
									개인정보 수집 및 이용에 대한 동의(필수)
								</label>
							</div>
							<button
								type="button"
								className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
							>
								내용보기
							</button>
						</li>
						<li className="relative mb-[1px] h-[50px] bg-[#f2f2f2] pl-[40px] pt-[13px]">
							<div className="input_button relative mr-[50px] inline-block">
								<input className="absolute left-0 top-0 z-[1] h-[25px] w-[25px] opacity-0" type="checkbox" name="all_agree03" id="checkAgree3" />
								<label
									htmlFor="checkAgree3"
									className="before:-content[''] relative block pl-[35px] text-[14px] leading-[25px] text-[#333] before:absolute before:left-[0] before:top-[0] before:block before:h-[25px] before:w-[25px] before:bg-[url('../../public/sprīt_2.png')]"
								>
									개인정보 수집 및 이용안내(필수)
								</label>
							</div>
							<button
								type="button"
								className="open-layer absolute right-[40px] top-[14px] inline-block h-[20px] min-w-[60px] border-[1px] border-solid border-[#333] bg-[#fff] px-[8px] text-center align-middle text-[12px] leading-[18px]"
							>
								내용보기
							</button>
						</li>
					</ul>
				</section>
				<div className="join_btn_wrap text-center">
					<button
						className="mx-[8px] inline-block h-[50px] min-w-[180px] border-[1px] border-solid border-[rgb(51,51,51)] bg-[#fff] px-[20px] text-center text-[14px] leading-[48px]"
						type="button"
						id="btnConfirm"
						name="button"
					>
						취소
					</button>
					<button
						className="mx-[8px] inline-block h-[50px] min-w-[180px] border-[1px] border-solid border-[rgb(51,51,51)] bg-[#000] px-[20px] text-center text-[14px] leading-[48px] text-[#fff]"
						type="button"
						id="btnConfirm"
						name="button"
					>
						확인
					</button>
				</div>
			</div>
		</section>
	);
}
export default Join;
