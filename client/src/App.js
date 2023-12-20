import { Route, Routes } from 'react-router';
import { Navbar, HomePage } from './Route';
import Footer from './Components/Home/Footer';
import ScrollToTop from 'react-scroll-to-top';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
			<ScrollToTop
				smooth
				color="black"
				style={{ justifyContent: 'center', alignItems: 'center' }}
			/>
		</div>
	);
}

export default App;
