import { lazy } from 'react';
import Navbar from './Components/Navbar/index.jsx';

const HomePage = lazy(() => import('./pages/Home/index.jsx'));

export { Navbar, HomePage };
