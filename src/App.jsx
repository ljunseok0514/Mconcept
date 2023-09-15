import Category from './views/Category';
import Login from './views/Login';
import Header from './layout/Header';
import Detail from './views/Detail';
import Footer from './layout/Footer';
import Join from './views/Join';
import {BrowserRouter, Route, RouterProvider} from 'react-router-dom';
import router from './routes/routes';
// import Mainpage from './views/Mainpage';

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
