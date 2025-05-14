import './css/Trailer.css';

const ServerShow = () => {
	return (
		<div id='info' className='bg-[#1b1919] pb-32'>
			<div className='flex flex-col gap-8 justify-center items-center trailer__box'>
				<h2 className='text-6xl text-center z-10 text-white'>The Latest Server Video</h2>

				<div className='relative w-full p-10 max-w-3xl'>
					<iframe
						className='w-full h-[200px] sm:h-[300px] lg:h-[400px] border-4 border-black rounded-lg'
						src='https://www.youtube.com/embed/YqDcxhqRaYE'
						title='That one Minecraft Edit'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen></iframe>
				</div>

				<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'>
							<path d='M0,0 L10,5 L0,10' fill='white'></path>
						</marker>
					</defs>
					<path
						d='M10,10 Q150,180 290,10'
						stroke='white'
						fill='transparent'
						markerEnd='url(#arrow)'
						strokeWidth='3'></path>
				</svg>
			</div>
		</div>
	);
};

export default ServerShow;
