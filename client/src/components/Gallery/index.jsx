import React from 'react';
import { Navbar } from '../../Route';
import AOS from 'aos';
import Gallary from './Gallary';
import dynamicTitle from '../../config/DynamicTitle';
import PopularPlace from './PopularPlace';
// ..
AOS.init();

const index = () => {
	dynamicTitle('Gallery');
	return (
		<div>
			<div className="banner">
				<div className="container mx-auto">
					{/* Transparent Navbar */}
					<Navbar />
					<div
						className="context_height"
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							// height:cal
						}}
					>
						<h2
							data-aos="fade-down"
							className="text-white text-[2.8rem] tracking-[2px] font-bold"
						>
							Gallery
						</h2>

						<p data-aos="fade-up" className="text-white lg:px-64 px-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							repellat unde optio deserunt excepturi velit culpa officiis
							perferendis corporis debitis odio modi commodi, reprehenderit,
							eveniet adipisci quibusdam aliquam at cupiditate nihil! Nisi quia
							voluptatem sunt necessitatibus laboriosam neque, corporis
							molestias sint beatae itaque cum eos deleniti aliquam, eaque nam
							reprehenderit officiis ipsam? Hic molestiae repellendus
							distinctio, architecto ipsum laudantium ea.
						</p>
					</div>
				</div>
			</div>

			{/* Gallery Section */}
			<Gallary />

			{/* Popular Place Secton  */}
			<PopularPlace />
		</div>
	);
};

export default index;
