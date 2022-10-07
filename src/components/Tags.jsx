import React from "react";

const Tags = ({ tags }) => {
	return (
		<ul className="flex mx-auto">
			{tags.map((tag) => (
				<li
					className="rounded-full text-sm border border-black px-2 py-0 md:text-md md:px-3 md:py-1 hover:text-white hover:bg-black cursor-pointer uppercase"
					key={tag}
				>
					<p>{tag}</p>
				</li>
			))}
		</ul>
	);
};

export default Tags;
