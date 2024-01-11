/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backdropBlur: {
				md: '40.774227142333984px',
			},
			fontFamily: {
				'belle': ['Bellefair'],
				'barlow': ['Barlow'],
				'barlow-cond': ['"Barlow Condensed"']
			}
},
	},
	plugins: [],
}

