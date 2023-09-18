import {RouterProvider} from 'react-router-dom';
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
