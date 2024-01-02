import { lazy } from 'react';
import Navbar from './Components/Navbar/index.jsx';

const HomePage = lazy(() => import('./pages/Home/index.jsx'));
const LoginPage=lazy(()=>import("./pages/LoginPage/index.jsx"))
const RegisterPage = lazy(() => import('./pages/RegisterPage/index.jsx'));
const GalleryPage = lazy(() => import("./pages/GalleryPage/index.jsx"))
const HotelPage=lazy(()=>import("./pages/HotelPage/index.jsx"))

export { Navbar, HomePage, LoginPage, RegisterPage, GalleryPage, HotelPage };
