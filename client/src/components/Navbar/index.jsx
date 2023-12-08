/* eslint-disable react-hooks/rules-of-hooks */
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	MenuList,
	Toolbar,
	Typography,
} from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../Home/home.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const index = () => {
	const [anchorNav, setAnchorNav] = useState(null);
	const navigate = useNavigate();

	const openMenu = (event) => {
		setAnchorNav(event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorNav(null);
	};

	const home = () => {
		navigate('/');
		setAnchorNav(null);
	};

	const register = () => {
		navigate('/register');
		setAnchorNav(null);
	};

	const login = () => {
		navigate('/login');
		setAnchorNav(null);
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
						variant="contained"
					>
						LogIn
					</Button>
				</Box>

				{/* For Mobile and tablet */}
				<Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
					<IconButton
						size="large"
						edge="start"
						onClick={openMenu}
						color="inherit"
						aria-controls="mobileMenu"
						aria-haspopup="true"
					>
						<MenuOutlinedIcon />
					</IconButton>

					{/* Menu for open when click 3 dots */}
					<Menu
						id="mobileMenu"
						anchorEl={anchorNav}
						open={Boolean(anchorNav)}
						onClose={closeMenu}
						sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
					>
						<MenuItem>
							<Button onClick={home} style={{ color: '#3f51b5' }}>
								Home
							</Button>
						</MenuItem>
						<MenuItem>
							<Button style={{ color: '#3f51b5' }}>BDT</Button>
						</MenuItem>
						<MenuItem>
							<Button style={{ color: '#3f51b5' }}>BD</Button>
						</MenuItem>
						<MenuItem>
							<Button style={{ color: '#3f51b5' }}>
								<HelpOutlinedIcon />
							</Button>
						</MenuItem>
						<MenuItem>
							<Button style={{ color: '#3f51b5' }}>List your property</Button>
						</MenuItem>
						<MenuItem>
							<Button
								onClick={register}
								style={{
									marginLeft: '20px',
									color: '#fff',
									backgroundColor: '#3f51b5',
								}}
								variant="contained"
							>
								Register
							</Button>
						</MenuItem>
						<MenuItem>
							<Button
								onClick={register}
								style={{
									marginLeft: '20px',
									color: '#fff',
									backgroundColor: '#3f51b5',
								}}
								variant="contained"
							>
								Login
							</Button>
						</MenuItem>
					</Menu>

					<Typography
						variant="h5"
						sx={{ display: { xs: 'flex', md: 'none' }, ml: '20px' }}
					>
						ExploreHub
					</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default index;
