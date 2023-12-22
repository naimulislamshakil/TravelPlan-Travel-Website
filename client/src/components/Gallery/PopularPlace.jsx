import React from 'react';
import Place1 from '../../image/image/images/popular-1.jpg';
import Place2 from '../../image/image/images/popular-2.jpg';
import Place3 from '../../image/image/images/popular-3.jpg';
import Place4 from '../../image/image/images/popular-4.jpg';
import Place5 from '../../image/image/images/popular-5.jpg';
import Place6 from '../../image/image/images/popular-6.jpg';
import Place7 from '../../image/image/images/popular-7.jpg';
import Place8 from '../../image/image/images/popular-8.jpg';
import PopularPlaceCard from './PopularPlaceCard';

const PopularPlace = () => {
	const cards = [
		{
			id: 1,
			img: Place1,
			location: 'Reo De Janeiro, Brazil',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 2,
			img: Place2,
			location: 'North Bondi, Australia',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 3,
			img: Place3,
			rating: 4.95,
			person: 73,
			location: 'Berlin, Germany',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 4,
			img: Place4,
			location: 'Khwaeng wat arun, thailand',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 5,
			img: Place5,
			location: 'Rome, Italy',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 6,
			img: Place6,
			location: 'fuvahmulah, maldives',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 7,
			img: Place7,
			location: 'fuvahmulah, maldives',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
		{
			id: 8,
			img: Place8,
			location: 'fuvahmulah, maldives',
			rating: 4.95,
			person: 73,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam rerum nam dolorum adipisci! Ullam iusto rerum error dolor ab minus eaque delectus ipsam quia.',
		},
	];
	return (
		<div className="container mx-auto mt-16 text-center mb-3">
			<span className="block text-[#787878] font-[300] text-[1.2rem] pb-[1rem] max-w-[450px] mx-auto leading-[1.7] uppercase tracking-[2px]">
				know about some places before your travel
			</span>
			<h2 className="text-[1.8rem] uppercase tracking-[2px] font-bold">
				featured places
			</h2>

			{/* Popular Place card */}
			<div class="flex min-h-screen items-center justify-center ">
				<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 ">
					{cards.map((card) => (
						<PopularPlaceCard
							key={card.id}
							img={card.img}
							location={card.location}
							rating={card.rating}
							person={card.person}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularPlace;
