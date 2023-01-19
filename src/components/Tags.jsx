import React from "react";

const Tags = ({ allTags, selectedTags, handleSelectTag }) => {
  return (
    <ul className="flex flex-wrap gap-1 max-w-md mx-auto">
      {allTags.map((tag) => (
        <li
          className={`rounded-md text-sm border border-slate-800 px-2 py-0 md:text-md md:px-3 md:py-1 cursor-pointer uppercase ${
            selectedTags.includes(tag)
              ? "selected-tag selected-tag-sm bg-slate-800 text-white"
              : ""
          }`}
          onClick={() => handleSelectTag(tag)}
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
