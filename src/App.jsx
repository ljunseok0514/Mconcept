import Category from './views/Category';
import Login from './components/Login';
import Header from './layout/Header';
import Detail from './views/Detail';
import Mainpage from './views/Mainpage';

function App() {
	return (
		<>
			<Header />
			<Login />
			<Mainpage />
			<Category />
			<Detail/>
		</>
	);
}

export default App;
