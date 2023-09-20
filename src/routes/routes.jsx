import RootLayout from '@/layout/RootLayout';
import Category from '@/pages/Category';
import Detail from '@/pages/Detail';
import Join from '@/pages/Join';
import Login from '@/pages/Login';
import Mainpage from '@/pages/Mainpage';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="login" element={<Login />} />
			<Route path="category" element={<Category />} />
			<Route path="products/:id" element={<recentlyItems />} />
		</Route>,
	),
);

export default router;
