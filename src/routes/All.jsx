import React, { useState } from "react";
import Cocktail from "../components/Cocktail";
import { Link, useNavigate } from "react-router-dom";
import ViewPill from "../components/ViewPill";

const All = ({ cocktails, onAllPage, selectedTags }) => {
	const [allView, setAllView] = useState("gallery");
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex items-center w-full px-4">
				<i
					onClick={() => navigate(-1)}
					className="text-black fa-solid fa-circle-left text-3xl absolute top-4 left-4 cursor-pointer"
				></i>
				<h1 className="text-3xl py-3 mx-auto">All Cocktails</h1>
			</div>
			<ViewPill view={allView} setView={setAllView} />
			{allView === "list" ? (
				<ul
					className="flex flex-col items-center
			w-full my-4 mx-auto text-left"
				>
					{cocktails.map((cocktail) => {
						return (
							<li
								key={Math.random()}
								className="text-3xl underline cursor-pointer"
							>
								<Link
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
						);
					})}
				</ul>
			) : (
				<ul className="sm:w-full p-4 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
					{cocktails.map((cocktail) => (
						<Cocktail
							key={cocktail.name}
							tags={cocktail.tags ?? []}
							name={cocktail.name}
							missing={[]}
							onAllPage={true}
							selectedTags={selectedTags}
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
