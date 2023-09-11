import Category from './views/Category';
import FooterBar from './layout/FooterBar';
import Login from './components/Login';
import Header from './layout/Header';

/**
 *  App은 가장 기본이 되는 함수
 * */
function App() {
	return (
		<>
			<Header />
			<Login />
			<Category />
			<FooterBar />
		</>
	);
}

export default App;
