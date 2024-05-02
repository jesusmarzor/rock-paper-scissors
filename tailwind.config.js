/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			barlowSemiCondensed: ["BarlowSemiCondensed", "sans-serif"],
		},
    extend: {
			maxWidth: {
				110: "37.5rem"
			},
		},
		colors: {
			black: "#3b4363",
			white: "#fff",
			gray: "#606e85",
			blue: {
				500: "#2a46c0",
				800: "#1f3756",
				900: "#141539"
			},
			hand: {
				first: "#eaa91b",
				second: "#4764f3",
				third: "#db4259",
				fourth: "#8c5be4",
				fifth: "#4abdd1"
				
			}
		}
  },
  plugins: [],
}

