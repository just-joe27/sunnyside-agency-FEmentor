import Image from 'next/image';
import milk from '../../public/images//desktop/image-gallery-milkbottles.jpg';
import orange from '../../public/images/desktop/image-gallery-orange.jpg';
import cone from '../../public/images/desktop/image-gallery-cone.jpg';
import sugar from '../../public/images/desktop/image-gallery-sugarcubes.jpg';

function Gallery() {
	return (
		<div className='grid grid-cols-2 md:flex max-w-screen-2xl mx-auto'>
			<Image src={milk} alt='milkbottles' />
			<Image src={orange} alt='an orange' />
			<Image src={cone} alt='an ice cream cone' />
			<Image src={sugar} alt='some sugarcubes' />
		</div>
	);
}

export default Gallery;
