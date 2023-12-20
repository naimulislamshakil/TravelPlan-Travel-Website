import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-[#0e1010] py">
			<div className="container mx-auto">
				<footer className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 py-12">
					{/* colom 1 */}
					<div>
						<div className="text-white text-[2rem]">
							<span className="">Explore</span>
							<span className="text-gray-400">Hub</span>
						</div>

						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
							ad? Tempora asperiores, dignissimos ratione impedit sapiente,
							commodi saepe necessitatibus numquam distinctio autem cum alias
							voluptatibus minus nobis doloribus, vel aliquam.
						</p>
					</div>

					{/* colom 2 */}
					<div className="footer-item">
						<h2 className="text-2xl font-bold">Follow us on: </h2>
						<ul className="social-links">
							<li>
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-pinterest"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-google-plus"></i>
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-item">
						<h2 className="text-2xl font-bold">Popular Places:</h2>
						<ul>
							<li>
								<a href="#">Thailand</a>
							</li>
							<li>
								<a href="#">Australia</a>
							</li>
							<li>
								<a href="#">Maldives</a>
							</li>
							<li>
								<a href="#">Switzerland</a>
							</li>
							<li>
								<a href="#">Germany</a>
							</li>
						</ul>
					</div>

					<div className="subscribe-form footer-item">
						<h2 className="text-2xl">Subscribe for Newsletter!</h2>
						<form className="flex justify-center items-center">
							<input
								type="email"
								placeholder="Enter Email"
								className="form-control p-2 rounded bg-[#0e1010] border border-white "
							/>
							<input type="submit" className="button mt-2" value="Subscribe" />
						</form>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
