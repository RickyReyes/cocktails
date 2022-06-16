import './App.css';
import Cocktail from './components/Cocktail';
import { useState, useEffect } from "react"

export default function App() {
	const cocktails = [
		{
			name: 'Americano',
			ingredients: ['sweet vermouth', 'campari', 'club soda', 'orange twist'],
			photoString: 'bg-americano'
		},
		{
			name: 'Aperol Spritz',
			ingredients: ['aperol', 'prosecco', 'club soda', 'orange slice'],
			photoString: 'bg-aperol-spritz'
		},
		{
			name: 'Boulevardier',
			ingredients: ['whiskey', 'sweet vermouth', 'campari', 'orange twist'],
			photoString: 'bg-boulevardier'
		},
		{
			name: 'Carajillo',
			ingredients: ['espresso', 'licor 43'],
			photoString: 'bg-carajillo'
		},
		{
			name: 'Daiquiri',
			ingredients: ['rum', 'lime juice', 'simple syrup'],
			photoString: 'bg-daiquiri'
		},
		{
			name: 'Espresso Martini',
			ingredients: ['vodka', 'coffee liqueur', 'espresso'],
			photoString: 'bg-espresso-martini'
		},
		{
			name: 'Gin & Tonic',
			ingredients: ['gin', 'tonic'],
			photoString: 'bg-gin-and-tonic'
		},
		{
			name: 'Last Word',
			ingredients: ['gin', 'green chartreuse', 'maraschino liqueur', 'lime juice'],
			photoString: 'bg-last-word'
		},
		{
			name: 'Manhattan',
			ingredients: ['whiskey', 'sweet vermouth', 'Angostura bitters', 'luxardo cherry'],
			photoString: 'bg-manhattan'
		},
		{
			name: 'Margarita',
			ingredients: ['tequila', 'triple sec', 'lime juice', 'salt rim'],
			photoString: 'bg-margarita'
		},
		{
			name: 'Martini',
			ingredients: ['gin', 'dry vermouth', 'lemon twist'],
			photoString: 'bg-martini'
		},
		{
			name: 'Mezcal Margarita',
			ingredients: ['mezcal', 'triple sec', 'lime juice', 'salt rim'],
			photoString: 'bg-mezcal-margarita'
		},
		{
			name: 'Moscow Mule',
			ingredients: ['vodka', 'ginger beer', 'lime juice'],
			photoString: 'bg-moscow-mule'
		},
		{
			name: 'Negroni',
			ingredients: ['gin', 'sweet vermouth', 'campari', 'orange twist'],
      photoString: 'bg-negroni'
		},
		{
			name: 'Old Fashioned',
			ingredients: ['whiskey', 'sugar cube', 'Angostura bitters', 'orange twist'],
			photoString: 'bg-old-fashioned'
		},
		{
			name: 'Oaxaca Old Fashioned',
			ingredients: ['mezcal', 'tequila', 'agave nectar', 'mole bitters'],
			photoString: 'bg-oaxaca-old-fashioned'
		},
		{
			name: 'Paloma',
			ingredients: ['tequila', 'lime juice', 'grapefruit juice', 'simple syrup', 'club soda'],
			photoString: 'bg-paloma'
		},
		{
			name: 'Sazerac',
			ingredients: ['absinthe', 'whiskey', 'Angostura bitters', "Peychaud's bitters", 'simple syrup', 'lemon twist'],
			photoString: 'bg-sazerac'
		},
		{
			name: 'Sidecar',
			ingredients: ['brandy', 'triple sec', 'lemon juice', 'sugar rim'],
			photoString: 'bg-sidecar'
		},
		{
			name: 'Southside',
			ingredients: ['gin', 'lemon juice', 'mint', 'simple syrup'],
			photoString: 'bg-southside'
		},
		{
			name: 'Whiskey Sour',
			ingredients: ['whiskey', 'lemon juice', 'simple syrup', 'egg white'],
			photoString: 'bg-whiskey-sour'
		}
	]
	const categories = [
		{
			name: 'spirits',
			items: ['absinthe', 'brandy', 'gin', 'mezcal', 'pisco', 'rum', 'tequila', 'vodka', 'whiskey'],
			tailwindBG: 'bg-amber-800',
			tailwindBorder: 'border-amber-800',
			hoverBorder: 'hover:border-amber-800',
			hoverTextColor: 'hover:text-amber-800',
			tailwindTextColor: 'text-amber-800'
		},
		{
			name: 'vermouth',
			items: ['dry vermouth', 'sweet vermouth'],
			tailwindBG: 'bg-orange-600',
			tailwindBorder: 'border-orange-600',
			hoverBorder: 'hover:border-orange-600',
			hoverTextColor: 'hover:text-orange-600',
			tailwindTextColor: 'text-orange-600'
		},
		{
			name: 'liqueurs',
			items: ['aperol', 'campari', 'coffee liqueur' , 'green chartreuse', 'licor 43', 'maraschino liqueur', 'triple sec'],
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
			items: ['club soda', 'cola', 'ginger beer', 'prosecco', 'tonic'],
			tailwindBG: 'bg-cyan-600',
			tailwindBorder: 'border-cyan-600',
			hoverBorder: 'hover:border-cyan-600',
			hoverTextColor: 'hover:text-cyan-600',
			tailwindTextColor: 'text-cyan-600'
		},
		{
			name: 'syrups',
			items: ['simple syrup', 'agave syrup', 'honey syrup'],
			tailwindBG: 'bg-blue-800',
			tailwindBorder: 'border-blue-800',
			hoverBorder: 'hover:border-blue-800',
			hoverTextColor: 'hover:text-blue-800',
			tailwindTextColor: 'text-blue-800'
		},
		{
			name: 'bitters',
			items: ['Angostura bitters', "mole bitters", "Peychaud's bitters"],
			tailwindBG: 'bg-red-400',
			tailwindBorder: 'border-red-400',
			hoverBorder: 'hover:border-red-400',
			hoverTextColor: 'hover:text-red-400',
			tailwindTextColor: 'text-red-400'
		},
		{
			name: 'garnishes',
			items: ['lemon twist', 'luxardo cherry', 'orange slice', 'orange twist', 'salt rim', 'sugar rim'],
			tailwindBG: 'bg-yellow-500',
			tailwindBorder: 'border-yellow-500',
			hoverBorder: 'hover:border-yellow-500',
			hoverTextColor: 'hover:text-yellow-500',
			tailwindTextColor: 'text-yellow-500'
		},
		{
			name: 'miscellaneous',
			items: [ 'espresso', 'sugar cube', 'egg white'],
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
								currentCategory.tailwindBG + " " + currentCategory.hoverTextColor + " border-white border-2 " + currentCategory.hoverBorder + " " + currentCategory.hoverTextColor}>
								{item}
							</button>
						</li>
		})

	const selectedElements = selectedItems.map((item, idx) => {
		const [name, bgColor] = item;
		return (
			<li onClick={() => handleSelectItem(name, bgColor)}
			className={"selected-item cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-3 lg:px-6 lg:text-2xl " + bgColor} key={idx}>
				{item[0]}
			</li>
		)
	})

	function handleSelectItem(itemName, bgColor) {
		/* remove if already selected */
		for (let i = 0; i < selectedItems.length; i++) {
			if (selectedItems[i][0] == itemName) {
				let filteredItems = selectedItems.filter(item => item[0] !== itemName)
				setSelectedItems(filteredItems)
				return;
			}
		}
		/* add to list otherwise */
		setSelectedItems(prevItems => [...prevItems, [itemName, bgColor]])
	}

	useEffect(() => {
		setPossibleCocktails(
			cocktails.filter(cocktail => {
				if (selectedItems.some(item => cocktail.ingredients.includes(item[0]))) {
					return cocktail
				}
			})
			// sort possible cocktails based on ratio of available ingredients to total ingredients
			.sort((a, b) => {
					let [numOfIngredientsA, numOfIngredientsB] = [a.ingredients.length, b.ingredients.length]
					let numOfAvailableA = 0
					let numOfAvailableB = 0
					selectedItems.forEach(item => {
						if (a.ingredients.includes(item[0])) {
							numOfAvailableA += 1
						}
					})
					selectedItems.forEach(item => {
						if (b.ingredients.includes(item[0])) {
							numOfAvailableB += 1
						}
					})
					let ratioA = numOfAvailableA/numOfIngredientsA
					let ratioB = numOfAvailableB/numOfIngredientsB
					if (ratioA < ratioB) {
						return 1;
					}
					if (ratioB < ratioA) {
						return -1;
					}
					return 0;
			})
		)
	}, [selectedItems])

	const cocktailElements = possibleCocktails.map((cocktail, idx) => {
		let missing = cocktail.ingredients.map(ingredient => {
			return selectedItems.some(item => item.includes(ingredient)) ? "" : ingredient
		})
		.filter(item => !!item)
    return (
			<Cocktail name={cocktail.name} 
								ingredients={cocktail.ingredients} 
								missing={missing}
								photoString={cocktail.photoString}
								selectedItems={selectedItems} 
								key={idx} />
		)
  })

	return (
		<main className="App min-w-screen flex flex-col items-center p-3">
			<div className="flex-1 flex flex-col max-w-5xl">
				<h1 className="font-cursive text-5xl">
					cocktails <i className="fa-solid fa-whiskey-glass"></i>
				</h1>
				<h2 className="font-cursive text-3xl pb-3">
					1. select your available ingredients...
				</h2>

				{/* categories and items */}
				<div className="flex justify-center items-start w-full"> 
					<ul className="flex flex-col items-start">
						{categoryElements}
					</ul>
					<ul className="flex flex-wrap items-start gap-1 justify-start items-start h-min">
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