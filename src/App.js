import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import All from "./routes/All";
import Main from "./routes/Main";
import CocktailPage from "./routes/CocktailPage";

import { cocktails } from "./data";
import { categories } from "./data";
import { allTags } from "./data";

export default function App() {
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);
	const [possibleCocktails, setPossibleCocktails] = useState([]);
	const [quantitySelected, setQuantitySelected] = useState({
        "Spirits" : 0,
        "Vermouth" : 0,
        "Amari" : 0,
        "Liqueurs" : 0,
        "Juices" : 0,
        "Bubbles" : 0,
        "Syrups" : 0,
        "Bitters" : 0,
        "Produce": 0,
        "Miscellaneous": 0
        
    })


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

		/* update quantitySelected state object */
		const category = categories.filter(category => category.items.includes(itemName))[0];
		const name = category.name;
		setQuantitySelected(prev => {
			return ({
				...prev,
				[name]: prev[name] + 1
			})
		})
	}

	function handleSelectTag(tag) {
		if (selectedTags.includes(tag)) {
			setSelectedTags((prevTags) =>
				prevTags.filter((prevTag) => {
					return prevTag !== tag;
				})
			);
		} else setSelectedTags((prevTags) => [...prevTags, tag]);
	}

	/* Takes an array of Cocktails and sorts them in descending order based on highest ratio of  selected ingredients to non-selected ingredients */
	function sortingFunction(arr) {
		return arr.sort((a, b) => {
			let [numOfIngredientsA, numOfIngredientsB] = [
				a.ingredients.length,
				b.ingredients.length,
			];
			let numOfAvailableA = 0;
			let numOfAvailableB = 0;
			selectedItems.forEach((item) => {
				if (
					a.ingredients.includes(item) ||
					a.ingredients.some((itemArr) => itemArr.includes(item))
				) {
					numOfAvailableA += 1;
				}
			});
			selectedItems.forEach((item) => {
				if (
					b.ingredients.includes(item) ||
					b.ingredients.some((itemArr) => itemArr.includes(item))
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
		});
	}

	/* Update the rendered cocktails every time an item or a tag is selected. 
	If only items selected (no tags) or only tags selected (no items), filter through all cocktails.
	If both are selected, render only cocktails that include BOTH the selected tags and selected items.
	*/
	useEffect(() => {
		if (selectedItems.length === 0 && selectedTags.length > 0) {
			setPossibleCocktails(
				sortingFunction(
					cocktails.filter((cocktail) => {
						if (
							selectedTags.some((tag) =>
								cocktail.tags.includes(tag)
							)
						) {
							return cocktail;
						}
					})
				)
			);
		}

		if (selectedItems.length > 0 && selectedTags.length === 0) {
			setPossibleCocktails(
				sortingFunction(
					cocktails.filter((cocktail) => {
						if (
							selectedItems.some(
								(item) =>
									cocktail.ingredients.includes(item) ||
									cocktail.ingredients.some(
										(ingredientArr) =>
											Array.isArray(ingredientArr) &&
											ingredientArr.includes(item)
									)
							)
						) {
							return cocktail;
						}
					})
				)
			);
		}

		if (selectedItems.length > 0 && selectedTags.length > 0) {
			setPossibleCocktails(
				sortingFunction(
					cocktails
						.filter((cocktail) => {
							if (
								selectedTags.some((tag) =>
									cocktail.tags.includes(tag)
								)
							) {
								return cocktail;
							}
						})
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
				)
			);
		}
	}, [selectedItems, selectedTags]);

	const location = useLocation();
	const onAllPage = location.pathname.includes("all");

	return (
		<div className="App min-w-screen flex relative flex-col items-center justify-center py-16 lg:py-16 px-4">
			<div className="Flex-1 flex flex-col max-w-6xl">
				<div className="W-full px-4 gap-4 flex flex-col items-center">
					{!onAllPage && (
						<small
							className={`${
								onAllPage ? "hidden" : ""
							} inline absolute right-4 top-4 underline text-md lg:text-2xl cursor-pointer`}
						>
							<Link
								to="/all"
								className="font-medium  text-slate-800"
							>
								View All
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
								selectedItems={selectedItems}
								selectedTags={selectedTags}
								setSelectedTags={setSelectedTags}
								handleSelectItem={handleSelectItem}
								handleSelectTag={handleSelectTag}
								possibleCocktails={possibleCocktails}
								currentCategory={currentCategory}
								setCurrentCategory={setCurrentCategory}
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
		</div>
	);
}
