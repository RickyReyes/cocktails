import React, { useState, useId } from "react";
import SearchComponent from "../components/SearchComponent";
import Tags from "../components/Tags";

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
			<div className="flex mx-auto flex-col md:flex-row">
				<div>
					<h2 className=" text-3xl pb-3 font-medium text-slate-800">
						Select Ingredients.
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
							<h2 className=" text-3xl py-3 text-slate-800 font-medium">
								You've selected:
							</h2>
							<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
								{selectedElements}
							</ul>
						</div>
						<div className="flex-1 p-2 border-0 lg:border-l -mt-1">
							<h2 className=" text-3xl py-3 text-slate-800 font-medium">
								Apply tags.
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
					<h2 className="text-slate-800 text-3xl pb-3 font-medium">
						You can make:
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
