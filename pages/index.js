import Header from '../components/Layout/Header';
import ContentGrid from '../components/Layout/ContentGrid';
import Testimonials from '../components/Layout/Testimonials';
import Gallery from '../components/Layout/Gallery';
import Footer from '../components/Layout/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<ContentGrid />
			<Testimonials />
			<Gallery />
			<Footer />
		</>
	);
}
