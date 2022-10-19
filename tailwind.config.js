module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				"hover-hover": { raw: "(hover:hover)" },
			},
			spacing: {
				112: "28rem",
			},
			backgroundImage: {
				americano: "url('./cocktail-photos/americano.jpg')",
				"aperol-spritz": "url('./cocktail-photos/aperol-spritz.jpg')",
				boulevardier: "url('./cocktail-photos/boulevardier.jpg')",
				carajillo: "url('./cocktail-photos/carajillo.jpg')",
				"champagne-cocktail":
					"url('./cocktail-photos/champagne-cocktail.jpg')",
				"coming-soon": "url('./cocktail-photos/coming-soon.jpg')",
				cosmopolitan: "url('./cocktail-photos/cosmopolitan.jpg')",
				daiquiri: "url('./cocktail-photos/daiquiri.jpg')",
				"dirty-martini": "url('./cocktail-photos/dirty-martini.jpg')",
				"espresso-martini":
					"url('./cocktail-photos/espresso-martini.jpg')",
				"gin-and-tonic": "url('./cocktail-photos/gin-and-tonic.jpg')",
				"irish-coffee": "url('./cocktail-photos/irish-coffee.jpg')",
				"last-word": "url('./cocktail-photos/last-word.jpg')",
				manhattan: "url('./cocktail-photos/manhattan.jpg')",
				margarita: "url('./cocktail-photos/margarita.jpg')",
				martini: "url('./cocktail-photos/martini.jpg')",
				"mezcal-margarita":
					"url('./cocktail-photos/mezcal-margarita.jpg')",
				"mint-julep": "url('./cocktail-photos/mint-julep.jpg')",
				"moscow-mule": "url('./cocktail-photos/moscow-mule.jpg')",
				mojito: "url('./cocktail-photos/mojito.jpg')",
				negroni: "url('./cocktail-photos/negroni.jpg')",
				"oaxaca-old-fashioned":
					"url('./cocktail-photos/oaxaca-old-fashioned.jpg')",
				"old-fashioned": "url('./cocktail-photos/old-fashioned.jpg')",
				paloma: "url('./cocktail-photos/paloma.jpg')",
				sazerac: "url('./cocktail-photos/sazerac.jpg')",
				sidecar: "url('./cocktail-photos/sidecar.jpg')",
				southside: "url('./cocktail-photos/southside.jpg')",
				"whiskey-sour": "url('./cocktail-photos/whiskey-sour.jpg')",
			},
			fontFamily: {
				cursive: ['"Work Sans"', "font"],
			},
		},
	},
	plugins: [],
};
