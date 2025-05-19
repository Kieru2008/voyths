

const ShopComponent = ({ img, title, price }) => {
	return (
		<a href={'https://www.tebex.io/'} className='flex flex-col items-center'>
			<div className='relative bg-[#1b1919] border-2 border-black rounded-lg p-4 cursor-pointer w-80 h-80 overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-[0px_0px_10px_5px_rgba(126,34,206,0.5)]'>
				<img
					src={img}
					alt={title}
					className='w-full h-full object-cover filter drop-shadow-[5px_5px_0px_rgba(0,0,0,0.356)] transition-transform duration-100 ease-in-out'
				/>
				<div className='absolute bottom-0 left-0 w-full p-4 flex flex-col items-center to-transparent'>
					<p className='text-2xl bg-purple-700 text-white p-2 shadow-md mb-2'>{title}</p>
					<p className='text-xl bg-white text-black shadow-sm shadow-black p-2'>for {price} USD</p>
				</div>
			</div>
		</a>
	);
};

export default ShopComponent;
