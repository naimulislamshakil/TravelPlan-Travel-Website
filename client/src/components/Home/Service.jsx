import React from 'react';
import Hotel from '../../image/five-stars.png';
import Price from '../../image/price-tag.png';
import Guide from '../../image/tour-guide.png';

const Service = () => {
	const services = [
		{
			id: 1,
			icon: Hotel,
			title: 'Luxurious Hotel',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam labore doloribus accusamus incidunt similique enim aliquid rerum, impedit pariatur!',
		},
		{
			id: 2,
			icon: Guide,
			title: 'Travel Guide',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam labore doloribus accusamus incidunt similique enim aliquid rerum, impedit pariatur!',
		},
		{
			id: 3,
			icon: Price,
			title: 'Suitable Price',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam labore doloribus accusamus incidunt similique enim aliquid rerum, impedit pariatur!',
		},
	];
	return (
		<div className="service-banner">
			<div className="container mt-16 text-center mx-auto py-7">
				<span className="block text-white font-[300] text-[1.2rem] pb-[1rem] max-w-[450px] mx-auto leading-[1.7] uppercase tracking-[2px]">
					know about service that we offer
				</span>

				<h2 className="text-[1.8rem] text-white uppercase tracking-[2px] font-bold">
					our services
				</h2>

				<div className="grid md:grid-cols-3 sm:grid-cols-1 justify-center gap-2 mt-10">
					{services.map((service) => (
						<div class="max-w-sm p-6 rounded-lg shadow">
							<img
								className="w-16 mx-auto"
								src={service.icon}
								alt=""
								srcset=""
							/>

							<h3 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
								{service.title}
							</h3>

							<p class="mb-3 font-normal text-white">{service.description}</p>

							<button className="button rounded uppercase">Read more</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
