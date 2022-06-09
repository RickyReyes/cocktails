module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'americano': "url('./cocktail-photos/americano.jpg')",
        'boulevardier': "url('./cocktail-photos/boulevardier.jpg')",
        'carajillo': "url('./cocktail-photos/carajillo.jpg')",
        'espresso-martini': "url('./cocktail-photos/espresso-martini.jpg')",
        'gin-and-tonic': "url('./cocktail-photos/gin-and-tonic.jpg')",
        'last-word': "url('./cocktail-photos/last-word.jpg')",
        'margarita': "url('./cocktail-photos/margarita.jpg')",
        'martini': "url('./cocktail-photos/martini.jpg')",
        'moscow-mule': "url('./cocktail-photos/moscow-mule.jpg')",
        'negroni': "url('./cocktail-photos/negroni.jpg')",
        'old-fashioned': "url('./cocktail-photos/old-fashioned.jpg')",
        'southside': "url('./cocktail-photos/southside.jpg')"
      },
      fontFamily: {
        'cursive': ['"Pacifico"', 'cursive'],
      }
    },
  },
  plugins: [],
}
