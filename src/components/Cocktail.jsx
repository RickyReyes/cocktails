import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({
	name,
	ingredients,
	photoString,
	missing,
	tags,
	onAllPage,
	selectedTags,
	handleSelectTag,
}) {
	if (onAllPage) {
		return (
			<li
				key={Math.random()}
				className="w-full flex flex-col items-start rounded-xl border-4"
			>
				<div
					className={
						"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " +
						photoString
					}
				></div>
				<ul className="flex gap-1 pl-2 pt-2 uppercase flex-wrap text-xs">
					{tags
						.sort((a, b) => a.localeCompare(b))
						.map((tag) => (
							<li
								key={Math.random()}
								className="rounded-full border border-slate-800 px-2 py-0"
							>
								{tag}
							</li>
						))}
				</ul>
				<h3 className="px-2 py-1 text-2xl text-left font-bold leading-6 underline">
					<Link
						to={
							"/" +
							name
								.toLowerCase()
								.replace("#", "")
								.split(" ")
								.join("-")
						}
					>
						{name}
					</Link>
				</h3>
				<ul className="px-2 pb-2 text-left leading-5">
					{ingredients.map((ingredient) => (
						<li key={Math.random()}>
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
				"w-full flex flex-col items-start rounded-xl border-4 " +
				(missing.length === 0 ? "border-4 border-green-400" : "")
			}
		>
			<div
				className={
					"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " +
					photoString
				}
			></div>

			<ul className="flex gap-1 pl-2 pt-2 uppercase flex-wrap text-xs">
				{tags &&
					tags
						.sort((a, b) => a.localeCompare(b))
						.map((tag) => (
							<li
								onClick={() => handleSelectTag(tag)}
								key={Math.random()}
								className={`rounded-full border border-slate-800 px-2 py-0 hover:text-white hover:bg-slate-800 cursor-pointer  ${
									selectedTags.includes(tag)
										? "bg-slate-800 text-white"
										: ""
								}`}
							>
								{tag}
							</li>
						))}
			</ul>
			<Link
				to={
					"/" +
					name.toLowerCase().replace("#", "").split(" ").join("-")
				}
			>
				<h3 className="px-2 pt-2 pb-1 text-2xl md:text-3xl text-left font-bold leading-6 underline text-slate-800">
					{name}
				</h3>
			</Link>

			<ul className="px-2 text-left leading-5">
				{ingredients.map((ingredient) => {
					return (
						<li
							key={Math.random()}
							className={
								"ingredient text-slate-800 " +
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
				<h4 className="px-2 pt-1 text-left">
					<span className="font-bold text-xl text-slate-800">
						You're missing:
					</span>{" "}
				</h4>
			)}
			<p className="pb-2 text-left px-2 leading-5 text-slate-800">
				{missing
					.map((item) =>
						Array.isArray(item) ? item.join(" or ") : item
					)
					.join(", ")}
			</p>
		</li>
	);
}
