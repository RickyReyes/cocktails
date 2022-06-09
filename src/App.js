import './App.css';

import { useState, useEffect } from "react"

export default function App() {
	const cocktails = [
		{
			name: 'Negroni',
			ingredients: ['gin', 'sweet vermouth', 'Campari'],
      photoString: 'bg-negroni'
		},
		{
			name: 'Boulevardier',
			ingredients: ['whiskey', 'sweet vermouth', 'Campari'],
			photoString: 'bg-boulevardier'
		},
		{
			name: 'Margarita',
			ingredients: ['tequila', 'triple sec', 'lime juice'],
			photoString: 'bg-margarita'
		},
		{
			name: 'Americano',
			ingredients: ['sweet vermouth', 'Campari', 'soda'],
			photoString: 'bg-americano'
		},
		{
			name: 'Old Fashioned',
			ingredients: ['whiskey', 'sugar cube', 'Angostura bitters'],
			photoString: 'bg-old-fashioned'
		},
		{
			name: 'Moscow Mule',
			ingredients: ['vodka', 'ginger beer', 'lime juice'],
			photoString: 'bg-moscow-mule'
		},
		{
			name: 'Manhattan',
			ingredients: ['whiskey, sweet vermouth, Angostura bitters'],
			photoString: 'bg-manhattan'
		},
		{
			name: 'Last Word',
			ingredients: ['gin', 'green chartreuse', 'maraschino liqueur', 'lime juice'],
			photoString: 'bg-last-word'
		},
		{
			name: 'Martini',
			ingredients: ['gin', 'dry vermouth'],
			photoString: 'bg-martini'
		},
		{
			name: 'Gin & Tonic',
			ingredients: ['gin', 'tonic'],
			photoString: 'bg-gin-and-tonic'
		},
		{
			name: 'Southside',
			ingredients: ['gin', 'lemon juice', 'mint', 'simple syrup'],
			photoString: 'bg-southside'
		}
	]
	
	const categories = [
		{
			name: 'spirits',
			items: ['gin', 'tequila', 'vodka', 'whiskey'],
			tailwindBG: 'bg-amber-800',
			tailwindBorder: 'border-amber-800',
			hoverBorder: 'hover:border-amber-800',
			hoverTextColor: 'hover:text-amber-800',
			tailwindTextColor: 'text-amber-800'
		},
		{
			name: 'vermouth',
			items: ['sweet vermouth', 'dry vermouth'],
			tailwindBG: 'bg-orange-600',
			tailwindBorder: 'border-orange-600',
			hoverBorder: 'hover:border-orange-600',
			hoverTextColor: 'hover:text-orange-600',
			tailwindTextColor: 'text-orange-600'
		},
		{
			name: 'liqueurs',
			items: ['triple sec', 'Campari', 'green chartreuse', 'maraschino liqueur'],
			tailwindBG: 'bg-red-700',
			tailwindBorder: 'border-red-700',
			hoverBorder: 'hover:border-red-700',
			hoverTextColor: 'hover:text-red-700',
			tailwindTextColor: 'text-red-700'
			
		},
		{
			name: 'juices',
			items: ['lime juice', 'lemon juice', 'orange juice'],
			tailwindBG: 'bg-lime-600',
			tailwindBorder: 'border-lime-600',
			hoverBorder: 'hover:border-lime-600',
			hoverTextColor: 'hover:text-lime-600',
			tailwindTextColor: 'text-lime-600'
		},
		{
			name: 'bubbles',
			items: ['soda', 'tonic', 'ginger beer', 'cola'],
			tailwindBG: 'bg-blue-800',
			tailwindBorder: 'border-blue-800',
			hoverBorder: 'hover:border-blue-800',
			hoverTextColor: 'hover:text-blue-800',
			tailwindTextColor: 'text-blue-800'
		},
		{
			name: 'bitters',
			items: ['Angostura bitters', "Peychaud's"],
			tailwindBG: 'bg-red-400',
			tailwindBorder: 'border-red-400',
			hoverBorder: 'hover:border-red-400',
			hoverTextColor: 'hover:text-red-400',
			tailwindTextColor: 'text-red-400'
		},
		{
			name: 'miscellaneous',
			items: ['sugar cube'],
			tailwindBG: 'bg-emerald-800',
			tailwindBorder: 'border-emerald-800',
			hoverBorder: 'hover:border-emerald-800',
			hoverTextColor: 'hover:text-emerald-800',
			tailwindTextColor: 'text-emerald-800'
		}
	]

	const [currentCategory, setCurrentCategory] = useState(categories[0])
  const [selectedItems, setSelectedItems] = useState([])
  const [possibleCocktails, setPossibleCocktails] = useState([])

	const categoryElements = categories.map((category, idx) => {
		return <li onClick={() => setCurrentCategory(category)} key={idx}>
							<button 
								className={"cursor-pointer rounded-full py-2 px-4 lg:py-3 lg:px-6 lg:text-lg font-bold mb-1 hover:underline " + category.tailwindBG + (category.name == currentCategory.name ? " bg-white border-2 " + category.tailwindBorder + " " + category.tailwindTextColor + "" : " text-white")}>
									{category.name}
								</button>
						</li>
	})

	const itemElements = categories
		.filter(category => category.name === currentCategory.name)[0]
		.items.map((item, idx) => {
			return <li className="h-min" key={idx}>
							<button 
								onClick={(e) => handleSelectItem(item, currentCategory.tailwindBG)}
								className={"cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl hover:bg-white " + 
								currentCategory.tailwindBG + " " + currentCategory.hoverTextColor + " border-white border-2 " + currentCategory.hoverBorder}>
								{item}
							</button>
						</li>
		})

	const selectedElements = selectedItems.map((item, idx) => {
		return (
			<li onClick={() => handleSelectItem(item[0], item[1])}
			className={"cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-3 lg:px-6 lg:text-2xl " + item[1]} key={idx}>
				{item[0]}
			</li>
		)
	})

	function handleSelectItem(itemName, bgColor) {
		for (let i = 0; i < selectedItems.length; i++) {
			if (selectedItems[i][0] == itemName) {
				let filteredItems = selectedItems.filter(item => item[0] !== itemName)
				setSelectedItems(filteredItems)
				return;
			}
		}
		setSelectedItems(prevItems => [...prevItems, [itemName, bgColor]])
	}

	const cocktailElements = possibleCocktails.map((cocktail, idx) => {
		let missingIngredients = cocktail.ingredients.map(ingredient => {
			return selectedItems.some(item => item.includes(ingredient)) ? "" : ingredient
		}).filter(item => !!item)
    return (
			<li className={"w-full flex flex-col items-start rounded-2xl border-4 " + (missingIngredients.length == 0 ? "border-8 border-green-400" : "")}
			key={idx}>
				<div className={"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " + cocktail.photoString}></div>
				<h3 className="px-2 pt-1 text-2xl font-bold">{cocktail.name}</h3>
				<p className="px-2 text-left">{cocktail.ingredients.join(", ")}</p>
				{missingIngredients.length > 0 && <h4 className="px-2 text-left">
					<span className="font-bold">you're missing:</span> {missingIngredients.join(", ")}
				</h4>}
				<p></p>
			</li>
		)
  })

	useEffect(() => {
		setPossibleCocktails(cocktails.filter(cocktail => {
			if (selectedItems.some(item => cocktail.ingredients.includes(item[0]))) {
				return cocktail
			}
		}))
	}, [selectedItems])
	

	return (
		<main className="App w-screen min-w-screen flex flex-col items-center">
			<div className="flex-1 mx-auto p-2 max-w-5xl">
				<h1 className="font-cursive text-5xl">
					cocktails <i className="fa-solid fa-whiskey-glass"></i>
				</h1>
				<h2 className="font-cursive text-3xl pb-3">
					1. select your available ingredients...
				</h2>

				{/* categories and items */}
				<div className="flex justify-left w-full"> 
					<ul className="flex flex-col items-start">
						{categoryElements}
					</ul>
					<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
						{itemElements}
					</ul>
				</div>
							
				{selectedItems.length > 0 &&
					<div className="w-full"> 
							<h2 className="font-cursive text-3xl pb-3">
								2. you've selected...
							</h2>
							<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
								{selectedElements}
							</ul>
							<h2 className="font-cursive text-3xl pb-3">
								3. you can make...
							</h2>
							<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 content-center">
								{cocktailElements}
							</ul>
						</div>}
			</div>
    </main>
	)
}