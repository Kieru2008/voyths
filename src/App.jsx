import Divider from './components/Divider.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import RgbDivider from './components/RgbDivider.jsx';
import ServerShow from './components/ServerShow.jsx';
import Shop from './components/Shop.jsx';

const App = () => {
	return (
		<div className=' font-customFont'>
			<Navbar />
			<Header />
			<Divider />
			<Shop />
			<RgbDivider />
			<ServerShow />
			<Footer />
		</div>
	);
};

export default App;
