function Join() {
	return (
		<section className="join_container">
			<h2 className="subTitle relative min-w-[1240px] pb-[36px] pt-[55px] text-center text-[44px] uppercase">join member</h2>
			<div className="member_join mx-[auto] w-[1240px]">
				<div className="table_notice mb-[3px] mt-[-26px] text-right align-middle text-[12px] text-[#666]">
					<span className="pt-[2px] text-[#ff1414]">*</span>
					<span>필수 입력 항목</span>
				</div>
				<table className="mb-[60px] w-[100%] table-fixed border-separate border-spacing-0 border-b-[1px] border-t-[2px] border-solid border-[#171717]">
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
								이메일 아이디 <span className="pt-[2px] text-[#ff1414]">*</span>
							</th>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
export default Join;
