import React from "react";
import { useNavigate } from "react-router-dom";

const CocktailPage = ({ cocktail }) => {
	let amountsAndIngredients = [];
	const navigate = useNavigate();
	for (let i = 0; i < cocktail.ingredients.length; i++) {
		amountsAndIngredients.push(
			<li className="text-xl leading-6">
				{(cocktail.amounts ? cocktail.amounts[i] : "") +
					" " +
					(Array.isArray(cocktail.ingredients[i])
						? cocktail.ingredients[i].join(" or ")
						: cocktail.ingredients[i])}
			</li>
		);
	}

	return (
		<div className="mt-4">
			<i
				onClick={() => navigate(-1)}
				className="text-black fa-solid fa-circle-left absolute top-4 left-4 text-3xl cursor-pointer"
			></i>
			<div className="flex flex-col items-center gap-4">
				<div
					className={`rounded-sm bg-cover bg-no-repeat bg-center h-60 w-96 "
					${cocktail.photoString}`}
				></div>
				<div>
					<h1 className="text-5xl font-medium pb-4">
						{cocktail.name}
					</h1>
					<ul className="text-left">{amountsAndIngredients}</ul>
				</div>
			</div>

			{cocktail.facts ? (
				<div className="flex flex-col items-center py-2">
					<h2 className="font-bold text-xl ">Did you know?</h2>
					<ul className="text-left leading-4 pt-1 list-disc list-inside max-w-lg">
						{cocktail.facts.map((fact) => (
							<li key={cocktail} className="leading-4 pb-1">
								&ldquo;{fact}&rdquo;
							</li>
						))}
					</ul>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default CocktailPage;
