import React from 'react';

const TestimonialCard = ({ img, location, description, name }) => {
	return (
		<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  pt-7">
			<div class="flex flex-col items-center pb-10">
				<img
					class="w-24 h-24 mb-3 rounded-full shadow-lg"
					src={img}
					alt={name}
				/>
				<h5 class="mb-1 text-xl font-medium text-gray-900">{name}</h5>
				<span class="text-sm text-gray-500 dark:text-gray-400">{location}</span>
				<div class="flex mt-4 md:mt-6 px-3">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
