import "./App.css";
import Main from "./components/Main";
import Cocktail from "./components/Cocktail";
import All from "./components/All";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
	const cocktails = [
		{
			name: "Americano",
			ingredients: [
				"sweet vermouth",
				"campari",
				"club soda",
				"orange twist",
			],
			photoString: "bg-americano",
		},
		{
			name: "Aperol Spritz",
			ingredients: ["aperol", "prosecco", "club soda", "orange slice"],
			photoString: "bg-aperol-spritz",
		},
		{
			name: "Boulevardier",
			ingredients: [
				["bourbon", "rye whiskey"],
				"sweet vermouth",
				"campari",
				"orange twist",
			],
			photoString: "bg-boulevardier",
		},
		{
			name: "Carajillo",
			ingredients: ["espresso", "licor 43"],
			photoString: "bg-carajillo",
		},
		{
			name: "Corpse Reviver #2",
			ingredients: [
				"gin",
				"lillet blanc",
				"lemon juice",
				"orange liqueur",
				"absinthe",
			],
			photoString: "bg-coming-soon",
		},
		{
			name: "Cosmopolitan",
			ingredients: [
				"vodka",
				"orange liqueur",
				"lime juice",
				"cranberry juice",
			],
			photoString: "bg-cosmopolitan",
		},
		{
			name: "Daiquiri",
			ingredients: ["white rum", "lime juice", "simple syrup"],
			photoString: "bg-daiquiri",
		},
		{
			name: "Dirty Martini",
			ingredients: [["gin", "vodka"], "olive juice", "olive"],
			photoString: "bg-dirty-martini",
		},
		{
			name: "Espresso Martini",
			ingredients: [
				"vodka",
				"coffee liqueur",
				"espresso",
				"simple syrup",
			],
			photoString: "bg-espresso-martini",
		},
		{
			name: "French 75",
			ingredients: ["gin", "lemon", "simple syrup", "champagne"],
			photoString: "bg-coming-soon",
		},
		{
			name: "Gimlet",
			ingredients: [["gin", "vodka"], "lime juice", "simple syrup"],
			photoString: "bg-coming-soon",
		},
		{
			name: "Gin & Tonic",
			ingredients: ["gin", "tonic"],
			photoString: "bg-gin-and-tonic",
		},
		{
			name: "Gin Fizz",
			ingredients: [
				"gin",
				"lemom juice",
				"simple syrup",
				"egg white",
				"club soda",
			],
			photoString: "bg-coming-soon",
		},
		{
			name: "Hemingway Daiquiri",
			ingredients: [
				"white rum",
				"maraschino liqueur",
				"lime juice",
				"grapefruit juice",
			],
			photoString: "bg-coming-soon",
		},
		{
			name: "Irish Coffee",
			ingredients: [
				"irish whiskey",
				"hot coffee",
				"simple syrup",
				"whipped cream",
			],
			photoString: "bg-irish-coffee",
		},
		{
			name: "Last Word",
			ingredients: [
				"gin",
				"green chartreuse",
				"maraschino liqueur",
				"lime juice",
			],
			photoString: "bg-last-word",
		},
		{
			name: "Manhattan",
			ingredients: [
				["bourbon", "rye"],
				"sweet vermouth",
				"Angostura bitters",
				"cherry",
			],
			photoString: "bg-manhattan",
		},
		{
			name: "Margarita",
			ingredients: [
				"tequila",
				"orange liqueur",
				"lime juice",
				"salt rim",
			],
			photoString: "bg-margarita",
		},
		{
			name: "Martinez",
			ingredients: [
				"gin",
				"sweet vermouth",
				"maraschino liqueur",
				"Angostura bitters",
			],
			photoString: "bg-coming-soon",
		},
		{
			name: "Martini",
			ingredients: [
				["gin", "vodka"],
				"dry vermouth",
				["lemon twist", "olive"],
			],
			photoString: "bg-martini",
		},
		{
			name: "Mezcal Margarita",
			ingredients: ["mezcal", "orange liqueur", "lime juice", "salt rim"],
			photoString: "bg-mezcal-margarita",
		},
		{
			name: "Mint Julep",
			ingredients: ["bourbon", "mint"],
			photoString: "bg-mint-julep",
		},
		{
			name: "Moscow Mule",
			ingredients: ["vodka", "ginger beer", "lime juice"],
			photoString: "bg-moscow-mule",
		},
		{
			name: "Mojito",
			ingredients: [
				"white rum",
				"lime juice",
				"simple syrup",
				"mint",
				"soda water",
			],
			photoString: "bg-mojito",
		},
		{
			name: "Negroni",
			ingredients: ["gin", "sweet vermouth", "campari", "orange twist"],
			photoString: "bg-negroni",
		},
		{
			name: "Old Fashioned",
			ingredients: [
				["bourbon", "rye whiskey"],
				"sugar cube",
				"Angostura bitters",
				"orange twist",
			],
			photoString: "bg-old-fashioned",
		},
		{
			name: "Oaxaca Old Fashioned",
			ingredients: ["mezcal", "sugar cube", "mole bitters"],
			photoString: "bg-oaxaca-old-fashioned",
		},
		{
			name: "Paloma",
			ingredients: [
				"tequila",
				"lime juice",
				"grapefruit juice",
				"simple syrup",
				"club soda",
			],
			photoString: "bg-paloma",
		},
		{
			name: "Pisco Sour",
			ingredients: ["pisco", "lemon juice", "simple syrup"],
			photoString: "bg-coming-soon",
		},
		{
			name: "Sazerac",
			ingredients: [
				"rye whiskey",
				"sugar cube",
				"Angostura bitters",
				"Peychaud's bitters",
				"absinthe",
				"lemon twist",
			],
			photoString: "bg-sazerac",
		},
		{
			name: "Sidecar",
			ingredients: [
				"brandy",
				"orange liqueur",
				"lemon juice",
				"sugar rim",
			],
			photoString: "bg-sidecar",
		},
		{
			name: "Southside",
			ingredients: ["gin", "lime juice", "mint", "simple syrup"],
			photoString: "bg-southside",
		},
		{
			name: "Tom Collins",
			ingredients: ["gin", "lemon juice", "simple syrup", "club soda"],
			photoString: "bg-coming-soon",
		},
		{
			name: "Whiskey Sour",
			ingredients: [
				"bourbon",
				"lemon juice",
				"simple syrup",
				"egg white",
			],
			photoString: "bg-whiskey-sour",
		},
	];
	const categories = [
		{
			name: "spirits",
			items: [
				"absinthe",
				"bourbon",
				"brandy",
				"dark rum",
				"gin",
				"irish whiskey",
				"mezcal",
				"pisco",
				"rye whiskey",
				"tequila",
				"vodka",
				"white rum",
			],
			tailwindBG: "bg-amber-800",
			tailwindBorder: "border-amber-800",
			hoverBorder: "hover:border-amber-800",
			hoverTextColor: "hover:text-amber-800",
			tailwindTextColor: "text-amber-800",
		},
		{
			name: "vermouth",
			items: ["dry vermouth", "sweet vermouth"],
			tailwindBG: "bg-orange-600",
			tailwindBorder: "border-orange-600",
			hoverBorder: "hover:border-orange-600",
			hoverTextColor: "hover:text-orange-600",
			tailwindTextColor: "text-orange-600",
		},
		{
			name: "liqueurs",
			items: [
				"aperol",
				"campari",
				"coffee liqueur",
				"green chartreuse",
				"licor 43",
				"lillet blanc",
				"maraschino liqueur",
				"orange liqueur",
			],
			tailwindBG: "bg-red-700",
			tailwindBorder: "border-red-700",
			hoverBorder: "hover:border-red-700",
			hoverTextColor: "hover:text-red-700",
			tailwindTextColor: "text-red-700",
		},
		{
			name: "juices",
			items: [
				"cranberry juice",
				"grapefruit juice",
				"lemon juice",
				"lime juice",
				"orange juice",
			],
			tailwindBG: "bg-lime-600",
			tailwindBorder: "border-lime-600",
			hoverBorder: "hover:border-lime-600",
			hoverTextColor: "hover:text-lime-600",
			tailwindTextColor: "text-lime-600",
		},
		{
			name: "bubbles",
			items: [
				"champagne",
				"club soda",
				"cola",
				"ginger beer",
				"prosecco",
				"tonic",
			],
			tailwindBG: "bg-cyan-600",
			tailwindBorder: "border-cyan-600",
			hoverBorder: "hover:border-cyan-600",
			hoverTextColor: "hover:text-cyan-600",
			tailwindTextColor: "text-cyan-600",
		},
		{
			name: "syrups",
			items: ["simple syrup", "agave syrup", "honey syrup"],
			tailwindBG: "bg-blue-800",
			tailwindBorder: "border-blue-800",
			hoverBorder: "hover:border-blue-800",
			hoverTextColor: "hover:text-blue-800",
			tailwindTextColor: "text-blue-800",
		},
		{
			name: "bitters",
			items: ["Angostura bitters", "mole bitters", "Peychaud's bitters"],
			tailwindBG: "bg-red-400",
			tailwindBorder: "border-red-400",
			hoverBorder: "hover:border-red-400",
			hoverTextColor: "hover:text-red-400",
			tailwindTextColor: "text-red-400",
		},
		{
			name: "garnishes",
			items: [
				"lemon twist",
				"cherry",
				"olive",
				"orange slice",
				"orange twist",
				"salt rim",
				"sugar rim",
			],
			tailwindBG: "bg-yellow-500",
			tailwindBorder: "border-yellow-500",
			hoverBorder: "hover:border-yellow-500",
			hoverTextColor: "hover:text-yellow-500",
			tailwindTextColor: "text-yellow-500",
		},
		{
			name: "miscellaneous",
			items: [
				"egg white",
				"espresso",
				"hot coffee",
				"mint",
				"olive juice",
				"sugar cube",
				"whipped cream",
			],
			tailwindBG: "bg-emerald-800",
			tailwindBorder: "border-emerald-800",
			hoverBorder: "hover:border-emerald-800",
			hoverTextColor: "hover:text-emerald-800",
			tailwindTextColor: "text-emerald-800",
		},
	];

	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [possibleCocktails, setPossibleCocktails] = useState([]);

	function handleSelectItem(itemName) {
		/* remove if already selected */
		for (let i = 0; i < selectedItems.length; i++) {
			if (selectedItems[i] == itemName) {
				let filteredItems = selectedItems.filter(
					(item) => item !== itemName
				);
				setSelectedItems(filteredItems);
				return;
			}
		}
		/* add to list otherwise */

		setSelectedItems((prevItems) => [...prevItems, itemName]);
	}

	/* render cocktails based on selectedItems */
	useEffect(() => {
		setPossibleCocktails(
			cocktails
				.filter((cocktail) => {
					if (
						selectedItems.some(
							(item) =>
								cocktail.ingredients.includes(item) ||
								cocktail.ingredients.some((itemArr) =>
									itemArr.includes(item)
								)
						)
					) {
						return cocktail;
					}
				})
				// sort possible cocktails based on ratio of available ingredients to total ingredients
				.sort((a, b) => {
					let [numOfIngredientsA, numOfIngredientsB] = [
						a.ingredients.length,
						b.ingredients.length,
					];
					let numOfAvailableA = 0;
					let numOfAvailableB = 0;
					selectedItems.forEach((item) => {
						if (
							a.ingredients.includes(item) ||
							a.ingredients.some((itemArr) =>
								itemArr.includes(item)
							)
						) {
							numOfAvailableA += 1;
						}
					});
					selectedItems.forEach((item) => {
						if (
							b.ingredients.includes(item) ||
							b.ingredients.some((itemArr) =>
								itemArr.includes(item)
							)
						) {
							numOfAvailableB += 1;
						}
					});
					let ratioA = numOfAvailableA / numOfIngredientsA;
					let ratioB = numOfAvailableB / numOfIngredientsB;
					if (ratioA < ratioB) {
						return 1;
					}
					if (ratioB < ratioA) {
						return -1;
					}
					return 0;
				})
		);
	}, [selectedItems]);

	const categoryElements = categories.map((category, idx) => {
		return (
			<li onClick={() => setCurrentCategory(category)} key={idx}>
				<button
					className={
						"cursor-pointer rounded-full py-2 px-4 lg:py-3 lg:px-6 lg:text-xl font-bold mb-1 hover:underline " +
						category.tailwindBG +
						(category.name === currentCategory.name
							? " bg-white border-2 " +
							  category.tailwindBorder +
							  " " +
							  category.tailwindTextColor +
							  ""
							: " text-white")
					}
				>
					{category.name}
				</button>
			</li>
		);
	});

	const itemElements = categories
		.filter((category) => category.name === currentCategory.name)[0]
		.items.map((item, idx) => {
			let {
				tailwindBG,
				hoverTextColor,
				hoverBorder,
				tailwindTextColor,
				tailwindBorder,
			} = currentCategory;
			return (
				<li className="h-min" key={idx}>
					<button
						onClick={() => handleSelectItem(item)}
						className={
							selectedItems.includes(item)
								? `selected-item selected-category-item cursor-pointer font-bold rounded-full py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${tailwindBorder} ${tailwindTextColor}`
								: "cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl hover:bg-white border-white border-2 " +
								  tailwindBG +
								  " " +
								  hoverTextColor +
								  "  " +
								  hoverBorder +
								  " " +
								  hoverTextColor
						}
					>
						{item}
					</button>
				</li>
			);
		});

	const selectedElements = selectedItems.map((item, idx) => {
		let bgColor = categories.filter((category) =>
			category.items.includes(item)
		)[0].tailwindBG;
		return (
			<li
				onClick={() => handleSelectItem(item)}
				className={
					"selected-item cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-3 lg:px-6 lg:text-2xl " +
					bgColor
				}
				key={idx}
			>
				{item}
			</li>
		);
	});

	const cocktailCards = possibleCocktails.map((cocktail, idx) => {
		let missing = cocktail.ingredients
			.map((ingredient) => {
				if (
					selectedItems.some((item) => item === ingredient) ||
					selectedItems.some((item) => ingredient.includes(item))
				) {
					return "";
				} else {
					return ingredient;
				}
			})
			.filter((item) => !!item);
		return (
			<Cocktail
				name={cocktail.name}
				ingredients={cocktail.ingredients}
				missing={missing}
				photoString={cocktail.photoString}
				selectedItems={selectedItems}
				key={idx}
			/>
		);
	});

	return (
		<Router>
			<main className="App min-w-screen flex flex-col items-center justify-center p-3 lg:pt-8">
				<div className="flex-1 flex flex-col max-w-5xl">
					<div className="w-full px-4 max-w-5xl gap-12 relative flex items-center">
						<h1 className="font-cursive text-5xl inline mx-auto">
							cocktails{" "}
							<i className="fa-solid fa-whiskey-glass"></i>
						</h1>
						<small className="inline absolute right-4 font-cursive underline text-xl cursor-pointer">
							<Link to="/all">
								<i className="fa-solid fa-border-all block md:hidden text-3xl text-blue-600"></i>
								<small className="hidden md:block">
									All cocktails
								</small>
							</Link>
						</small>
					</div>
					<Routes>
						<Route
							path="/"
							element={
								<Main
									itemElements={itemElements}
									categoryElements={categoryElements}
									selectedItems={selectedItems}
									selectedElements={selectedElements}
									cocktailCards={cocktailCards}
								/>
							}
						></Route>
						<Route
							path="/all"
							element={<All cocktails={cocktails} />}
						></Route>
					</Routes>
				</div>
			</main>
		</Router>
	);
}
