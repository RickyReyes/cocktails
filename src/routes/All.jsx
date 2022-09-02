import React, { useState } from "react";
import Cocktail from "../components/Cocktail";
import { useNavigate } from "react-router-dom";
import ViewPill from "../components/ViewPill";

const All = ({ cocktails, onAllPage }) => {
	const [view, setView] = useState("gallery");

	const navigate = useNavigate();
	return (
		<div>
			<div className="flex items-center relative w-full px-4">
				<i
					onClick={() => navigate(-1)}
					className="text-black fa-solid fa-circle-left text-3xl absolute cursor-pointer"
				></i>
				<h1 className="font-cursive text-3xl py-3 mx-auto">
					all cocktails
				</h1>
			</div>
			<ViewPill view={view} setView={setView} />
			{view === "list" ? (
				<ul
					className="flex flex-col items-start
			w-full m-4 text-left"
				>
					{cocktails.map((cocktail) => (
						<li
							key={Math.random()}
							className="text-3xl underline cursor-pointer"
						>
							{cocktail.name}
						</li>
					))}
				</ul>
			) : (
				<ul className="sm:w-full p-4 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
					{cocktails.map((cocktail) => (
						<Cocktail
							tags={cocktail.tags ?? []}
							key={Math.random()}
							name={cocktail.name}
							missing={[]}
							onAllPage={true}
							ingredients={cocktail.ingredients}
							photoString={cocktail.photoString}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default All;