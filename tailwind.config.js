module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',
				'quaternary-light': '#F5BA94',
				
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				
				'button-color': '#B55252',

				'midbg-color': '#AAC1B9',
				'bg-color': '#6EBC81',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '3rem',
					xl: '4rem',
					'2xl': '5rem',
				},
			},
		},
	},
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
}
