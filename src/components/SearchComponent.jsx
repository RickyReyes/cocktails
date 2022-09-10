import React from "react";

const SearchComponent = ({
	selectedItems,
	handleSearchInput,
	handleSelectItem,
	categories,
	searchItems,
}) => {
	return (
		<div className="flex flex-col align-left md:align-center">
			<h2 className="font-cursive text-3xl pb-1">search...</h2>
			<input
				type="text"
				onChange={(e) => handleSearchInput(e)}
				className="border border-gray-300 rounded-sm w-48 text-lg p-1 mb-4 max-w-sm mx-auto"
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
	);
};

export default SearchComponent;
