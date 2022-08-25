import React from "react";

export default function Cocktail({
	name,
	missing,
	ingredients,
	photoString,
	defaultStyling,
}) {
	if (defaultStyling === true) {
		return (
			<li
				key={name}
				className="w-full flex flex-col items-start rounded-2xl border-4"
			>
				<div
					className={
						"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " +
						photoString
					}
				></div>
				<h3 className="px-2 pt-3 pb-1 text-2xl text-left font-bold leading-6">
					{name}
				</h3>
				<ul className="px-2 pb-2 text-left leading-5">
					{ingredients.map((ingredient) => (
						<li>
							{Array.isArray(ingredient)
								? ingredient.join(" or ")
								: ingredient}
						</li>
					))}
				</ul>
			</li>
		);
	}

	return (
		<li
			key={name}
			className={
				"w-full flex flex-col items-start rounded-2xl border-4 " +
				(missing.length === 0 ? "border-8 border-green-400" : "")
			}
		>
			<div
				className={
					"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " +
					photoString
				}
			></div>

			<h3 className="px-2 pt-3 text-2xl text-left font-bold leading-2">
				{name}
			</h3>

			<ul className="px-2 text-left leading-5">
				{ingredients.map((ingredient, idx) => {
					return (
						<li
							key={idx}
							className={
								"ingredient " +
								(!missing.includes(ingredient)
									? "font-bold"
									: "")
							}
						>
							{Array.isArray(ingredient)
								? ingredient.join(" or ")
								: ingredient}
						</li>
					);
				})}
			</ul>

			{missing.length > 0 && (
				<h4 className="px-2 pt-1 pb-2 text-left leading-5">
					{/* <span className="font-bold">you're missing:</span>{" "}
					{missing.join(", ")} */}
					<span className="font-bold">you're missing:</span>{" "}
					{missing
						.map((item) =>
							Array.isArray(item) ? item.join(" or ") : item
						)
						.join(", ")}
				</h4>
			)}
		</li>
	);
}
