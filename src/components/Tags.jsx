import React from "react";

const Tags = ({ tags }) => {
	return (
		<ul className="flex mx-auto ">
			{tags.map((tag) => (
				<li className="border: " key={tag}>
					<p>{tag}</p>
				</li>
			))}
		</ul>
	);
};

export default Tags;
