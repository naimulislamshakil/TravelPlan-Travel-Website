import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="container mx-auto flex justify-center items-center py-16">
			<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 justify-center items-center">
				<form class="space-y-6" action="#">
					<h5 class="text-xl font-medium text-gray-900">
						Create account to our platform
					</h5>

					<div>
						<label
							for="name"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Your Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Naimul Islam"
							required
						/>
					</div>

					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="name@company.com"
							required
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Your password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required
						/>
					</div>
					<div class="flex items-start">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									id="remember"
									type="checkbox"
									value=""
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
									required
								/>
							</div>
							<label
								for="remember"
								class="ms-2 text-sm font-medium text-gray-900"
							>
								Remember me
							</label>
						</div>
						<Link to="/" class="ms-auto text-sm text-blue-700 hover:underline">
							Lost Password?
						</Link>
					</div>
					<button
						type="submit"
						class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Already have an account
					</button>
					<div class="text-sm font-medium text-gray-500">
						Not registered?{' '}
						<Link to="/login" class="text-blue-700 hover:underline">
							Login account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
