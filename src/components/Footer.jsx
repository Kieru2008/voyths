import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='flex justify-center items-center text-white bg-[#0e0d0d] h-auto lg:h-60'>
			<div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20'>
				<div className='flex justify-center items-center flex-col'>
					<img className='h-32' src='/logo2.png' alt='Logo' />
					<h2 className='text-white text-lg lg:text-xl text-center mt-2'>COPYRIGHT {currentYear} AmazingDev.PL</h2>
				</div>
				<div className='flex flex-col items-center lg:items-start'>
					<p className='text-2xl lg:text-3xl underline pb- lg:pb-4 decoration-purple-700'>Useful Links</p>
					<div className='flex flex-col lg:flex-row gap-2 lg:gap-3 pb-2'>
						<a className='border-l-4 border-l-purple-700 pl-2 lg:pl-3' href=''>
							Home
						</a>
						<a className='border-l-4 border-l-purple-700 pl-2 lg:pl-3' href=''>
							Terms of Service
						</a>
						<a className='border-l-4 border-l-purple-700 pl-2 lg:pl-3' href=''>
							Privacy Policy
						</a>
						<a className='border-l-4 border-l-purple-700 pl-2 lg:pl-3' href=''>
							FAQ
						</a>
					</div>

					<div className='text-center pt-8 lg:pt-0 lg:text-left'>
						<p>PL - Serwer amazingdev.pl nie jest w żaden sposób powiązany z firmą Mojang lub Microsoft.</p>
						<p>EN - amazingdev.pl server is not associated with Mojang or Microsoft in any way.</p>
						<p className='pt-2 lg:pt-4'>
							Created by <span className='text-purple-700'>Amazing</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
