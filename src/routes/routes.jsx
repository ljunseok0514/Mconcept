import RootLayout from '@/layout/RootLayout';
import Category from '@/pages/Category';
import Detail from '@/pages/Details';
import Join from '@/pages/Join';
import Login from '@/pages/Login';
import Mainpage from '@/pages/Mainpage';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="login" element={<Login />} />
			<Route path="products/:id" element={<Details />} />
			<Route path="category" element={<Category />} />
			<Route path="products/:id" element={<Detail />} />
		</Route>,
	),
);

export default router;
