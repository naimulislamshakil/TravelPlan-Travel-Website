import { Route, Routes } from 'react-router';
import { Navbar, HomePage } from './Route';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
