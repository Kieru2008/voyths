import React, { useState, useEffect } from 'react';
import { HomeIcon, ShopIcon, InfoIcon } from '../config/icons';
import config from '../config/config.json';
import NavElement from './NavElement';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (
				scrollPosition >= document.querySelector('#shop')?.offsetTop - 100 &&
				scrollPosition < document.querySelector('#info')?.offsetTop - 100
			) {
				setActiveSection('#shop');
			} else if (scrollPosition >= document.querySelector('#info')?.offsetTop - 100) {
				setActiveSection('#info');
			} else {
				setActiveSection('/');
			}
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const iconMap = {
		ShopIcon: <ShopIcon width={80} height={80} />,
		HomeIcon: <HomeIcon width={80} height={80} />,
		InfoIcon: <InfoIcon width={80} height={80} />,
	};

	const phoneIconMap = {
		ShopIcon: <ShopIcon width={60} height={60} />,
		HomeIcon: <HomeIcon width={60} height={60} />,
		InfoIcon: <InfoIcon width={60} height={60} />,
	};

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className='fixed top-0 w-full z-50 bg-black'>
			<div className='relative max-w-4xl mx-auto flex justify-between items-center p-4'>
				<button className='lg:hidden text-white p-2' onClick={toggleMenu}>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
					</svg>
				</button>

				<div className='hidden lg:flex justify-between items-center w-full'>
					{config.navbar.links.map(item => (
						<NavElement
							key={item.content}
							icon={iconMap[item.icon]}
							content={item.content}
							scrollToId={item.scrollToId}
							active={activeSection === item.activeMatch}
						/>
					))}
				</div>

				<div
					className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-90 z-40 ${
						menuOpen ? 'block' : 'hidden'
					}`}>
					<div className='flex flex-col items-center justify-center h-full'>
						{config.navbar.links.map(item => (
							<NavElement
								key={item.content}
								icon={phoneIconMap[item.icon]}
								content={item.content}
								scrollToId={item.scrollToId}
								active={activeSection === item.activeMatch}
								closeMenu={() => setMenuOpen(false)}
							/>
						))}
					</div>
					<button className='absolute top-4 right-4 text-white text-3xl' onClick={toggleMenu}>
						<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
