import React, { useState } from "react";

const Main = ({
	categories,
	itemElements,
	categoryElements,
	selectedItems,
	selectedElements,
	selectedTags,
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
				<div className="basis-3/4">
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
				<div className="flex flex-col basis-1/4 align-center">
					<h2 className="font-cursive text-3xl pb-1">search...</h2>
					<input
						type="text"
						onChange={(e) => handleSearchInput(e)}
						className="border border-gray-300 rounded-sm text-lg p-1 mb-4 max-w-sm mx-auto"
					/>
					<ul className="flex flex-wrap items-start gap-1 justify-start items-start mb-4">
						{searchItems.map((item) => {
							let category = categories.filter((category) =>
								category.items.includes(item)
							)[0];
							return (
								<li className="h-min" key={Math.random()}>
									<button
										onClick={() => handleSelectItem(item)}
										className={
											selectedItems.includes(item)
												? ` leading-4 selected-item selected-category-item cursor-pointer font-bold rounded-full py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${category.tailwindBorder} ${category.tailwindTextColor}`
												: " leading-4 cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl hover:bg-white border-white border-2 " +
												  category.tailwindBG +
												  " " +
												  category.hoverTextColor +
												  "  " +
												  category.hoverBorder +
												  " " +
												  category.hoverTextColor
										}
									>
										{item}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
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
							<p>feature under construction</p>
							<ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
								{selectedTags.map((tag) => (
									<p className="rounded-full px-2 py-0 text-white bg-black cursor-pointer uppercase">
										{tag}
									</p>
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
