import { Route, Routes } from 'react-router';
import { HomePage, LoginPage, RegisterPage, GalleryPage } from './Route';
import Footer from './Components/Home/Footer';
import ScrollToTop from 'react-scroll-to-top';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
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
