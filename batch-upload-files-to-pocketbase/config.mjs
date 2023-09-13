/* 사용자 정의 구성 ---------------------------------------------------------------- */

// 1. 포켓호스트 URL을 작성합니다.
export const PB_URL = 'https://little-manchester.pockethost.io';

// 2. 업로드 할 콜렉션(collection) 이름을 작성합니다.
export const PB_COLLECTION = 'products';

// 3. 이미지를 저장할 필드(field) 이름을 작성합니다.
export const IMAGE_KEY = 'photo';
export const IMAGE_KEY2 = 'details';

// 4. 업로드 디렉토리(폴더) 이름을 설정합니다.
export const UPLOAD_DIR = 'uploads';

// 5. 업로드 할 데이터를 작성합니다.
//    - 저장할 콜렉션에 해당 필드가 존재해야 합니다.
//    - 필드 타입(문자, 숫자, 파일 등)을 고려해 설정하세요.
//    - 파일 필드의 경우 업로드 폴더 안에 있는 파일 이름이 정확해야 합니다.
export const uploadDataList = [
	// 예시 데이터
	{
		photo: ['outer_1_thumbnail.png', 'outer_1_thumbnail.png'],
		details: ['outer_1_thumbnail.png', 'outer_1_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'VELOUR CORDUROY BLOUSON / BURGUNDY',
		name: '이름',
		color: 'PURPLE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 259000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
	{
		photo: ['outer_2_thumbnail.png', 'outer_2_thumbnail.png'],
		details: ['outer_2_thumbnail.png', 'outer_2_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'STAR ZIP-UP HOODIE / PURPLE',
		name: '이름',
		color: 'PURPLE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 148000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
	{
		photo: ['outer_3_thumbnail.png', 'outer_3_thumbnail.png'],
		details: ['outer_3_thumbnail.png', 'outer_3_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'PIGMENT MA-1 JUMPER / CHARCOAL',
		name: '이름',
		color: 'BURGUNDY',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 348000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
	{
		photo: ['outer_4_thumbnail.png', 'outer_4_thumbnail.png'],
		details: ['outer_4_thumbnail.png', 'outer_4_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'SYMBOL CHECK JACKET / NAVY&ORANGE',
		name: '이름',
		color: 'NAVY&ORANGE',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 289000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
	{
		photo: ['outer_5_thumbnail.png', 'outer_5_thumbnail.png'],
		details: ['outer_5_thumbnail.png', 'outer_5_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'SYMBOL CHECK JACKET / BROWN&GREEN',
		name: '이름',
		color: 'NAVY&GREEN',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 289000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
	{
		photo: ['outer_6_thumbnail.png', 'outer_6_thumbnail.png'],
		details: ['outer_6_thumbnail.png', 'outer_6_thumbnail.png'],
		brand: 'UNALLOYED',
		description: 'DOCKING KNIT JACKET / BLACK',
		name: '이름',
		color: 'NAVY&BLACK',
		size: '라지',
		material: '소재',
		country: '원산지',
		category: '아우터',

		field: 1,
		star: 5,
		quantity: 500,
		review: 500,
		price: 328000,
		discount: 1,

		//@ label
		// 뉴시즌
		newSeason: true,
		// 셀럽착용
		celebrity: false,
		// 쿠폰
		coupon: false,
		// 단독 판매
		only: false,

		a: '',
		b: '',
		c: '',
	},
];
