import { Route, Routes } from 'react-router';
import { Navbar, HomePage } from './Route';
import Footer from './Components/Home/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
