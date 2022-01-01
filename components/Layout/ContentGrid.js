import Image from 'next/image';
import transformImage from '../../public/images/desktop/image-transform.jpg';
import standOutImage from '../../public/images/desktop/image-stand-out.jpg';

function ContentGrid() {
	return (
		<div className='grid grid-cols-1 gap-0 mx-auto max-w-screen-2xl md:grid-cols-2 '>
			<div className='flex flex-col justify-center max-w-md mx-auto p-6'>
				<h2 className='text-center md:text-left font-titles text-3xl md:text-4xl pt-10 md:pt-0 tracking-wide mb-10 max-w-sm'>
					Transform your brand
				</h2>
				<div className='relative text-center md:text-left pb-6 md:pb-0'>
					<p className='  font-body mb-10 text-sm leading-6 text-base-content'>
						We are a full-service creative agency specializing in helping brands
						grow fast. Engage your clients through compelling visuals that do
						most of the marketing for you.
					</p>
					<a
						href='/'
						className='btn-link uppercase font-titles text-black hover:no-underline'
					>
						Learn More
						<div className='mx-auto -mt-1 md:absolute md:bottom-0 md:-left-1 block h-2 w-32  bg-yellow-200 hover:bg-yellow-400 opacity-50 rounded-lg -z-50 '></div>
					</a>
				</div>
			</div>
			<div className='text-none order-first md:order-none'>
				<Image src={transformImage} alt='picture of an egg' />
			</div>
			<div className='text-none'>
				<Image src={standOutImage} alt='pink wine glass' />
			</div>
			<div className='flex flex-col justify-center max-w-md mx-auto p-6'>
				<h2 className='text-center md:text-left font-titles text-3xl md:text-4xl pt-10 md:pt-0 tracking-wide mb-10 max-w-sm'>
					Stand out to the right audience
				</h2>
				<div className='relative text-center md:text-left pb-6 md:pb-0'>
					<p className='font-body mb-10 text-base-content leading-6 text-sm'>
						Using a collaborative formula of designers, researchers,
						photographers, videographers and coywriters, we'll build and extend
						your brand in digital places.
					</p>

					<a
						href='/'
						className='btn-link uppercase font-titles text-black hover:no-underline'
					>
						Learn More
						<div className='mx-auto -mt-1 md:absolute md:bottom-0 md:-left-1 block h-2 w-32  bg-red-200 hover:bg-red-400 opacity-50 rounded-lg -z-50 '></div>
					</a>
				</div>
			</div>
			<div className='bg-mobileGraphicDesign md:bg-graphicDesign bg-cover bg-center flex flex-col justify-center text-center h-600 p-6'>
				<div className='max-w-lg mx-auto mt-80'>
					<h3 className='text-2xl md:text-3xl font-titles pb-8'>
						Graphic Design
					</h3>
					<p className='font-body max-w-sm text-sm'>
						Great design makes you memorable. We deliver artwork that
						underscores your brand message and captures potential clients
						attention.
					</p>
				</div>
			</div>
			<div className='bg-mobilePhotography md:bg-photography bg-cover bg-center flex flex-col justify-center text-center h-600'>
				<div className='max-w-lg mx-auto mt-80'>
					<h3 className='text-2xl md:text-3xl font-titles pb-8'>Photography</h3>
					<p className='font-body text-sm max-w-xs'>
						Increase your credibility by getting hte most stunning, high-quality
						photos that improve your business image.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContentGrid;
