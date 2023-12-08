/* eslint-disable react-hooks/rules-of-hooks */
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import '../Home/home.css';
import { useNavigate } from 'react-router-dom';

const index = () => {
	const navigate = useNavigate();

	const home = () => {
		navigate('/');
	};

	const register = () => {
		navigate('/register');
	};

	const login = () => {
		navigate('/login');
	};
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h5"
					sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
				>
					ExploreHub
				</Typography>

				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<Button onClick={home} style={{ color: '#fff' }}>
						Home
					</Button>
					<Button style={{ color: '#fff' }}>BDT</Button>
					<Button style={{ color: '#fff' }}>BD</Button>
					<Button style={{ color: '#fff' }}>
						<HelpOutlinedIcon />
					</Button>
					<Button style={{ color: '#fff' }}>List your property</Button>
					<Button
						onClick={register}
						style={{
							marginLeft: '20px',
							color: '#3f51b5',
							backgroundColor: '#fff',
						}}
						variant="contained"
					>
						Register
					</Button>
					<Button
						onClick={login}
						style={{
							marginLeft: '10px',
							color: '#3f51b5',
							backgroundColor: '#fff',
						}}
					>
						LogIn
					</Button>
				</Box>
				<Box sx={{ display: { xs: 'flex', md: 'none' } }}>nnn</Box>
			</Toolbar>
		</AppBar>
	);
};

export default index;
