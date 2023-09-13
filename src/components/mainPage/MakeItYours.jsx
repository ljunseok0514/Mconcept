import dummy from '@/assets/images/mainPage/dummy.png';
import pb from '@/api/pocketbase';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchLocals() {
  const response = await fetch(`${getPocketHostURL('products')}`);
  return await response.json();
}

function MakeItYours() {

	// // Tanstack Query
  // const { data, error } = useQuery(['locals'], fetchLocals, {
  //   retry: 2,
  // });

	// const selectIndex = useLocalStore((state) => state.selectIndex);
  // const isSelect = selectIndex !== null;

  // // 오류가 발생한 경우 화면
  // if (error) {
  //   return (
  //     <div role="alert">
  //       <h2>{error.type}</h2>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

	return (
		<>
			{/* {
				dataList?.items?.map((item) => <li key={item.id}>{item.name}</li>)
			} */}


			<section>
				<h2 className="mb-8 text-center text-[54px] font-thin">MAKE IT YOURS</h2>
				<ul className="flex justify-between">
					<li>
						<button></button>
						<a href="#">
							<div className="img">
								<img src={dummy} alt="" />
							</div>
							<div className="text">
								<dl>
									<dt aria-label="제목"></dt>
									<dd>제목</dd>
									<dt aria-label="설명"></dt>
									<dd>설명</dd>
									<dt aria-label="이름"></dt>
									<dd>이름</dd>
									<dt aria-label="가격"></dt>
									<dd>가격</dd>
									<dt aria-label="할인율"></dt>
									<dd>할인율</dd>
									<dt aria-label="할인가격"></dt>
									<dd>할인가격</dd>
								</dl>
							</div>
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}

export default MakeItYours;