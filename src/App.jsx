import Category from './views/Category';
import Login from './components/Login';
import Header from './layout/Header';

/**
 *  App은 가장 기본이 되는 함수
 * */

import Detail from './views/Detail';

function App() {
	return (
		<>
			<Header />
			<Login />
			<Category />
			<Detail/>
		</>
	);
}

export default App;
