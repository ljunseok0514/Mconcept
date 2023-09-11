import Category from './views/Category';
import FooterBar from './layout/FooterBar';
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
			<FooterBar />
		</>
	);
}

export default App;
