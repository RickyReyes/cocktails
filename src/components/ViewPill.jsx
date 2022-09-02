import React from "react";

const ViewPill = ({ view, setView }) => {
	return (
		<div className="flex justify-center border-2 border-black rounded-full inline-flex cursor-pointer">
			<div
				onClick={() => setView("list")}
				className={`rounded-l-full flex items-center gap-2 py-1 px-3 ${
					view === "list" ? "bg-black text-white" : ""
				}`}
			>
				<p>List view</p>
				<i className="fa-solid fa-list-ul"></i>
			</div>
			<div
				onClick={() => setView("gallery")}
				className={`rounded-r-full flex items-center gap-2 py-1 px-3 ${
					view === "gallery" ? "bg-black text-white" : ""
				}`}
			>
				<p>Gallery view</p> <i className="fa-solid fa-border-all"></i>
			</div>
		</div>
	);
};

export default ViewPill;
