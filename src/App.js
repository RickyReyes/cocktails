import './App.css';

import { useState, useEffect } from "react"

export default function App() {
	const cocktails = [
		{
			name: 'Negroni',
			ingredients: ['gin', 'sweet vermouth', 'Campari'],
      photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Boulevardier',
			ingredients: ['whiskey', 'sweet vermouth', 'Campari'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Margarita',
			ingredients: ['tequila', 'triple sec', 'lime juice'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Americano',
			ingredients: ['sweet vermouth', 'Campari', 'soda'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Old Fashioned',
			ingredients: ['whiskey', 'sugar cube', 'Angostura bitters'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Moscow Mule',
			ingredients: ['vodka', 'ginger beer', 'lime juice'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Manhattan',
			ingredients: ['whiskey, sweet vermouth, Angostura bitters'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Last Word',
			ingredients: ['gin', 'green chartreuse', 'maraschino liqueur', 'lime juice'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Martini',
			ingredients: ['gin', 'dry vermouth'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Gin & Tonic',
			ingredients: ['gin', 'tonic'],
			photo: './cocktail-photos/negroni.jpg'
		},
		{
			name: 'Southside',
			ingredients: ['gin', 'lemon juice', 'mint', 'cucumber', 'simple syrup'],
			photo: './cocktail-photos/negroni.jpg'
		}
	]
	const categories = [
		{
			name: 'spirits',
			items: ['gin', 'tequila', 'vodka', 'whiskey'],
			tailwindBG: 'bg-amber-800'
		},
		{
			name: 'vermouth',
			items: ['sweet vermouth', 'dry vermouth'],
			tailwindBG: 'bg-yellow-600'
		},
		{
			name: 'liqueurs',
			items: ['triple sec', 'Campari', 'green chartreuse', 'maraschino liqueur'],
			tailwindBG: 'bg-red-700'

		},
		{
			name: 'juices',
			items: ['lime juice', 'lemon juice', 'orange juice'],
			tailwindBG: 'bg-lime-600'
		},
		{
			name: 'bubbles',
			items: ['soda', 'tonic', 'ginger beer', 'cola'],
			tailwindBG: 'bg-blue-800'
		},
		{
			name: 'bitters',
			items: ['Angostura bitters', "Peychaud's"],
			tailwindBG: 'bg-red-400'
		},
		{
			name: 'miscellaneous',
			items: ['sugar cube'],
			tailwindBG: 'bg-emerald-800'
		}
	]

	const [currentCategory, setCurrentCategory] = useState(categories[0])
  const [selectedItems, setSelectedItems] = useState([])
  const [possibleCocktails, setPossibleCocktails] =useState([])

	const categoryItems = categories.map((category, idx) => (
		<li onClick={() => setCurrentCategory(category)}
        key={idx}>
      <button 
        className={"text-white cursor-pointer rounded-full py-2 px-4 mb-1 " + category.tailwindBG + (category.name == currentCategory.name ? " border-2 border-black" : "")}
      >
        {category.name}
      </button>
    </li>
	))

	const currentItems = categories
			.filter(category => category.name === currentCategory.name)[0]
			.items.map((item, idx) => 
      <li className="h-min" key={idx}>
        <button 
          onClick={() => selectItem(item)}
          className={"cursor-pointer rounded-full py-2 px-4 text-white " + currentCategory.tailwindBG + (selectedItems.includes(item) ? " border-2 border-black" : "")}>
          {item}
        </button>
      </li>)

  const selectedElements = selectedItems.map((item, idx) => (
    <li className="" key={idx}>
      {item}
    </li>
  ))

  useEffect(() =>{
    setPossibleCocktails(cocktails.filter(cocktail => {
      if (selectedItems.every(item => cocktail.ingredients.includes(item))) {
        return cocktail
      }
    }))
  }, [selectedItems])

  function selectItem(itemName) {
    /* if item is already in list, deselect it */
    if (selectedItems.includes(itemName)) {
      let withoutDeselected = selectedItems.filter(item => item !== itemName)
      setSelectedItems(withoutDeselected)
    } else {
      setSelectedItems(prevItems => [...prevItems, itemName])
    }
  }

	const cocktailElements = possibleCocktails.map((cocktail, idx) => {
    return (
			<li className="w-full flex flex-col items-start rounded-xl border-2" key={idx}>
				<div style={{backgroundImage: "url('./cocktail-photos/negroni.jpg')"}} className="rounded-t-xl bg-cover bg-no-repeat bg-center h-60 w-full"></div>
				<h3 className="px-2 text-2xl font-bold">{cocktail.name}</h3>
				<p className="px-2 text-left">{cocktail.ingredients.join(", ")}</p>
			</li>
		)
  })

	return (
		<main className="App w-screen min-w-screen flex flex-col items-center">
			<div className="flex-1 mx-auto p-8 max-w-5xl">
				<h1 className="font-cursive text-5xl">
					cocktails <i className="fa-solid fa-whiskey-glass"></i>
				</h1>
				<h2 className="font-cursive text-3xl pb-3">
					1. select your available ingredients...
				</h2>

				{/* categories and items */}
				<div className="flex w-full"> 
					<ul className="flex flex-col items-start">
						{categoryItems}
					</ul>
					<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
						{currentItems}
					</ul>
				</div>
							
				{selectedItems.length > 0 && <div className="w-full"> 
							<h2 className="font-cursive text-3xl pb-3">
								2. you've selected...
							</h2>
							<ul>
								{selectedItems}
							</ul>
							<h2 className="font-cursive text-3xl pb-3">
								3. you can make...
							</h2>
							<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 content-center">
								{cocktailElements}
							</ul>
						</div>}
			</div>
    </main>
	)
}