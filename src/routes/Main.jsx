import React, { useState } from "react";
import SearchComponent from "../components/SearchComponent";

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
}) => {
	const [searchItems, setSearchItems] = useState([]);
	function handleSearchInput(e) {
		if (e.target.value === "") {
			setSearchItems([]);
			return;
		}
		let newItems = [];
		for (let category of categories) {
			for (let item of category.items) {
				if (item.startsWith(e.target.value)) {
					newItems.push(item);
				}
			}
		}
		setSearchItems(newItems);
	}

	return (
		<>
			<div className="flex mx-auto flex-col md:flex-row">
				<div>
					<h2 className="font-cursive text-3xl pb-3">
						select your available ingredients...
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
				<SearchComponent
					selectedItems={selectedItems}
					handleSearchInput={handleSearchInput}
					handleSelectItem={handleSelectItem}
					categories={categories}
					searchItems={searchItems}
				/>
			</div>

			{selectedItems.length > 0 && (
				<div className="w-full">
					<div className="flex flex-col lg:flex-row">
						<div className="flex-1 p-2">
							<h2 className="font-cursive text-3xl py-3">
								you've selected...
							</h2>
							<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
								{selectedElements}
							</ul>
						</div>
						<div className="flex-1 p-2 border-0 lg:border-l -mt-1">
							<h2 className="font-cursive text-3xl py-3">
								apply tags...
							</h2>
							<ul className="flex flex-wrap gap-1 max-w-md mx-auto">
								{allTags.map((tag) => (
									<li className="rounded-full text-sm border border-black px-2 py-0 md:text-md md:px-3 md:py-1 hover:text-white hover:bg-black cursor-pointer uppercase">
										{tag}
									</li>
								))}
							</ul>
						</div>
					</div>
					<h2 className="font-cursive text-3xl pb-3">
						you can make...
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
						{cocktailCards}
					</ul>
				</div>
			)}
		</>
	);
};

export default Main;
