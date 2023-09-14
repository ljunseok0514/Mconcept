import Category from './views/Category';
import Login from './components/Login';
import Header from './layout/Header';
import Detail from './views/Detail';
import Mainpage from './views/Mainpage';
import Footer from './layout/Footer';

function App() {
	return (
		<>
			{/* <Header /> */}
			<Login />
			<Mainpage />
			<Category />
			{/* <Detail/> */}
			<Footer />
		</>
	);
}

export default App;
