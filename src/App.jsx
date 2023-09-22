import {RouterProvider} from 'react-router-dom';
import router from '@/routes/routes';
import AuthProvider from '@/contexts/Auth';
import {Toaster} from 'react-hot-toast';
import {HelmetProvider} from 'react-helmet-async';
import {Suspense} from 'react';
import Spinner from '@/components/common/Spinner';

function App() {
	return (
		<>
			<HelmetProvider>
				<AuthProvider>
					<Suspense fallback={<Spinner size={200} message="페이지 로딩 중..." />}>
						<RouterProvider router={router} />
					</Suspense>
				</AuthProvider>
				<Toaster />
			</HelmetProvider>
		</>
	);
}

export default App;
