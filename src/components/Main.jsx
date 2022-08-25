import React from "react";

const Main = ({
	itemElements,
	categoryElements,
	selectedItems,
	selectedElements,
	cocktailCards,
}) => {
	return (
		<>
			<h2 className="font-cursive text-3xl pb-3">
				1. select your available ingredients...
			</h2>

			<div className="flex justify-center items-start w-full max-w-xl mx-auto">
				<ul className="flex flex-col items-start">
					{categoryElements}
				</ul>
				<ul className="flex flex-wrap items-start gap-1 justify-start items-start h-min">
					{itemElements}
				</ul>
			</div>

			{selectedItems.length > 0 && (
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
					<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
						{cocktailCards}
					</ul>
				</div>
			)}
		</>
	);
};

export default Main;
