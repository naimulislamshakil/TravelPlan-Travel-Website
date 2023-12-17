import React from 'react';
import FeturePlaceCard from './FeturePlaceCard';
import Brazil from '../../image/image/images/featured-reo-de-janeiro-brazil.jpg';
import Germany from '../../image/image/images/featured-berlin-germany.jpg';
import Maldives from '../../image/image/images/featured-fuvahmulah-maldives.jpg';
import Thailand from '../../image/image/images/featured-khwaeng-wat-arun-thailand.jpg';
import Australia from '../../image/image/images/featured-north-bondi-australia.jpg';
import Italy from '../../image/image/images/featured-rome-italy.jpg';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const FeturePlace = () => {
	const cards = [
		{
			id: 1,
			img: Brazil,
			location: 'Reo De Janeiro, Brazil',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 2,
			img: Australia,
			location: 'North Bondi, Australia',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 3,
			img: Germany,
			location: 'Berlin, Germany',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 4,
			img: Thailand,
			location: 'Khwaeng wat arun, thailand',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 5,
			img: Italy,
			location: 'Rome, Italy',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 6,
			img: Maldives,
			location: 'fuvahmulah, maldives',
			icon: <FmdGoodOutlinedIcon />,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
	];
	return (
		<div className="container mt-16 text-center mx-auto">
			<span className="block text-[#787878] font-[300] text-[1.2rem] pb-[1rem] max-w-[450px] mx-auto leading-[1.7] uppercase tracking-[2px]">
				know about some places before your travel
			</span>
			<h2 className="text-[1.8rem] uppercase tracking-[2px] font-bold">
				featured places
			</h2>

			<div class="flex min-h-screen items-center justify-center ">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-2 ">
					{cards.map((card) => (
						<FeturePlaceCard
							key={card.id}
							img={card.img}
							icon={card.icon}
							description={card.description}
							location={card.location}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeturePlace;
