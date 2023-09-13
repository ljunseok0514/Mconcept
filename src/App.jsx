import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Category from './views/Category';
import Login from './components/Login';
import Header from './layout/Header';
import Detail from './views/Detail';
import Mainpage from './views/Mainpage';
import Footer from './layout/Footer';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
	
	// 모든 쿼리에 사용되는 기본 옵션
	defaultOptions: {
		queries: {
			// retry: 5, (기본 값: 3)
			// staleTime: 1 * 1000 * 60 * 60 * 24 * 7 // 7일간 (기본 값: 0)
			// cacheTime: 1 * 1000 * 60 * 5, // (기본 값: 5분)
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <Header /> */}
				{/* <Login /> */}
				<Mainpage />
				{/* <Category /> */}
				{/* <Detail/> */}
				{/* <Footer /> */}
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
