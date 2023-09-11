/* 사용자 정의 구성 ---------------------------------------------------------------- */

// 1. 포켓호스트 URL을 작성합니다.
export const PB_URL = 'https://little-manchester.pockethost.io';

// 2. 업로드 할 콜렉션(collection) 이름을 작성합니다.
export const PB_COLLECTION = 'products';

// 3. 이미지를 저장할 필드(field) 이름을 작성합니다.
export const IMAGE_KEY = 'photo';

// 4. 업로드 디렉토리(폴더) 이름을 설정합니다.
export const UPLOAD_DIR = 'uploads';

// 5. 업로드 할 데이터를 작성합니다.
//    - 저장할 콜렉션에 해당 필드가 존재해야 합니다.
//    - 필드 타입(문자, 숫자, 파일 등)을 고려해 설정하세요.
//    - 파일 필드의 경우 업로드 폴더 안에 있는 파일 이름이 정확해야 합니다.
export const uploadDataList = [
	// 예시 데이
	{name: 'junsoek2', brand: '9강9조', [IMAGE_KEY]: ['hero.jpg', 'mesh-back-pack.png']},
];
