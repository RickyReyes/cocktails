import React from "react";
import Cocktail from "./Cocktail";
import { useNavigate } from "react-router-dom";

const All = ({ cocktails }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex items-center relative w-full px-4">
				<i
					onClick={() => navigate(-1)}
					className="text-black fa-solid fa-circle-left text-3xl absolute cursor-pointer"
				></i>
				<h1 className="font-cursive text-3xl py-3 mx-auto underline">
					all cocktails
				</h1>
			</div>
			<ul className="sm:w-full p-4 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
				{cocktails.map((cocktail) => (
					<Cocktail
						name={cocktail.name}
						missing={[]}
						defaultStyling={true}
						ingredients={cocktail.ingredients}
						photoString={cocktail.photoString}
					/>
				))}
			</ul>
		</div>
	);
};

export default All;
