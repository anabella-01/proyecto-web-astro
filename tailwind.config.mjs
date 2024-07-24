/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary-color":   "#5EB9F0",
				"paragraph-color": "#60697B",
				"heading-color":   "#343F52",
				"skyblue":         "#E5F4FD",
				"white":           "#fff",
				"light-grey":      "#F0F8FE",
				"gray":            "#FEFEFE",
				"footer-p":        "#CACACA",
			  },
		},
	},
	plugins: [],
}
