import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import AuthProvider from './contexts/Auth';
import {Toaster} from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<>
			<HelmetProvider>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
				<Toaster />
			</HelmetProvider>
		</>
	);
}

export default App;
