const NavElement = ({ content, icon, main, active, scrollToId, closeMenu }) => {
	const handleClick = e => {
		e.preventDefault();
		if (scrollToId) {
			const section = document.querySelector(scrollToId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
		if (closeMenu) {
			closeMenu();
		}
	};

	const colorClass = active ? 'text-purple-600' : 'text-white';

	return (
		<button
			onClick={handleClick}
			className={`relative flex flex-row items-center transition-transform transform hover:scale-105 hover:shadow-lg`}>
			<div className={`flex items-center justify-center ${colorClass} hover:text-gray-200`}>{icon}</div>

			<span className={`ml-2 pb-5 text-2xl md:text-3xl lg:text-4xl ${colorClass} ${active ? 'font-bold' : ''}`}>
				{content}
			</span>

			<div className='absolute inset-x-[-20%] inset-y-[-10%] bg-[#ae1dcf] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 rounded-lg'></div>
		</button>
	);
};

export default NavElement;
