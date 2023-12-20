import { lazy } from 'react';
import Navbar from './Components/Navbar/index.jsx';

const HomePage = lazy(() => import('./pages/Home/index.jsx'));
const LoginPage=lazy(()=>import("./pages/LoginPage/index.jsx"))

export { Navbar, HomePage, LoginPage };
