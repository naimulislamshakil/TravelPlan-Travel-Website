import React from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const FeturePlaceCard = ({ img, icon, description, location }) => {
	return (
		<div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
			<div className="h-[100%] w-[100%] ">
				<img
					className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
					src={img}
					alt=""
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

			<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
				<div className="text-white items-center justify-center">
					<FmdGoodOutlinedIcon className="text-lg" />
					<span className="text-lg font-bold capitalize">{location}</span>
				</div>
				<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeturePlaceCard;
