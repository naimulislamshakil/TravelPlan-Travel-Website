/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Star from '../../image/star.gif';

const index = () => {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};
	return (
		<div className="container mx-auto">
			<div className="grid lg:grid-cols-3">
				<div className="ml-4">
					<h3 className="text-[1rem]  tracking-[1px] text-[#787878] font-bold">
						Booking Details
					</h3>

					<div>
						<h5 className="mt-5 text-base text-[#787878]">Check In/Out</h5>
						<div className="my-3">
							<Datepicker
								primaryColor={'#fff'}
								value={value}
								onChange={handleValueChange}
								showShortcuts={true}
							/>
						</div>
					</div>

					<div>
						<h5 className="mt-2 text-base text-[#787878]">Location</h5>
						<div className="my-3">
							<input
								type="text"
								id="default-input"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
								placeholder="Coxo's Bazar"
							/>
						</div>
					</div>

					<div>
						<h5 className="mt-2 text-base text-[#787878]">Budget</h5>
						<div className="my-3">
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3"
							>
								<option selected>Select budget quality ($$$)</option>
								<option value="$">Low</option>
								<option value="$$">Medium</option>
								<option value="$$$">Mid-High</option>
								<option value="$$$$">High</option>
							</select>
						</div>
					</div>

					{/* Review */}
					<div className="">
						<h5 className="mt-2 text-base text-[#787878]">Review score</h5>

						<div className="mt-2 h-32 overflow-auto">
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900"
								>
									Excellent
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900"
								>
									Very Good
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900"
								>
									Average
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900"
								>
									Poor
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900"
								>
									Terrible
								</label>
							</div>
						</div>
					</div>

					{/* Hotel Star */}
					<div className="">
						<h5 className="mt-2 text-base text-[#787878]">Hotel Star</h5>

						<div className="mt-2 h-32 overflow-auto">
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900 flex"
								>
									{[1, 2, 3, 4, 5].map((i) => (
										<img className="w-6" src={Star} alt="star" />
									))}
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900 flex"
								>
									{[1, 2, 3, 4].map((i) => (
										<img className="w-6" src={Star} alt="star" />
									))}
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900 flex"
								>
									{[1, 2, 3].map((i) => (
										<img className="w-6" src={Star} alt="star" />
									))}
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900 flex"
								>
									{[1, 2].map((i) => (
										<img className="w-6" src={Star} alt="star" />
									))}
								</label>
							</div>
							<div class="flex items-center mb-4">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									for="default-checkbox"
									class="ms-2 text-sm font-medium text-gray-900 flex"
								>
									{[1].map((i) => (
										<img className="w-6" src={Star} alt="star" />
									))}
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-2">sasbvn</div>
			</div>
		</div>
	);
};

export default index;
