module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Sans: ['Barlow'],
				titles: ['Fraunces'],
			},
			colors: {
				'footer-green': '#aad5cc',
				'footer-green-text': 'hsl(168, 34%, 31%)',
				'faded-white': 'rgba(255, 255, 255, 0.3)',
			},
			backgroundImage: {
				'header-image': "url('/images/desktop/image-header.jpg')",
				graphicDesign: "url('/images/desktop/image-graphic-design.jpg')",
				photography: "url('/images/desktop/image-photography.jpg')",
				mobileGraphicDesign: "url('/images/mobile/image-graphic-design.jpg')",
				mobilePhotography: "url('/images/mobile/image-photography.jpg')",
			},
			height: {
				128: '32rem',
				600: '600px',
			},
			letterSpacing: {
				enormous: '.4em',
				giant: '.3em',
			},
			fontSize: {
				none: '0rem',
			},
			maxWidth: {
				'screen-2xl': '1440px',
			},
		},
	},
	plugins: [require('daisyui')],

	// config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
