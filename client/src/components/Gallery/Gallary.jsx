import React from 'react';
import Gallery1 from '../../image/image/images/gallery-1.jpg';
import Gallery2 from '../../image/image/images/gallery-2.jpg';
import Gallery3 from '../../image/image/images/gallery-3.jpg';
import Gallery4 from '../../image/image/images/gallery-4.jpg';
import Gallery5 from '../../image/image/images/gallery-5.jpg';
import Gallery6 from '../../image/image/images/gallery-6.jpg';
import Gallery7 from '../../image/image/images/gallery-7.jpg';
import Gallery8 from '../../image/image/images/gallery-8.jpg';
import Gallery9 from '../../image/image/images/gallery-9.jpg';

const Gallary = () => {
	const gallerys = [
		{
			id: 1,
			img: Gallery1,
		},
		{
			id: 2,
			img: Gallery2,
		},
		{
			id: 3,
			img: Gallery3,
		},
		{
			id: 4,
			img: Gallery4,
		},
		{
			id: 5,
			img: Gallery5,
		},
		{
			id: 6,
			img: Gallery6,
		},
		{
			id: 7,
			img: Gallery7,
		},
		{
			id: 8,
			img: Gallery8,
		},
		{
			id: 9,
			img: Gallery9,
		},
	];
	return (
		<div className="container mx-auto mt-16">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
				{gallerys.map((gallary) => (
					<img src={gallary.img} key={gallary.id} alt="" />
				))}
			</div>
		</div>
	);
};

export default Gallary;
