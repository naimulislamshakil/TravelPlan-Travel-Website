import React from 'react';
import Person1 from '../../image/image/images/test-1.jpg';
import Person2 from '../../image/image/images/test-2.jpg';
import Person3 from '../../image/image/images/test-3.jpg';
import TestimonialCard from './TestimonialCard';

const Testmonial = () => {
	const testimonials = [
		{
			id: 1,
			img: Person1,
			name: 'Kevin Wilson',
			location: 'Trip to Brazil',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!',
		},
		{
			id: 2,
			img: Person2,
			name: 'Ben Davis',
			location: 'Trip to Maldives',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!',
		},
		{
			id: 3,
			img: Person3,
			name: 'Jaura Jones',
			location: 'Trip to Thailand',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!',
		},
	];
	return (
		<div className="container mx-auto mt-16 text-center">
			<span className="block text-[#787878] font-[300] text-[1.2rem] pb-[1rem] max-w-[450px] mx-auto leading-[1.7] uppercase tracking-[2px]">
				what our clients say about us
			</span>
			<h2 className="text-[1.8rem] uppercase tracking-[2px] font-bold">
				testimonials
			</h2>

			<div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mt-5">
				{testimonials.map((test) => (
					<TestimonialCard
						key={test.id}
						img={test.img}
						name={test.name}
						description={test.description}
						location={test.location}
					/>
				))}
			</div>
		</div>
	);
};

export default Testmonial;
