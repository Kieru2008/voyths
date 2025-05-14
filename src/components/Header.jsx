import { useState, useEffect } from 'react';

const Header = () => {
	const [playerCount, setPlayerCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPlayerCount = () => {
			const apiUrl = 'https://mcapi.us/server/status?ip=rgmc.pl';

			fetch(apiUrl)
				.then(response => {
					if (!response.ok) {
						throw new Error('Failed to connect to the server');
					}
					return response.json();
				})
				.then(data => {
					if (data.status === 'error') {
						throw new Error('Failed to connect to the server');
					}
					setLoading(false);
					setPlayerCount(data.players.now);
				})
				.catch(error => {
					console.error('Error fetching player count:', error);
					setError(error.message);
				});
		};

		// Fetch initially
		fetchPlayerCount();

		// Fetch every 10 seconds
		const intervalId = setInterval(fetchPlayerCount, 10000);

		// Cleanup interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	if (error) {
		return <div className='error'>Server offline: {error}</div>;
	}

	if (loading) {
		return <div>Loading...</div>; // Prosta dywiza z komunikatem ładowania
	}

	return (
		<div id='home' className='flex justify-center items-center relative h-screen'>
			<img className='absolute inset-0 w-full h-full object-cover' src='/pxfuel.jpg' alt='Background' />

			<img className='absolute top-[25%] h-80 z-20 image-rendering-crisp-edges' src='/logo2.png' alt='Logo' />
			<div className='absolute bottom-[25%] w-64 text-center bg-black bg-opacity-70 text-white p-4 rounded-lg shadow-lg z-30'>
				<p className='text-xl font-medium mb-2'>
					Online {playerCount} player{playerCount !== 1 ? 's' : ''}
				</p>
			</div>
		</div>
	);
};

export default Header;
