import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './Route';
import Navbar from './components/Navbar/index';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default App;
