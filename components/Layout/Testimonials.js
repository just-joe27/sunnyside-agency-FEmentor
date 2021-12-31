import Image from 'next/image';
import Emily from '../../public/images/image-emily.jpg';
import Jennie from '../../public/images/image-jennie.jpg';
import Thomas from '../../public/images/image-thomas.jpg';

function Testimonials() {
	return (
		<div className='container max-w-screen-2xl mt-14 mb-10 md:my-40 mx-auto'>
			<h3 className='font-titles text-sm md:text-md text-base-300 text-center uppercase tracking-enormous'>
				Client Testimonials
			</h3>
			<div className='flex flex-col md:flex-row justify-center pt-16 px-6 mx-auto max-w-sm md:max-w-screen-2xl'>
				<div className='card flex flex-col justify-center '>
					<div className='avatar justify-center'>
						<div className='mb-2 md:mb-4 rounded-full w-16 h-16'>
							<Image src={Emily} alt='profile pic' />
						</div>
					</div>
					<div className='card-body'>
						<p className='font-body text-sm mb-6 md:mb-10  text-center md:max-w-xs'>
							We put our trust in Sunnyside and they delivered, making sure our
							needs were met and deadlines were always hit.
						</p>
						<p className='font-titles text-center mb-2'>Emily R.</p>
						<p className='font-body text-center text-base-300 text-xs md:text-sm mb-6'>
							Marketing Director
						</p>
					</div>
				</div>
				<div className='card flex flex-col justify-center'>
					<div className='avatar justify-center'>
						<div className=' mb-2 md:mb-4 rounded-full w-16 h-16'>
							<Image src={Thomas} alt='profile pic' />
						</div>
					</div>
					<div className='card-body'>
						<p className='font-body text-sm mb-6 md:mb-10 md:max-w-xs text-center'>
							Sunnyside's enthusiasm couples with their keen interest in our
							brand's success made it a satisfying and enjoyable experience.
						</p>
						<p className='font-titles text-center mb-2'>Thomas S.</p>
						<p className='font-body text-center text-base-300 text-xs md:text-sm mb-6'>
							Chief Operating Officer
						</p>
					</div>
				</div>
				<div className='card flex flex-col justify-center'>
					<div className='avatar justify-center'>
						<div className='mb-2 md:mb-4 rounded-full w-16 h-16'>
							<Image src={Jennie} alt='profile pic' />
						</div>
					</div>
					<div className='card-body'>
						<p className='font-body text-sm mb-6 md:mb-10 max-w-xs text-center'>
							Incredible end result! Our sales increased over 400% when we
							worked with Sunnyside. Highly recommended!
						</p>
						<p className='font-titles text-center mb-2'>Jennie F</p>
						<p className='font-body text-center text-base-300 text-sm md:text-sm'>
							Business Owner
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
