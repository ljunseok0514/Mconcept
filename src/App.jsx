import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Category from './pages/Category';
import Login from './pages/Login';
import Header from './layout/Header';
import Detail from './pages/Detail';
import Footer from './layout/Footer';
import Join from './pages/Join';
import {BrowserRouter, Route, RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import AuthProvider from './contexts/Auth';
// import Mainpage from './views/Mainpage';

function App() {
	return (
		<>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</>
	);
}

export default App;
