import React from "react";

const Tags = ({ allTags, selectedTags, handleSelectTag }) => {
	return (
	<ul className="flex flex-wrap gap-1 max-w-md mx-auto">
		{allTags.map((tag) => (
			<li
				className={`rounded-full text-sm border border-slate-800 px-2 py-0 md:text-md md:px-3 md:py-1 hover:text-white hover:bg-slate-800 cursor-pointer uppercase ${
					selectedTags.includes(tag)
						? "bg-slate-800 text-white"
						: ""
				}`}
				onClick={() => handleSelectTag(tag)}
				key={Math.random()}
			>
				{tag}
			</li>
		))}
	</ul>
)
};

export default Tags;
