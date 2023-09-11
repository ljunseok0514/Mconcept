import Category from './views/Category';
import Login from './components/Login';
import Header from './layout/Header';
import Detail from './views/Detail';
import Footer from './layout/Footer';

/**
 *  App은 가장 기본이 되는 함수
 * */

function App() {
	return (
		<>
			<Header />
			<Login />
			<Category />
			<Detail/>
			<Footer />
		</>
	);
}

export default App;
