import React from 'react';

const Footer = () => {
	return (
		<footer className="text-gray-400 py-4">
			<div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
				<div className="text-white text-lg font-bold mb-4 md:mb-0">
					BookedIn
				</div>

				<div className="mt-4 md:mt-0">
					<p>
						&copy; {new Date().getFullYear()} BookedIn. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
