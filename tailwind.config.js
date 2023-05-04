/** @format */

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				jump: "jump 10s ease-in-out infinite",
				bounce: "bounce 2s ease-in-out infinite",
				text: "text 2s ease infinite",
			},
			keyframes: {
				jump: {
					"0%, 100%": { transform: "translateY(-10%)" },
					"50%": { transform: "rotate(6deg)" },
				},
				bounce: {
					"0%, 100%": { transform: "translateY(-35%)" },
					"50%": { transform: "translateY(25%)" },
				},
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [],
};
