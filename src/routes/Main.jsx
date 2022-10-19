import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchComponent from "../components/SearchComponent";
import ViewPill from "../components/ViewPill";

const Main = ({
	allTags,
	selectedTags,
	categories,
	itemElements,
	categoryElements,
	selectedItems,
	selectedElements,
	cocktailCards,
	handleSelectItem,
	handleSelectTag,
	possibleCocktails,
}) => {
	const [searchItems, setSearchItems] = useState([]);
	const [mainView, setMainView] = useState("gallery");

	function handleSearchInput(e) {
		if (e.target.value === "") {
			setSearchItems([]);
			return;
		}
		let newItems = [];
		for (let category of categories) {
			for (let item of category.items) {
				if (
					item.toLowerCase().startsWith(e.target.value.toLowerCase())
				) {
					newItems.push(item);
				}
			}
		}
		setSearchItems(newItems);
	}

	return (
		<>
			<h1 className="text-4xl md:text-5xl lg:text-6xl pb-2 font-bold text-slate-800">
				Welcome to <br className="md:hidden" />
				Create Cocktail App.
			</h1>
			<h2 className="text-slate-800 md:text-xl">
				Select ingredients and/or apply filters based on drink type,
				then scroll down to see suggested cocktails.
			</h2>
			<div className="flex mx-auto flex-col md:flex-row">
				<div>
					<h2 className=" text-3xl pb-3 font-medium text-slate-800">
						Select ingredients.
					</h2>
					<div className="relative flex justify-center items-start mx-auto gap-2">
						<ul className="flex flex-col items-start">
							{categoryElements}
						</ul>
						<div>
							<ul className="flex flex-wrap items-start gap-1 justify-start items-start w-full sm:96 md:w-112 ">
								{itemElements}
							</ul>
						</div>
					</div>
				</div>
				<div>
					<SearchComponent
						selectedItems={selectedItems}
						handleSearchInput={handleSearchInput}
						handleSelectItem={handleSelectItem}
						categories={categories}
						searchItems={searchItems}
					/>
					<div className="flex md:hidden lg:flex flex-col">
						<h2 className="text-3xl py-3 text-slate-800 font-medium">
							Filter by drink type.
						</h2>
						<ul className="flex flex-wrap gap-1 max-w-md mx-auto">
							{allTags.map((tag) => (
								<li
									className={`rounded-full text-sm border border-slate-800 px-2 py-0 md:text-md md:px-3 md:py-1 hover:text-white hover:bg-slate-800 cursor-pointer uppercase ${
										selectedTags.includes(tag)
											? "bg-slate-800 text-white"
											: ""
									}`}
									onClick={() => handleSelectTag(tag)}
									key={tag}
								>
									{tag}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="hidden md:flex lg:hidden flex-col">
				<h2 className="text-3xl py-3 text-slate-800 font-medium">
					Filter by drink type.
				</h2>
				<ul className="flex flex-wrap gap-1 max-w-md mx-auto">
					{allTags.map((tag) => (
						<li
							className={`rounded-full text-sm border border-slate-800 px-2 py-0 md:text-md md:px-3 md:py-1 hover:text-white hover:bg-slate-800 cursor-pointer uppercase ${
								selectedTags.includes(tag)
									? "bg-slate-800 text-white"
									: ""
							}`}
							onClick={() => handleSelectTag(tag)}
							key={tag}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full">
				{selectedItems.length > 0 && (
					<div className="flex-1 p-2">
						<h2 className="text-3xl py-3 text-slate-800 font-medium">
							You've selected:
						</h2>
						<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
							{selectedElements}
						</ul>
					</div>
				)}
				{(selectedItems.length > 0 || selectedTags.length > 0) && (
					<>
						{" "}
						<h2 className="text-slate-800 text-3xl pt-4 pb-2 font-medium">
							Suggested cocktails:
						</h2>
						<ViewPill view={mainView} setView={setMainView} />
						{mainView === "gallery" ? (
							<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
								{cocktailCards}
							</ul>
						) : (
							<ul>
								{possibleCocktails.map((cocktail) => (
									<li
										key={Math.random()}
										className="text-3xl underline cursor-pointer"
									>
										<Link
											key={cocktail.name}
											to={
												"/" +
												cocktail.name
													.replace("#", "")
													.toLowerCase()
													.split(" ")
													.join("-")
											}
										>
											{cocktail.name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default Main;
