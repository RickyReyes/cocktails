import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Cocktail from "./components/Cocktail";

import All from "./routes/All";
import Main from "./routes/Main";
import CocktailPage from "./routes/CocktailPage";

const cocktails = [
	{
		name: "Americano",
		ingredients: ["Sweet Vermouth", "Campari", "Club Soda", "Orange Twist"],
		amounts: ["1.5 oz", "1.5 oz", "Top with", ""],
		tags: ["Bitter", "Bubbly", "Classic", "Low ABV"],
		photoString: "bg-americano",
		facts: [
			"The Americano is the precursor to the Negroni.",
			`It is the first drink ordered by James Bond in the first novel in Ian Fleming's series, Casino Royale. In From Russia With Love, Bond drinks "Two excellent Americanos" in Rome during his flight to Istanbul.`,
		],
	},
	{
		name: "Aperol Spritz",
		ingredients: ["Aperol", "Prosecco", "Club Soda", "Orange Slice"],
		amounts: ["2 oz", "3 oz", "1 oz", ""],
		tags: ["Aperitif", "Refreshing", "Bubbly", "Low ABV"],
		photoString: "bg-aperol-spritz",
	},
	{
		name: "Boulevardier",
		ingredients: [
			["Bourbon", "Rye Whiskey"],
			"Sweet Vermouth",
			"Campari",
			"Orange Twist",
		],
		amounts: ["1 oz", "1 oz", "1 oz", ""],
		tags: ["Bitter", "Spirit-Forward"],
		photoString: "bg-boulevardier",
		facts: [
			"The Boulevardier is simply a variation on the classic Negroni that is adored for its deft Balance of  Bitters, boozy and sweet.",
			"While the gin-based Negroni is crisp and bracing, the whiskey-based Boulevardier is rich and warming.",
		],
	},
	{
		name: "Caipirinha",
		ingredients: ["Cachaça", "Lime Wedges", "Sugar"],
		amounts: ["2 oz", "8", "2 tsp"],
		tags: ["Refreshing"],
		photoString: "bg-coming-soon",
		facts: [
			"The Caipirinha is Brazil's national drink, and cachaça is the country's national spirit.",
		],
	},
	{
		name: "Carajillo",
		ingredients: ["Espresso", "Licor 43"],
		amounts: ["1.5 oz", "1.5 oz"],
		tags: ["Low ABV", "Simple"],
		photoString: "bg-carajillo",
		facts: [
			"A classic Spanish cocktail, popular in Mexico.",
			"According to folk etymology, its origin dates to the times when Cuba was a Spanish province. The troops combined coffee with Rum to give them courage. Spanish coraje means courage, and its diminutive form is corajillo, later changing to carajillo.",
		],
	},
	{
		name: "Champagne Cocktail",
		ingredients: [
			"Champagne",
			"Sugar Cube",
			"Angostura  Bitters",
			"Lemon twist",
		],
		amounts: ["5 oz", "1", "4 dashes"],
		tags: ["Bubbly", "Classic"],
		photoString: "bg-coming-soon",
		facts: [
			"This simple classic originally appeared in 'The Bartender’s Guide,' an 1862 tome by Jerry Thomas.",
		],
	},
	{
		name: "Coffee Negroni",
		ingredients: ["Gin", "Sweet Vermouth", "Campari", "Coffee Liqueur"],
		amounts: ["1 oz", "0.75 oz", "0.75 oz", "0.5 oz"],
		tags: ["Bubbly", "Classic"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Corpse Reviver #2",
		ingredients: [
			"Gin",
			"Lillet Blanc",
			"Lemon Juice",
			"Orange Liqueur",
			"Absinthe",
		],
		amounts: ["0.75 oz", "0.75 oz", "0.75 oz", "0.75 oz", "Rinse with"],
		tags: ["Tart"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Cosmopolitan",
		ingredients: [
			"Vodka",
			"Orange Liqueur",
			"Lime Juice",
			"Cranberry Juice",
		],
		amounts: ["2 oz", "1 oz", "0.75 oz", "0.25 oz"],
		tags: ["Tart", "Classic"],
		photoString: "bg-cosmopolitan",
	},
	{
		name: "Daiquiri",
		ingredients: [["White Rum", "Dark Rum"], "Lime Juice", "Simple Syrup"],
		amounts: ["2 oz", "0.75 oz", "1 oz"],
		tags: ["Tart", "Classic"],
		photoString: "bg-daiquiri",
	},
	{
		name: "Dark and Stormy",
		ingredients: ["Dark Rum", "Ginger Beer", "Lime Juice"],
		amounts: ["2 oz", "3 oz", "0.5 oz"],
		tags: ["Citrusy", "Bubbly"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Dirty Martini",
		ingredients: [["Gin", "Vodka"], "Olive Brine"],
		amounts: ["2.5 oz", "0.5 oz"],
		tags: ["Spirit-Forward", "Savory"],
		photoString: "bg-dirty-martini",
	},
	{
		name: "Eastside",
		ingredients: [
			"Gin",
			"Lime Juice",
			"Cucumber",
			"Mint Leaves",
			"Simple Syrup",
		],
		amounts: ["2 oz", "0.75 oz", "4-5 wheels", "8-12", "1 oz"],
		tags: ["Personal Favorite", "Refreshing"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Espresso Martini",
		ingredients: ["Vodka", "Espresso", "Coffee Liqueur", "Vanilla Syrup"],
		amounts: ["2 oz", "1.5 oz", "0.5 oz", "0.5 oz"],
		tags: ["Modern classic", "Personal Favorite"],
		photoString: "bg-espresso-martini",
	},
	{
		name: "French 75",
		ingredients: ["Gin", "Lemon", "Simple Syrup", "Champagne"],
		amounts: ["1 oz", "0.5 oz", "0.5 oz", "Top with 3 oz"],
		tags: ["Citrusy", "Bubbly", "Classic"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Gimlet",
		ingredients: [["Gin", "Vodka"], "Lime Juice", "Simple Syrup"],
		amounts: ["2 oz", "0.75 oz", "1 oz"],
		tags: ["Tart", "Refreshing", "Classic"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Gin & Tonic",
		ingredients: ["Gin", "Tonic"],
		amounts: ["2 oz", "3 oz"],
		tags: [
			"Bubbly",
			"Refreshing",
			"Classic",
			"Simple",
			"Personal Favorite",
		],
		photoString: "bg-gin-and-tonic",
	},
	{
		name: "Gin Fizz",
		ingredients: [
			"Gin",
			"Lemon Juice",
			"Simple Syrup",
			"Egg White",
			"Club  Soda",
		],
		amounts: ["2 oz", "0.75 oz", "1 oz", "1", "Top with"],
		tags: ["Classic", "Bubbly"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Greyhound",
		ingredients: ["Vodka", "Grapefruit Juice"],
		amounts: ["2 oz", "Top with"],
		tags: ["Simple", "Refreshing"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Hemingway Daiquiri",
		ingredients: [
			"White Rum",
			"Maraschino Liqueur",
			"Lime Juice",
			"Grapefruit Juice",
		],
		amounts: ["2 oz", "0.5 oz", "0.75 oz", "0.5 oz"],
		tags: ["Classic"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Irish Coffee",
		ingredients: [
			"Irish Whiskey",
			"Simple Syrup",
			"Hot Coffee",
			"Whipped Cream",
		],
		amounts: ["2 oz", "1 oz", "4 oz", "Top with"],
		tags: ["Classic", "Coffee", "Hot"],
		photoString: "bg-irish-coffee",
	},
	{
		name: "Jungle Bird",
		ingredients: [
			"Dark Rum",
			"Campari",
			"Pineapple Juice",
			"Lime Juice",
			"Simple Syrup",
		],
		amounts: ["2 oz", "0.75 oz", "2 oz", "0.5 oz", "0.5 oz"],
		tags: ["Tiki", "Refreshing", "Fruity"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Last Word",
		ingredients: [
			"Gin",
			"Green Chartreuse",
			"Maraschino Liqueur",
			"Lime Juice",
		],
		amounts: ["0.75 oz", "0.75 oz", "0.75 oz", "0.75 oz"],
		tags: ["Tart", "Personal Favorite"],
		photoString: "bg-last-word",
	},
	{
		name: "Mai Tai",
		ingredients: [
			"White Rum",
			"Dark Rum",
			"Orange Liqueur",
			"Lime Juice",
			"Orgeat",
		],
		amounts: [
			"White Rum",
			"Dark Rum",
			"Orange Liqueur",
			"Lime Juice",
			"Orgeat",
		],
		tags: ["Tiki", "Classic", "Refreshing"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Manhattan",
		ingredients: [
			["Bourbon", "Rye"],
			"Sweet Vermouth",
			"Angostura Bitters",
			"Cherry",
		],
		amounts: ["2 oz", "1 oz", "2 dashes", ""],
		tags: ["Classic", "Spirit-Forward"],
		photoString: "bg-manhattan",
	},
	{
		name: "Margarita",
		ingredients: [
			"Tequila",
			"Orange Liqueur",
			"Agave Syrup",
			"Lime Juice",
			"Salt Rim",
		],
		amounts: ["2 oz", "0.5 oz", "0.5 oz", "0.75 oz", ""],
		tags: ["Tart", "Classic", "Personal Favorite"],
		photoString: "bg-margarita",
	},
	{
		name: "Martinez",
		ingredients: [
			"Gin",
			"Sweet Vermouth",
			"Maraschino Liqueur",
			"Angostura  Bitters",
		],
		amounts: ["1.5 oz", "1.5 oz", "0.25 oz", "2 dashes"],
		tags: ["Classic", "Spirit-Forward"],
		photoString: "bg-coming-soon",
	},
	{
		name: "Martini",
		ingredients: [
			["Gin", "Vodka"],
			"Dry Vermouth",
			"Orange  Bitters",
			["Lemon twist", "Olive"],
		],
		amounts: ["3 oz", "0 oz", "0 dashes", ""],

		tags: ["Classic", "Spirit-Forward"],
		photoString: "bg-martini",
	},
	{
		name: "Mezcal Margarita",
		ingredients: ["Mezcal", "Orange Liqueur", "Lime Juice", "Salt Rim"],
		amounts: ["2 oz", "0.5 oz", "0.5 oz", "0.75 oz", ""],
		tags: ["Tart", "Classic", "Personal Favorite"],
		photoString: "bg-mezcal-margarita",
	},
	{
		name: "Mint Julep",
		ingredients: ["Bourbon", "Mint Leaves", "Simple Syrup"],
		amounts: ["2 oz", "8-10", "0.25 oz"],
		tags: ["Classic", "Simple", "Refreshing"],
		photoString: "bg-mint-julep",
		facts: [
			"The mint julep has been promoted by Churchill Downs in association with the Kentucky Derby since 1938. As of 2009, about 120,000 juleps were served at Churchill Downs over the two-day period of the Kentucky Oaks and the Kentucky Derby, virtually all of them in specially made Kentucky Derby collectible glasses.",
		],
	},
	{
		name: "Moscow Mule",
		ingredients: ["Vodka", "Lime Juice", "Ginger Beer"],
		amounts: ["2 oz", "0.75 oz", "Top with"],
		tags: ["Bubbly", "Refreshing"],
		photoString: "bg-moscow-mule",
	},
	{
		name: "Mojito",
		ingredients: [
			"White Rum",
			"Lime Juice",
			"Simple Syrup",
			"Mint Leaves",
			"Club Soda",
		],
		amounts: ["2 oz", "0.75 oz", "1 oz", "8-10", "Top with"],
		tags: ["Classic", "Refreshing", "Bubbly"],
		photoString: "bg-mojito",
	},
	{
		name: "Negroni",
		ingredients: ["Gin", "Sweet Vermouth", "Campari"],
		amounts: ["1 oz", "1 oz", "1 oz", ""],
		tags: ["Spirit-Forward", "Aperitif", "Classic", "Personal Favorite"],
		photoString: "bg-negroni",
		facts: [
			"In 1919, Pascal Olivier Count de Negroni concocted it by asking the bartender, Fosco Scarselli, to strengthen his personal Favorite cocktail, the Americano, by adding gin rather than the normal club soda.",
		],
	},
	{
		name: "Negroni Sbagliato",
		ingredients: ["Prosecco", "Sweet Vermouth", "Campari"],
		amounts: ["1 oz", "1 oz", "3 oz"],
		tags: ["Aperitif", "Bubbly"],
		photoString: "bg-coming-soon",
		facts: [
			"A classic negroni contains equal parts gin, Vermouth, and Campari, while a sbagliato, which translates to “mistake” in Italian, swaps prosecco for gin. Supposedly, a bartender grabbed sparkling wine instead of the spirit as he was making a negroni, and the drink stuck.",
		],
	},
	{
		name: "Old Fashioned",
		ingredients: [
			["Bourbon", "Rye Whiskey"],
			"Sugar Cube",
			"Angostura  Bitters",
			"Orange twist",
		],
		amounts: ["2 oz", "1", "3 dashes", "Orange twist"],
		tags: ["Simple", "Spirit-Forward", "Classic"],
		photoString: "bg-old-fashioned",
		facts: [
			`The first documented definition of the word "Cocktail" was in response to a reader's letter asking to define the word in the 6 May 1806, issue of The Balance and Columbian Repository in Hudson, New York. In the 13 May 1806, issue, the paper's editor wrote that it was a potent concoction of spirits,  Bitters, water, and sugar; it was also referred to at the time as a  Bittersed sling and is essentially the recipe for an old fashioned.`,
		],
	},
	{
		name: "Oaxaca Old Fashioned",
		ingredients: ["Mezcal", "Sugar Cube", "Mole  Bitters"],
		amounts: ["1 oz", "1", "3-4 dashes of"],
		photoString: "bg-oaxaca-old-fashioned",
		tags: ["Spirit-Forward", "Simple"],
	},
	{
		name: "Paloma",
		ingredients: ["Tequila", "Lime Juice", "Grapefruit  Soda"],
		amounts: ["2 oz", "0.75 oz", "Top with"],
		photoString: "bg-paloma",
		tags: ["Simple", "Refreshing", "Citrusy"],
	},
	{
		name: "Paper Plane",
		ingredients: ["Bourbon", "Aperol", "Amaro Nonino", "Lemon Juice"],
		amounts: ["0.75 oz", "0.75 oz", "0.75 oz", "0.75 oz"],
		photoString: "bg-coming-soon",
		tags: ["Tart", "Modern classic"],
	},
	{
		name: "Penicillin",
		ingredients: ["Scotch", "Honey Syrup", "Ginger Syrup", "Lemon Juice"],
		amounts: ["2 oz", "0.5 oz", "0.5 oz", "0.75 oz"],
		photoString: "bg-coming-soon",
		tags: ["Tart", "Smoky", "Modern classic"],
		createdBy:
			"Created by Sam Ross in the mid-2000s, when he was working at New York City’s famous Milk & Honey bar",
	},
	{
		name: "Pisco Sour",
		ingredients: ["Pisco", "Lemon Juice", "Simple Syrup"],
		amounts: ["2 oz", "0.75 oz", "1 oz"],
		photoString: "bg-coming-soon",
		tags: ["Sour"],
	},
	{
		name: "Salty Dog",
		ingredients: ["Vodka", "Grapefruit Juice", "Salt Rim"],
		amounts: ["2 oz", "3 oz", ""],
		photoString: "bg-coming-soon",
		tags: ["Savory", "Refreshing", "Simple"],
	},
	{
		name: "Sazerac",
		ingredients: [
			"Rye Whiskey",
			"Sugar Cube",
			"Peychaud's  Bitters",
			"Absinthe",
			"Lemon twist",
		],
		amounts: ["2 oz", "1", "4 dashes", "Rinse with or spray", ""],
		photoString: "bg-sazerac",
		tags: ["Spirit-Forward"],
	},
	{
		name: "Sidecar",
		ingredients: ["Brandy", "Orange Liqueur", "Lemon Juice", "Sugar Rim"],
		amounts: ["2 oz", "1 oz", "0.75 oz", ""],
		photoString: "bg-sidecar",
		tags: ["Classic", "Sour"],
	},
	{
		name: "Southside",
		ingredients: ["Gin", "Lime Juice", "Simple Syrup", "Mint Leaves"],
		amounts: ["2 oz", "0.75 oz", "1 oz", "10-12"],
		photoString: "bg-southside",
		tags: ["Refreshing", "Tart"],
	},
	{
		name: "Tom Collins",
		ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Club  Soda"],
		amounts: ["2 oz", "0.75 oz", "1 oz", "Top with"],
		photoString: "bg-coming-soon",
		tags: ["Bubbly", "Refreshing", "Classic"],
	},
	{
		name: "Whiskey Sour",
		ingredients: [
			"Bourbon",
			"Lemon Juice",
			"Simple Syrup",
			"Egg White",
			"Angostura Bitters",
		],
		amounts: ["2 oz", "0.75 oz", "1 oz", "1", "Garnish with"],
		photoString: "bg-whiskey-sour",
		tags: ["Classic", "Sour"],
	},
];
const categories = [
	{
		name: "Spirits",
		items: [
			"Absinthe",
			"Bourbon",
			"Brandy",
			"Cachaça",
			"Dark Rum",
			"Gin",
			"Irish Whiskey",
			"Mezcal",
			"Pisco",
			"Rye Whiskey",
			"Scotch",
			"Tequila",
			"Vodka",
			"White Rum",
		],
		tailwindBG: "bg-orange-500",
		tailwindBorder: "border-orange-500",
		hoverBorder: "hover:border-orange-500",
		hoverTextColor: "hover:text-orange-500",
		tailwindTextColor: "text-orange-500",
	},
	{
		name: "Vermouth",
		items: ["Dry Vermouth", "Sweet Vermouth"],
		tailwindBG: "bg-red-700",
		tailwindBorder: "border-red-700",
		hoverBorder: "hover:border-red-700",
		hoverTextColor: "hover:text-red-700",
		tailwindTextColor: "text-red-700",
	},
	{
		name: "Amari",
		items: [
			"Amaro Montenegro",
			"Amaro Nonino",
			"Amaro Ramazzotti",
			"Aperol",
			"Campari",
		],
		tailwindBG: "bg-pink-500",
		tailwindBorder: "border-pink-500",
		hoverBorder: "hover:border-pink-500",
		hoverTextColor: "hover:text-pink-500",
		tailwindTextColor: "text-pink-500",
	},
	{
		name: "Liqueurs",
		items: [
			"Coffee Liqueur",
			"Green Chartreuse",
			"Licor 43",
			"Lillet Blanc",
			"Maraschino Liqueur",
			"Orange Liqueur",
		],
		tailwindBG: "bg-purple-500",
		tailwindBorder: "border-purple-500",
		hoverBorder: "hover:border-purple-500",
		hoverTextColor: "hover:text-purple-500",
		tailwindTextColor: "text-purple-500",
	},
	{
		name: "Juices",
		items: [
			"Cranberry Juice",
			"Grapefruit Juice",
			"Lemon Juice",
			"Lime Juice",
			"Orange Juice",
		],
		tailwindBG: "bg-lime-600",
		tailwindBorder: "border-lime-600",
		hoverBorder: "hover:border-lime-600",
		hoverTextColor: "hover:text-lime-600",
		tailwindTextColor: "text-lime-600",
	},
	{
		name: "Bubbles",
		items: [
			"Champagne",
			"Club Soda",
			"Cola",
			"Ginger Beer",
			"Grapefruit Soda",
			"Prosecco",
			"Tonic",
		],
		tailwindBG: "bg-cyan-600",
		tailwindBorder: "border-cyan-600",
		hoverBorder: "hover:border-cyan-600",
		hoverTextColor: "hover:text-cyan-600",
		tailwindTextColor: "text-cyan-600",
	},
	{
		name: "Syrups",
		items: [
			"Agave Syrup",
			"Ginger Syrup",
			"Honey Syrup",
			"Orgeat",
			"Simple Syrup",
			"Vanilla Syrup",
		],
		tailwindBG: "bg-blue-800",
		tailwindBorder: "border-blue-800",
		hoverBorder: "hover:border-blue-800",
		hoverTextColor: "hover:text-blue-800",
		tailwindTextColor: "text-blue-800",
	},
	{
		name: "Bitters",
		items: ["Angostura Bitters", "Mole Bitters", "Peychaud's Bitters"],
		tailwindBG: "bg-red-400",
		tailwindBorder: "border-red-400",
		hoverBorder: "hover:border-red-400",
		hoverTextColor: "hover:text-red-400",
		tailwindTextColor: "text-red-400",
	},
	{
		name: "Produce",
		items: [
			"Cherry",
			"Egg White",
			"Espresso",
			"Hot Coffee",
			"Lemon Twist",
			"Lime Wedges",
			"Mint Leaves",
			"Olive",
			"Olive Brine",
			"Orange Slice",
			"Orange Twist",
			"Salt Rim",
			"Sugar",
			"Sugar Cube",
			"Sugar Rim",
			"Whipped Cream",
		],
		tailwindBG: "bg-emerald-800",
		tailwindBorder: "border-emerald-800",
		hoverBorder: "hover:border-emerald-800",
		hoverTextColor: "hover:text-emerald-800",
		tailwindTextColor: "text-emerald-800",
	},
];
const allTags = [
	"Aperitif",
	"Bitter",
	"Bubbly",
	"Classic",
	"Citrusy",
	"Fruity",
	"Hot",
	"Low ABV",
	"Modern classic",
	"Personal Favorite",
	"Refreshing",
	"Savory",
	"Simple",
	"Sour",
	"Spirit-Forward",
	"Sweet",
	"Tart",
	"Tiki",
];

export default function App() {
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [possibleCocktails, setPossibleCocktails] = useState([]);
	const [tagFilteredCocktails, setTagFilteredCocktails] =
		useState(possibleCocktails);
	const [selectedTags, setSelectedTags] = useState([]);

	function handleSelectItem(itemName) {
		/* remove if already selected */
		for (let i = 0; i < selectedItems.length; i++) {
			if (selectedItems[i] === itemName) {
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

	function handleSelectTag(tag) {
		console.log(tag);
		if (selectedTags.includes(tag)) {
			setSelectedTags((prevTags) =>
				prevTags.filter((prevTag) => {
					return prevTag !== tag;
				})
			);
		} else setSelectedTags((prevTags) => [...prevTags, tag]);
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
								cocktail.ingredients.some(
									(itemArr) =>
										Array.isArray(itemArr) &&
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

	/* filter cocktails based on selectedTags */
	useEffect(() => {
		setPossibleCocktails(
			cocktails.filter((cocktail) => {
				if (selectedTags.some((item) => cocktail.tags.includes(item))) {
					return cocktail;
				}
			})
		);
	}, [selectedTags]);

	const categoryElements = categories.map((category, idx) => {
		return (
			<li onClick={() => setCurrentCategory(category)} key={idx}>
				<button
					className={
						"Cursor-pointer rounded-full py-2 px-4 lg:py-3 lg:px-6 lg:text-xl font-bold mb-1 hover:underline " +
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
				<li className="H-min" key={idx}>
					<button
						onClick={() => handleSelectItem(item)}
						className={
							selectedItems.includes(item)
								? ` leading-4 selected-item selected-category-item cursor-pointer font-bold rounded-full py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${tailwindBorder} ${tailwindTextColor}`
								: " leading-4 cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl hover:bg-white border-white border-2 " +
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
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
				handleSelectTag={handleSelectTag}
				name={cocktail.name}
				photoString={cocktail.photoString}
				ingredients={cocktail.ingredients}
				tags={cocktail.tags}
				missing={missing}
				selectedItems={selectedItems}
				key={idx}
			/>
		);
	});

	const location = useLocation();
	const onAllPage = location.pathname.includes("all");

	return (
		<main className="App min-w-screen flex relative flex-col items-center justify-center py-16 lg:py-16 px-4">
			<div className="Flex-1 flex flex-col max-w-6xl">
				<div className="W-full px-4 gap-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl inline mx-auto pb-2 md:pb-4 font-bold text-slate-800">
						Welcome to <br className="md:hidden" />
						Create Cocktail App.
					</h1>
					{!onAllPage && (
						<small
							className={`${
								onAllPage ? "Hidden" : ""
							} inline absolute right-4 top-4 underline text-md lg:text-2xl cursor-pointer`}
						>
							<Link
								to="/all"
								className="font-medium  text-slate-800"
							>
								ALL
							</Link>
						</small>
					)}
				</div>
				<Routes>
					<Route
						path="/"
						element={
							<Main
								allTags={allTags}
								categories={categories}
								itemElements={itemElements}
								categoryElements={categoryElements}
								selectedItems={selectedItems}
								selectedElements={selectedElements}
								selectedTags={selectedTags}
								cocktailCards={cocktailCards}
								handleSelectItem={handleSelectItem}
								handleSelectTag={handleSelectTag}
							/>
						}
					></Route>
					<Route
						path="/all"
						element={
							<All
								onAllPage={onAllPage}
								cocktails={cocktails}
								selectedTags={selectedTags}
							/>
						}
					></Route>
					{cocktails.map((cocktail) => (
						<Route
							key={Math.random()}
							path={
								"/" +
								cocktail.name
									.toLowerCase()
									.replace("#", "")
									.split(" ")
									.join("-")
							}
							element={<CocktailPage cocktail={cocktail} />}
						/>
					))}
				</Routes>
			</div>
		</main>
	);
}
