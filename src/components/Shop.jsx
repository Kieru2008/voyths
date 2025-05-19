import ShopComponent from './ShopComponent';
import config from '../config/config.json';

const Shop = () => {
	return (
		<div
			id='shop'
			className='bg-[#0e0d0d]  z-50 h-auto lg:h-[70vh] bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'
			style={{
				paddingBottom: '350px',
				backgroundImage: 'radial-gradient(#363232 1.5px, transparent 0)',
				backgroundSize: '40px 40px',
				backgroundPosition: '-19px -19px',
			}}>
			<div className='flex flex-col max-w-6xl mx-auto justify-center items-center pt-20 text-white'>
				<h2 className=' text-center text-6xl z-10 pb-10'>Most frequently purchased items</h2>
				<div className='flex flex-wrap gap-4 justify-center'>
					{config.shop.items.map(({ img, title, price }) => (
						<ShopComponent key={title} img={img} title={title} price={price} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;
