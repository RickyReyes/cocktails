import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Cocktail from "./components/Cocktail";

import All from "./routes/All";
import Main from "./routes/Main";
import CocktailPage from "./routes/CocktailPage";

import { cocktails } from "./data";
import { categories } from "./data";
import { allTags } from "./data";

export default function App() {
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [possibleCocktails, setPossibleCocktails] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	const [submit, setSubmit] = useState(false);

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
		console.log(selectedItems.length);
		console.log(possibleCocktails);
		setPossibleCocktails((prevCocktails) =>
			selectedItems.length === 0
				? cocktails.filter((cocktail) => {
						if (
							selectedTags.some((tag) =>
								cocktail.tags.includes(tag)
							)
						) {
							return cocktail;
						}
				  })
				: prevCocktails.filter((cocktail) => {
						if (
							selectedTags.some((tag) =>
								cocktail.tags.includes(tag)
							)
						) {
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
								itemElements={itemElements}
								categoryElements={categoryElements}
								selectedItems={selectedItems}
								selectedElements={selectedElements}
								selectedTags={selectedTags}
								cocktailCards={cocktailCards}
								handleSelectItem={handleSelectItem}
								handleSelectTag={handleSelectTag}
								possibleCocktails={possibleCocktails}
								submit={submit}
								setSubmit={setSubmit}
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
