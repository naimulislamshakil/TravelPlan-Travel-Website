/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import dynamicTitle from '../../config/DynamicTitle';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import Datepicker from 'react-tailwindcss-datepicker';
import FeturePlace from './FeturePlace';

const index = () => {
	dynamicTitle('Home');

	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
		<div>
			<div
				className="banner"
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				{/* From  */}

				<div className="header-form">
					<h3>Choose Your Travel Location:</h3>

					<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 items-center">
						{/* Destination */}

						<div class="relative max-w-sm">
							<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<BedOutlinedIcon />
							</div>
							<input
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Destination Name"
							/>
						</div>

						{/* Date */}

						<Datepicker
							primaryColor={'fuchsia'}
							value={value}
							onChange={handleValueChange}
							showShortcuts={true}
						/>

						{/* sellect range */}
						<select
							id="countries"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
						>
							<option selected>Select budget quality ($$$)</option>
							<option value="$">Low</option>
							<option value="$$">Medium</option>
							<option value="$$$">Mid-High</option>
							<option value="$$$$">High</option>
						</select>
					</div>

					{/* Button */}
					<button type="button" className="button mt-2">
						Search
					</button>
				</div>
			</div>

			{/* Feture place Section */}
			<FeturePlace />
		</div>
	);
};

export default index;
