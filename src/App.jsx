import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import AuthProvider from './contexts/Auth';
import {Toaster} from 'react-hot-toast';

function App() {
	return (
		<>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
			<Toaster />
		</>
	);
}

export default App;
